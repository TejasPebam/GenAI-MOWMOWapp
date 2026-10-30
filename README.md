# MowMow — Gemini-powered food assistant

MowMow is a static HTML/CSS/JavaScript food discovery app with a Node.js/Express local server and a Netlify Function for secure server-side Gemini requests.

## Run locally

1. Install Node.js 18 or newer.
2. Open this folder in VS Code.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy `.env.example` to `.env` and set `GEMINI_API_KEY` to your key from Google AI Studio. Keep `.env private; it is ignored by Git.
5. Start the app:
   ```bash
   npm start
   ```
6. Open `http://localhost:3000`.

The app uses `/api/gemini` locally. If no API key is configured, deterministic local ranking is used for development, but live Gemini responses will not be available.

## Deploy to Netlify

1. Push the contents of this folder (not the enclosing ZIP) to your GitHub repository. Do not upload `.env` or your API key.
2. In Netlify, import the repository. The included `netlify.toml` sets the publish directory to `.` and the function directory to `netlify/functions`.
3. In **Site configuration → Environment variables**, add:
   - Key: `GEMINI_API_KEY`
   - Value: your Google Gemini API key
   - Scopes: Functions (and builds if Netlify requests it)
4. Redeploy the site so the function receives the environment variable.
5. Test the AI assistant and Budget Builder on the deployed URL.

The deployed frontend calls `/.netlify/functions/gemini`. The key is read only by the server function; it is never inserted into frontend code. You may optionally set `GEMINI_MODEL`; the default is `gemini-2.5-flash`.

## AI behavior and safety

- Gemini ranks only foods sent from the existing menu catalog; returned IDs are checked against that catalog.
- Deterministic filters enforce exact dish/category matches, vegetarian preferences, protein/health/spice filters where the catalog has supporting metadata, and the stated price cap.
- Budget Builder recomputes the combo total and rejects any selection that exceeds the entered budget.
- Food descriptions and nutrition fields come from the app catalog, not from generated claims.

## API endpoints

- `GET /api/health`
- `GET /api/foods`
- `GET /api/foods/:id`
- `POST /api/gemini` (local Express server)
- `POST /.netlify/functions/gemini` (Netlify deployment)
- `POST /api/recommendations` (legacy deterministic endpoint)
- `POST /api/orders` (demo order endpoint)

## Security note

Never commit `.env`, paste a secret key into browser JavaScript, or share your API key in screenshots. If a key is exposed, revoke it in Google AI Studio and create a replacement. Set usage limits/monitoring in the provider console.


## Catalog expansion and healthy filter update

This revision adds 100 demo food records across Indian, South Indian, Chinese, Italian, healthy, fast-food, dessert, and beverage categories. Nutrition values and ratings are demo estimates, not verified restaurant data. Food photos use remote Unsplash image URLs and the existing image fallback; network access is required for remote photos. The Healthy category now strictly requires category=healthy, a positive healthy signal, a known calorie value <=550, and excludes dessert/sweet drink terms.
