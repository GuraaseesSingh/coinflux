# Coinflux

A Next.js (App Router) web app built with React, TypeScript, Tailwind CSS and shadcn/ui.

## Prerequisites

- **Node.js** 20 or newer (tested with Node 22)
- **pnpm** (the repo pins `pnpm@12.3.4` in `package.json`)

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

## Run the project locally

1. Clone the repository and open the project folder:

   ```bash
   git clone https://github.com/aasees11/coinflux.git
   cd coinflux
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and run the production build

Run these before deploying to make sure the project compiles cleanly:

```bash
pnpm build
pnpm start
```

`pnpm start` serves the production build at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | What it does                          |
| ------------ | ------------------------------------- |
| `pnpm dev`   | Start the Next.js dev server          |
| `pnpm build` | Create an optimized production build  |
| `pnpm start` | Serve the production build            |

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import the repository.
3. Keep the detected settings: framework preset **Next.js**, install command `pnpm install`, build command `pnpm build`, output directory left blank.
4. Click **Deploy**.

Vercel runs the same `pnpm install` and `pnpm build` steps listed above, so a successful local `pnpm build` means the Vercel build should succeed too.

## Project structure

- `app/` - routes and layouts (App Router)
- `components/ui/` - shadcn/ui components
- `lib/` - shared utilities and coin data helpers
- `public/` - static assets
