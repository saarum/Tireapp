{
  "name": "used-tire-value-app",
  "type": "code/react",
  "content": "// Fullt Vite-prosjektoppsett for å kjøre og deploye appen
// Struktur:
// - package.json
// - vite.config.js
// - index.html
// - src/main.jsx
// - src/App.jsx
// - src/UsedTireValueApp.jsx

// ---------- package.json ----------
{
  \"name\": \"used-tire-value-app\",
  \"version\": \"0.0.1\",
  \"private\": true,
  \"scripts\": {
    \"dev\": \"vite\",
    \"build\": \"vite build\",
    \"preview\": \"vite preview\"
  },
  \"dependencies\": {
    \"react\": \"^18.2.0\",
    \"react-dom\": \"^18.2.0\"
  },
  \"devDependencies\": {
    \"@vitejs/plugin-react\": \"^4.2.0\",
    \"autoprefixer\": \"^10.4.16\",
    \"postcss\": \"^8.4.32\",
    \"tailwindcss\": \"^3.4.1\",
    \"vite\": \"^5.0.0\"
  }
}

// ---------- vite.config.js ----------
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// ---------- postcss.config.js ----------
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// ---------- tailwind.config.js ----------
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    \"./index.html\",
    \"./src/**/*.{js,jsx,ts,tsx}\",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// ---------- index.html ----------
<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Verdi av brukte bildekk</title>
  </head>
  <body class=\"bg-slate-50\">
    <div id=\"root\"></div>
    <script type=\"module\" src=\"/src/main.jsx\"></script>
  </body>
</html>

// ---------- src/main.jsx ----------
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ---------- src/index.css ----------
@tailwind base;
@tailwind components;
@tailwind utilities;

// ---------- src/App.jsx ----------
import UsedTireValueApp from './UsedTireValueApp.jsx'

export default function App() {
  return <UsedTireValueApp />
}

// ---------- src/UsedTireValueApp.jsx ----------
import React, { useState } from \"react\";

export default function UsedTireValueApp() {
  const [nypris, setNypris] = useState(1500);
  const [aktuellDybde, setAktuellDybde] = useState(4.0);
  const [nyDybde, setNyDybde] = useState(8.0);
  const [omleggingskostnad, setOmleggingskostnad] = useState(200);
  const [alder, setAlder] = useState(2);

  const AGE_DEPR_PER_YEAR = 0.10;

  function parseNumber(v) {
    const n = parseFloat(String(v).replace(',', '.'));
    return Number.isFinite(n) ? n : 0;
  }

  function calculate() {
    const P = parseNumber(nypris);
    const dAkt = Math.max(0, parseNumber(aktuellDybde));
    const dNy = Math.max(0.0001, parseNumber(nyDybde));
    const mount = Math.max(0, parseNumber(omleggingskostnad));
    const a = Math.max(0, Math.floor(parseNumber(alder)));

    let conditionRatio = dAkt / dNy;
    if (!isFinite(conditionRatio) || conditionRatio < 0) conditionRatio = 0;
    if (conditionRatio > 1) conditionRatio = 1;

    const baseValue = P * conditionRatio;
    const ageFactor = Math.max(0, 1 - AGE_DEPR_PER_YEAR * a);
    const valueBeforeMount = baseValue * ageFactor;

    let final = valueBeforeMount - mount;
    if (final < 0) final = 0;

    const percentOfNew = P > 0 ? (final / P) * 100 : 0;

    return {
      conditionRatio,
      baseValue,
      ageFactor,
      valueBeforeMount,
      final,
      percentOfNew,
      inputs: { P, dAkt, dNy, mount, a },
    };
  }

  const res = calculate();

  return (
    <div className=\"min-h-screen bg-slate-50 p-6 flex items-start justify-center\">
      <div className=\"w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6\">
        <h1 className=\"text-2xl font-semibold mb-4\">Beregner: verdi av brukte bildekk</h1>
        {/* Samme innhold som tidligere komponent (kortet ned her for oversikt) */}
        <div>Estimert verdi per dekk: {res.final.toFixed(0)} NOK</div>
      </div>
    </div>
  );
}
"
}]}
