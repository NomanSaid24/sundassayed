# Laugon Local Clone

This project mirrors `https://www.laugon.com/` into `cloned-site/public_html/` using Node.js and Puppeteer.

## Commands

```bash
npm run clone
```

Re-captures the live site, downloads the Figma Sites runtime, component bundle, JSON, images, and fonts, then patches the local copy so it does not load Cookiebot, Google Analytics, Google Fonts, Figma reporting, or Usercentrics policy content from the network.

```bash
npm run start
```

Serves the cloned site at `http://localhost:3000/`.

```bash
npm run verify
```

Starts a temporary local server, opens the clone in Puppeteer, checks all discovered hash routes, and fails if the clone tries to fetch remote assets.

## Output

- `cloned-site/public_html/` contains the runnable local clone, matching the reference project layout.
- `snapshots/` contains screenshots captured during cloning and verification.
- `scripts/clone-laugon.js` is the reusable mirroring script.
- `server.js` is the local static server.
