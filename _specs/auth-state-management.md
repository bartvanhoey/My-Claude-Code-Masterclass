# Auth State Management

## Overview

Implement a global authentication state management solution using a React context and a `useUser` hook. The hook exposes the currently authenticated Firebase user (or `null` if logged out) to any page or component in the app. Auth state is driven by a single real-time Firebase listener that keeps all consumers in sync automatically.

## Goals

- Provide a single source of truth for the current user across the entire app
- Expose auth state via a `useUser` hook that any component or page can call
- React immediately to Firebase auth changes (login, logout, token refresh) without polling
- Keep the solution simple — no login/logout/signup UI in scope for this spec

## Out of Scope

- Sign-up, login, or logout flows
- Role-based access control or permissions
- Route protection / redirect logic
- Any UI for authentication

## User Stories

- As a developer, I can call `useUser()` in any component or page and receive the current Firebase `User` object (or `null` if not authenticated)
- As a developer, the user state updates automatically in all consumers when Firebase auth state changes, without any manual refresh
- As a developer, I have a single place to manage auth state rather than scattering Firebase listener calls across the codebase

## Behaviour

- On app load, a single `onAuthStateChanged` listener is registered once at the top of the component tree
- While Firebase resolves the initial auth state, a loading flag is available so consumers can avoid rendering before the user status is known
- Once resolved, `useUser()` returns either the Firebase `User` object or `null`
- Any subsequent auth change (e.g. session expiry) updates state globally and all consumers re-render

## Acceptance Criteria

- [ ] A React context (`AuthContext`) holds the current user and loading state
- [ ] An `AuthProvider` component wraps the app and registers the Firebase `onAuthStateChanged` listener exactly once
- [ ] A `useUser` hook is exported and usable from any component or page
- [ ] `useUser` returns `{ user: User | null, loading: boolean }`
- [ ] `loading` is `true` only until Firebase resolves the initial auth state
- [ ] The `AuthProvider` is mounted at the root layout so every route has access
- [ ] Any existing components that reference the current user are updated to consume `useUser` instead of direct Firebase calls
- [ ] No prop-drilling of user state anywhere in the component tree

## File Structure

```
context/
  AuthContext.tsx       # Context definition, AuthProvider, useUser hook
app/
  layout.tsx            # AuthProvider added here to wrap the entire app
```

## Notes

- Use Firebase's `onAuthStateChanged` from `firebase/auth` (already configured in `lib/firebase.ts`)
- The `auth` export from `lib/firebase.ts` should be passed to the listener — do not re-initialise Firebase
- Keep the context file self-contained: context, provider, and hook all in one file
