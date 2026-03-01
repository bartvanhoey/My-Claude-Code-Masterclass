# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npm run test      # Run all tests (Vitest)
npx vitest tests/components/Navbar.test.tsx  # Run a single test file
```

## Architecture

**Pocket Heist** is a Next.js 16 App Router project using route groups to separate public and protected areas:

- `app/(public)/` — Unauthenticated routes (splash, login, signup, preview). The root `page.tsx` here is a splash/routing hub; once auth is added it should redirect logged-in users to `/heists`.
- `app/(dashboard)/` — Protected routes (heists list, create, detail). The layout wraps pages with the `Navbar`.
- `components/` — Shared components. Each component lives in its own folder with a `.tsx` file, a `.module.css` file, and an `index.ts` barrel export.
- `tests/` — Vitest + React Testing Library tests, mirroring the `components/` structure.

## Styling

Tailwind CSS 4 is used throughout. The design system is defined via `@theme` in `app/globals.css`:
- **Primary** `#C27AFF` (purple), **Secondary** `#FB64B6` (pink)
- **Dark backgrounds**: `--color-dark`, `--color-dark-2`, `--color-dark-3`
- **Font**: Inter via Google Fonts
- Shared layout utilities (`.page-content`, `.center-content`, `.form-title`) are defined there with `@utility`.

## Testing

Vitest runs in a jsdom environment with globals enabled. The setup file is `vitest.setup.ts`. Tests use `@testing-library/react` and `@testing-library/jest-dom` matchers.


## Additional Coding Preferences

- Do NOT apply tailwind classes directly in component templates unless essential or just 1 at most. If an element needs more than a single tailwind class, combine them into a custom class using the `apply` directive.
- Use minimal project dependencies where possible
- Use the `git switch -c` command to switch to new branches, not `git checkout`

## Checking Documentation

- **important:** When implementing any lib/framework-specific features, ALWAYS check the appropiate lib/framework documentation using the Context7 MCP server before writing any code.
