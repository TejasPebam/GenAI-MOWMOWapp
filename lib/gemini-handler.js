const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
// Use the server's canonical catalog; never trust client-submitted prices or nutrition data.
const CANONICAL_FOODS = require('../js/data.js').foods || [];

function parseBudget(text) {
  const m = String(text || '').match(/(?:under|below|less than|upto|up to|within|max(?:imum)?|budget(?: of)?|₹|rs\.?\s*)\s*₹?\s*(\d{1,5})/i);
  return m ? Number(m[1]) : null;
}
function foodText(f) {
  return [f.name, f.category, f.cuisine, f.restaurant, f.description, ...(f.tags || [])].filter(Boolean).join(' ').toLowerCase();
}
function metadataText(f) {
  return [f.name, f.category, f.cuisine, ...(f.tags || [])].filter(Boolean).join(' ').toLowerCase();
}
function inferCategory(q) {
  const tests = [
    ['biryani', /\bbiryani\b/], ['cake', /\bcake\b/], ['dessert', /\bdessert|desserts|sweet tooth|ice cream|brownie|sundae\b/],
    ['pizza', /\bpizza\b/], ['burger', /\bburger\b/], ['pasta', /\bpasta\b/],
    ['noodles', /\bnoodle(?:s)?\b/], ['dosa', /\bdosa\b/], ['idli', /\bidli\b/],
    ['paneer', /\bpaneer\b/], ['chicken', /\bchicken\b/], ['rice', /\bfried rice\b|\brice\b/],
    ['salad', /\bsalad\b/], ['shake', /\bmilkshake\b|\bshake\b/], ['chai', /\bchai\b|\btea\b/]
  ];
  return (tests.find(([, re]) => re.test(q)) || [null])[0];
}
function isSweetOrDessert(f) {
  const m = metadataText(f);
  return /\bcake\b|\bdessert\b|\bdesserts\b|\bmilkshake\b|\bshake\b|\bice cream\b|\bbrownie\b|\bsundae\b|\bsweet tooth\b/.test(m)
    || (/\bsweet\b/.test(m) && !/sweet corn/.test(m));
}
function isDrink(f) {
  const m = metadataText(f);
  return /\bbeverage\b|\bbeverages\b|\bdrink\b|\bdrinks\b|\bchai\b|\btea\b|\bcoffee\b|\bmilkshake\b|\bshake\b|\bjuice\b|\bsoda\b/.test(m);
}
function hardFilterFoods(foods, query, mode, budget) {
  const q = String(query || '').toLowerCase();
  const category = inferCategory(q);
  const vegetarian = /vegetarian|\bveg only\b|meat.?free|no meat/.test(q);
  const nonVeg = /non.?veg|chicken|beef|mutton|pork|fish|seafood/.test(q);
  const highProtein = /high.?protein|protein rich|protein|gym|muscle|post.?workout/.test(q);
  const healthy = /healthy|healthier|low.?calorie|light meal|nutritious/.test(q);
  const mild = /less spicy|not spicy|mild|no spice|low spice/.test(q);
  const spicy = /very spicy|extra spicy|spicy food|hot food/.test(q) && !mild;
  const exactTerms = q.match(/\b(chocolate|vanilla|strawberry|cheese|chicken|veg|vegetarian|paneer|mutton|beef|fish|egg)\b/g) || [];
  const explicitlyRequestsDrinkOrDessert = /dessert|cake|sweet|milkshake|shake|juice|chai|tea|coffee|drink|beverage|ice cream|brownie/.test(q);

  return foods.filter(f => {
    const meta = metadataText(f);
    const full = foodText(f);
    const name = String(f.name || '').toLowerCase();
    const price = Number(f.price);
    if (!Number.isFinite(price) || price < 0) return false;

    // Dish intent is matched against item identity/metadata, not arbitrary descriptions.
    if (category) {
      const categoryMatch = category === 'dessert'
        ? isSweetOrDessert(f)
        : category === 'shake'
          ? /\bmilkshake\b|\bshake\b/.test(meta)
          : category === 'rice'
            ? /\brice\b/.test(meta)
            : meta.includes(category);
      if (!categoryMatch) return false;
    }
    // Specific flavor/protein terms should be present in the dish name or metadata.
    for (const term of exactTerms) {
      if (term === 'veg' || term === 'vegetarian') continue;
      if (!meta.includes(term)) return false;
    }
    if (vegetarian && (String(f.diet || '').toLowerCase() !== 'veg' || /chicken|beef|mutton|pork|fish|meat|egg/.test(name))) return false;
    if (nonVeg && String(f.diet || '').toLowerCase() === 'veg') return false;
    if (highProtein && Number(f.protein || 0) < 20) return false;

    if (healthy) {
      const tags = (f.tags || []).map(t => String(t).toLowerCase());
      const healthyEvidence = String(f.category || '').toLowerCase() === 'healthy'
        || tags.some(t => /healthy|salad|low calorie|lean|balanced|whole grain|vegetable bowl/.test(t));
      const calories = Number(f.calories);
      const hasReasonableCalories = Number.isFinite(calories) && calories > 0 && calories <= 500;
      if (isSweetOrDessert(f) || isDrink(f) || !healthyEvidence || !hasReasonableCalories) return false;
    }
    if (mild) {
      if (!explicitlyRequestsDrinkOrDessert && (isSweetOrDessert(f) || isDrink(f))) return false;
      const spice = String(f.spicy || '').toLowerCase();
      const tags = (f.tags || []).map(t => String(t).toLowerCase());
      if (['medium', 'spicy', 'hot', 'extra spicy', 'very spicy'].includes(spice) || tags.some(t => /\bspicy\b/.test(t))) return false;
    }
    if (spicy && !/spicy|hot|medium|extra/i.test(String(f.spicy || '') + ' ' + (f.tags || []).join(' '))) return false;
    if (mode === 'meal' && !explicitlyRequestsDrinkOrDessert && (isSweetOrDessert(f) || isDrink(f))) return false;
    if (budget != null && price > budget) return false;
    return true;
  });
}
function fallbackRank(foods, query) {
  const q = String(query || '').toLowerCase();
  return [...foods].sort((a,b) => {
    if (/highest protein|most protein|protein|gym|muscle/.test(q)) return Number(b.protein||0)-Number(a.protein||0);
    if (/cheapest|affordable|budget/.test(q)) return Number(a.price||0)-Number(b.price||0);
    return Number(b.rating||0)-Number(a.rating||0);
  });
}
async function handleGemini(body = {}) {
  const mode = body.mode === 'meal' ? 'meal' : 'recommend';
  const query = String(body.query || '').trim().slice(0, 500);
  const budget = mode === 'meal' ? Math.max(0, Math.min(100000, Number(body.budget || parseBudget(query) || 0))) : parseBudget(query);
  const foods = CANONICAL_FOODS.slice(0, 300);
  if (!query && mode !== 'meal') return { statusCode: 400, body: { error: 'Please enter a food request.' } };
  if (!foods.length) return { statusCode: 500, body: { error: 'The server food catalog is unavailable.' } };
  if (mode === 'meal' && (!Number.isFinite(budget) || budget <= 0)) return { statusCode: 400, body: { error: 'Enter a budget greater than ₹0.' } };

  const filtered = hardFilterFoods(foods, query, mode, budget);
  if (!filtered.length) return { statusCode: 200, body: { answer: mode === 'meal' ? `I couldn't find matching food items within ₹${budget}. Try a higher budget or relax a preference.` : 'I could not find dishes that match all those preferences. Try changing the food, budget, or dietary filters.', ids: [], total: 0, source: 'filters' } };

  const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY;
  let rankedIds = [];
  let answer = '';
  let source = 'local-fallback';
  if (key) {
    const catalog = filtered.map(f => ({ id: f.id, name: f.name, price: Number(f.price)||0, protein: Number(f.protein)||0, calories: Number(f.calories)||0, rating: Number(f.rating)||0, category: f.category, diet: f.diet, spicy: f.spicy, tags: f.tags || [], description: f.description || '' }));
    const task = mode === 'meal'
      ? `Create a food combo with a TOTAL cost no greater than INR ${budget}. Choose 1-4 different item IDs from this filtered catalog, maximize preference fit and variety, and never exceed the total budget.`
      : `Recommend up to 6 items for the user's request. Every recommendation must match the user's exact dish/category and stated constraints. Do not include unrelated foods.`;
    const prompt = `You are MowMow, a careful food recommendation assistant. User request: ${query || 'Build a balanced meal'}. ${task}\nOnly use these catalog items and their IDs: ${JSON.stringify(catalog)}\nReturn ONLY valid JSON with shape: {"answer":"short helpful explanation","ids":["exact-id", ...]}. Never invent IDs, prices, ingredients, nutrition facts, or availability. For a budget combo, do not select IDs whose combined prices exceed the budget.`;
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2, responseMimeType: 'application/json', maxOutputTokens: 700 } })
      });
      if (!response.ok) {
        const detail = await response.text();
        console.error('Gemini API error:', response.status, detail.slice(0, 500));
      } else {
        const payload = await response.json();
        const raw = payload.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') || '';
        const parsed = JSON.parse(raw);
        const allowed = new Set(filtered.map(f => String(f.id)));
        rankedIds = Array.isArray(parsed.ids) ? parsed.ids.map(String).filter(id => allowed.has(id)) : [];
        answer = typeof parsed.answer === 'string' ? parsed.answer.slice(0, 500) : '';
        source = 'gemini';
      }
    } catch (e) { console.error('Gemini request failed:', e.message); }
  }

  const byId = new Map(filtered.map(f => [String(f.id), f]));
  let picks = rankedIds.map(id => byId.get(id)).filter(Boolean);
  if (!picks.length) picks = fallbackRank(filtered, query);
  if (mode === 'meal') {
    const chosen = []; let total = 0; const seen = new Set();
    for (const f of picks) {
      if (seen.has(String(f.id))) continue;
      const price = Number(f.price) || 0;
      if (total + price <= budget) { chosen.push(f); total += price; seen.add(String(f.id)); }
      if (chosen.length >= 4) break;
    }
    picks = chosen;
    if (!picks.length) return { statusCode: 200, body: { answer: `No suitable combination fits within ₹${budget}. Try increasing your budget.`, ids: [], total: 0, source } };
    return { statusCode: 200, body: { answer: answer || `Here is a combo selected to fit your ₹${budget} budget.`, ids: picks.map(f => f.id), total, budget, source } };
  }
  picks = picks.filter(f => filtered.some(x => String(x.id) === String(f.id))).slice(0, 6);
  return { statusCode: 200, body: { answer: answer || `Here are ${picks.length} matching options for your request.`, ids: picks.map(f => f.id), source } };
}
module.exports = { handleGemini, hardFilterFoods };
