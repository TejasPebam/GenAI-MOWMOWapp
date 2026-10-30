const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { handleGemini } = require('../lib/gemini-handler');
const foods = require('../js/data.js').foods;

(async () => {
  const recommend = async query => {
    const result = await handleGemini({ mode: 'recommend', query, foods: [{ id: 'fake', name: 'Fake Cake', price: 1, calories: 1 }] });
    assert.equal(result.statusCode, 200, `${query}: request should succeed`);
    return (result.body.ids || []).map(id => foods.find(f => f.id === id)).filter(Boolean);
  };
  let rows = await recommend('Show me best biryani');
  assert.ok(rows.length > 0 && rows.every(f => /biryani/i.test(f.name)), 'biryani query must only return biryani');
  rows = await recommend('healthy options');
  assert.ok(rows.length > 0 && rows.every(f => !/cake|milkshake|shake|chai|dosa/i.test(f.name)), 'healthy query must exclude desserts/drinks and unrelated dishes');
  rows = await recommend('less spicy food');
  assert.ok(rows.every(f => !/cake|milkshake|shake|chai/i.test(f.name)), 'less-spicy food query should not return dessert/drinks');
  rows = await recommend('show me chocolate cake');
  assert.ok(rows.length > 0 && rows.every(f => /cake/i.test(f.name)), 'cake query must not return milkshake');
  rows = await recommend('high protein food');
  assert.ok(rows.every(f => Number(f.protein) >= 20), 'high-protein query must meet protein threshold');
  rows = await recommend('vegetarian options');
  assert.ok(rows.every(f => f.diet === 'Veg'), 'vegetarian query must return vegetarian foods only');
  for (const budget of [7, 8, 100, 300, 500]) {
    const result = await handleGemini({ mode: 'meal', query: 'Build a balanced meal combo', budget, foods: [{ id: 'fake', name: 'Fake Cake', price: 1 }] });
    const selected = (result.body.ids || []).map(id => foods.find(f => f.id === id)).filter(Boolean);
    const total = selected.reduce((sum, f) => sum + Number(f.price || 0), 0);
    assert.ok(total <= budget, `budget ${budget} must not be exceeded`);
    assert.ok(selected.every(f => !/cake|milkshake|shake|chai/i.test(f.name)), `budget ${budget} should avoid sweets/drinks in a balanced meal`);
  }
  console.log('MowMow QA smoke tests passed: exact dish, healthy, mild, protein, vegetarian, and budget limits.');
})().catch(err => { console.error(err); process.exitCode = 1; });

// Catalog expansion regression checks
const added = foods.filter(f => f.id.startsWith('food-extra-'));
assert.strictEqual(added.length, 100, '100 new demo foods should be present');
assert(added.every(f => f.photo && f.photo.startsWith('https://images.unsplash.com/')), 'all added foods should have remote photo URLs');
const healthyCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
assert(healthyCode.includes("f.category !== 'healthy'"), 'healthy category must use strict category filtering');
console.log('Catalog expansion checks passed (100 additional foods).');
