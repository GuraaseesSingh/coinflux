# Coinflux

Coinflux is a responsive cryptocurrency dashboard built with Next.js, React, TypeScript, Tailwind CSS, and Recharts.

## Requirements

- Node.js 20.9 or newer
- npm (included with Node.js)
- Git
- Internet access for the optional live Binance ticker

## Run locally

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/GuraaseesSingh/coinflux.git
   cd coinflux
   ```

2. Install the project-pinned pnpm version:

   ```bash
   npm install --global pnpm@12.3.4
   ```

3. Install dependencies from the lockfile:

   ```bash
   pnpm install --frozen-lockfile
   ```

4. Start the Next.js development server:

   ```bash
   pnpm dev
   ```

5. Open the local URL printed in the terminal. By default, it is:

   ```text
   http://localhost:3000
   ```

   If port 3000 is already in use, Next.js will print the alternate port it selected.

## Environment variables

No application-specific environment variables or API keys are required for local development. Coinflux uses sample market data and connects from the browser to Binance's public WebSocket for supported live ticker pairs. The live ticker requires an internet connection; unsupported pairs continue to use the sample prices. Vercel Analytics is enabled only in production.

## Main routes

- `/` — dashboard
- `/markets` — searchable market table and category filters
- `/watchlist` — watchlisted assets
- `/coin/bitcoin` — coin detail page (replace `bitcoin` with a supported coin ID)
- `/myflux` — subscribed assets and live ticker status
- `/my-assets`, `/mytokens`, `/subscribed` — subscription-view aliases

## Available scripts

```bash
pnpm dev      # Start the development server
pnpm build    # Create a production build
pnpm start    # Serve the production build; run pnpm build first
```

## Notes

- Market summaries and chart history are sample data; live prices are only applied to supported Binance pairs while the MyFlux or a subscribed coin-detail view is active.
- Watchlist and subscription selections are held in client memory. They persist while navigating within the app, but reset after a full page refresh.
- There is no test or lint script configured in `package.json`.
