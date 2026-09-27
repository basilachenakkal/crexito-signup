# Crextio Signup — React Clone

A pixel-close recreation of the "Crextio" create-account screen, built with React + Vite + Tailwind CSS.

## How to run this in VS Code

1. Unzip this folder and open it in VS Code.
2. Open a terminal in VS Code (`` Ctrl+` `` or `` Cmd+` ``) and run:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL it prints (usually `http://localhost:5173`) in your browser.

## File structure

```
crextio-signup/
├── index.html          # HTML entry point
├── package.json        # dependencies + scripts
├── vite.config.js       # Vite bundler config
├── tailwind.config.js   # Tailwind setup
├── postcss.config.js    # PostCSS setup (needed for Tailwind)
├── src/
│   ├── main.jsx          # React root — renders <App />
│   ├── App.jsx           # The actual signup page component
│   └── index.css         # Tailwind directives + base styles
└── README.md
```

## Notes

- The hero photo and the avatar circles use placeholder images (Unsplash / randomuser.me).
  Swap the `HERO_IMAGE` and `AVATARS` constants at the top of `src/App.jsx` for your own
  images if you want an exact match to the original screenshot, since these ones are
  stand-ins, not the original photos.
- Password visibility toggle, form state, and submit handling are all wired up in
  `App.jsx` — the submit currently just logs to console and shows an alert; connect it
  to your own backend/auth logic as needed.
- Everything is built with Tailwind utility classes, so styling changes (colors, spacing,
  rounding) can be made directly in the `className` props without touching a separate
  CSS file.
