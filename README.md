# Fix My Error Code

Appliance error code reference site. Next.js 14, static generation from JSON.

## Quick start

```bash
npm install
npm run generate    # creates data/error-codes.json (600 entries)
npm run index       # builds public/search-index.json for search
npm run clean
npm run build
npm run start
```

Open http://localhost:3000

## If you see ChunkLoadError or "Cannot find module './948.js'"

This is a stale dev-server cache issue. Do **not** use `npm run dev` after large data changes without cleaning first:

```bash
npm run clean
npm run build
npm run start
```

Or for development:

```bash
npm run clean
npm run dev
```

Kill any old process on port 3000 before restarting.

## Data

- `data/error-codes.json` — all error code pages (600 entries: 8 brands × 5 appliances × 15 codes)
- `public/search-index.json` — lightweight index for client-side search (auto-built on `npm run build`)

Regenerate data:

```bash
npm run generate          # procedural generator (offline)
npm run generate:ai       # Anthropic API (requires .env.local)
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run generate` | Generate error-codes.json |
| `npm run generate:ai` | Regenerate via Anthropic API |
| `npm run index` | Build search-index.json |
| `npm run clean` | Delete .next cache |
| `npm run build` | Production build (651 pages) |
