# Project Memory: Claude-Code-Masterclass (Pocket Heist)

## CSS Modules + Tailwind 4
All `.module.css` files MUST start with `@reference "../../app/globals.css"` before using `@apply` with Tailwind utilities. Without it, Tailwind 4 throws a `Cannot apply unknown utility class` error in CSS Modules.

Example:
```css
@reference "../../app/globals.css";

.myClass {
  @apply flex items-center rounded-full;
}
```
