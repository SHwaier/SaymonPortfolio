
# Next.js 16 Action Plan

This plan outlines the steps to adopt Next.js 16 features and best practices for the SaymonPortfolio project.

## 1. Migration (Required/Recommended)

### Rename Middleware to Proxy
Next.js 16 introduces `proxy.ts` to replace `middleware.ts`, clarifying that it runs on the Node.js runtime (unless Edge is strictly required, which is less common now).
- **Action**: Rename `middleware.ts` to `proxy.ts`.
- **Change**: Rename the exported function `middleware` to `proxy`.

### Verify Async APIs
You are already using `await params` and `await cookies()`, so your code is compatible with the strict async nature of Next.js 16.
- **Action**: None required. (Already verified in `app/admin/projects/[id]/page.tsx` and `utils/supabase/server.ts`).

## 2. New Features (Opt-in)

### React Compiler
Next.js 16 has stable support for the React Compiler, which automatically optimizes rendering (auto-memoization).
- **Action**: Enable `reactCompiler: true` in `next.config.ts`.
- **Dependency**: Install `babel-plugin-react-compiler`.

### Cache Components (`use cache`)
The new explicit caching model replaces the complex `revalidatePath` guesswork with a clear `"use cache"` directive.
- **Action**: Enable `cacheComponents: true` in `next.config.ts`.
- **Usage**: You can start using `"use cache"` in server functions to cache expensive data fetches or computations.

### Turbopack
You are already using Turbopack locally (`next dev --turbopack`).
- **Action**: Ensure `next build` also uses Turbopack if desired (default in v16, but check build scripts). Your `package.json` has `"build": "next build"`, which now defaults to Turbopack.

## 3. Implementation Steps

1.  **Rename Middleware**:
    -   Move `middleware.ts` to `proxy.ts`.
    -   Update the export name.
2.  **Enable React Compiler** (Optional but recommended for performance):
    -   `npm install babel-plugin-react-compiler`
    -   Update `next.config.ts`.
3.  **Enable Cache Components** (Optional, for future use):
    -   Update `next.config.ts`.
