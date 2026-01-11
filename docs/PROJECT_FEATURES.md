# Project Features and Architecture

This document provides detailed information about this project's architecture, tooling, and design decisions for AI agents and developers to quickly understand the codebase.

## Tech Stack

### Core Framework
- **React 19.2.0** - Latest React with new features
- **Vite 7.2.4** - Fast build tool with HMR
- **TypeScript 5.7.2** - Type-safe development

### Styling & UI
- **Tailwind CSS v4.1.18** - Latest version with CSS-first configuration
  - Uses `@theme` directive instead of traditional config file
  - CSS variables defined in `src/styles/globals.css`
  - Class-based dark mode with `.dark` selector
- **shadcn/ui** - High-quality component library
  - Style: "new-york"
  - Components stored in `src/components/ui/`
  - Uses CSS variables for theming

### Code Quality Tools
- **Biome.js** - Fast linter and formatter (replaces ESLint + Prettier)
  - Configuration: `biome.json`
  - Supports TypeScript, JavaScript, JSON
  - Does NOT lint CSS files (Tailwind directives not supported)
- **Husky** - Git hooks management
  - Pre-commit hook at `.husky/pre-commit`
- **lint-staged** - Run linters on staged files only
  - Configuration: `.lintstagedrc.json`
  - Only checks `*.{js,jsx,ts,tsx,json}` files

## Folder Structure

**IMPORTANT**: This project uses a **Next.js App Router-inspired folder structure** even though it's a Vite + React app.

```
src/
├── app/              # Pages (Next.js App Router style)
│   └── page.tsx      # Main application page
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/             # Utility functions
│   └── utils.ts
├── styles/          # CSS files
│   └── globals.css  # Tailwind v4 configuration
└── main.tsx         # Application entry point
```

### Key Differences from Standard Vite Structure
- Uses `src/app/page.tsx` instead of `src/App.tsx`
- Follows Next.js naming conventions (`page.tsx`, not `App.tsx`)
- Imports from `@/app/page` in `main.tsx`

## Theme System

### Implementation Details
The project has a complete theme system with three modes:

1. **Light Theme** (☀️)
   - White background
   - Dark text
   - Button shows sun icon

2. **Dark Theme** (🌙)
   - Dark background
   - Light text
   - Button shows moon icon

3. **System Theme** (💻)
   - Follows OS preference
   - Button shows computer icon
   - Dropdown shows current system theme: "System (Dark)" or "System (Light)"

### How It Works
- **Provider**: `src/components/theme-provider.tsx`
  - Manages theme state
  - Stores preference in `localStorage` with key `vite-ui-theme`
  - Adds `light` or `dark` class to `<html>` element

- **Toggle Component**: `src/components/theme-toggle.tsx`
  - Uses shadcn/ui `DropdownMenu` component
  - Shows appropriate icon based on current theme
  - Displays system preference in dropdown

- **Styling**: `src/styles/globals.css`
  - Light theme colors defined in `@theme { }`
  - Dark theme colors defined in `@layer base { .dark { } }`
  - Uses `hsl()` format for colors (NOT space-separated values)

### Important Notes
- Tailwind v4 uses CSS-first configuration
- Dark mode is **class-based**, not media query based
- The `@theme dark` syntax doesn't work - use `.dark` selector in `@layer base`
- Theme persists across page reloads via localStorage

## Tailwind CSS v4 Configuration

### Key Changes from v3
1. **No config file** - All configuration in CSS
2. **@theme directive** - Define design tokens in CSS
3. **CSS-first** - Use `@import "tailwindcss"` in CSS file
4. **Vite plugin** - Use `@tailwindcss/vite` instead of PostCSS

### Color System
All colors use HSL format with `hsl()` function:
```css
--color-background: hsl(0 0% 100%);  /* ✓ Correct */
--color-background: 0 0% 100%;       /* ✗ Wrong - won't work */
```

### Adding Tailwind to Vite
```typescript
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## Git Workflow

### Pre-commit Hooks
- Automatically runs Biome linter/formatter on staged files
- Only checks `*.{js,jsx,ts,tsx,json}` files
- CSS files are excluded (Tailwind syntax not compatible with Biome)

### Commit Messages
Follow conventional commits format:
- `feat:` - New features
- `fix:` - Bug fixes
- `chore:` - Maintenance tasks
- `docs:` - Documentation updates

## Path Aliases

The project uses `@/` alias for absolute imports:
```typescript
import { Button } from '@/components/ui/button'
import { utils } from '@/lib/utils'
```

Configuration:
- `vite.config.ts` - Vite resolver
- `tsconfig.json` - TypeScript paths

## shadcn/ui Configuration

Configuration file: `components.json`
- Style: new-york
- Base color: neutral
- CSS variables: enabled
- Components path: `src/components/ui/`

### Adding New Components
```bash
npx shadcn@latest add [component-name]
```

## Common Patterns

### Component Import Order
```typescript
// 1. React/external libraries
import { useState } from 'react'

// 2. UI components
import { Button } from '@/components/ui/button'

// 3. Local components
import { ThemeToggle } from '@/components/theme-toggle'

// 4. Types (if needed)
```

### Styling Guidelines
- Use Tailwind utility classes
- Prefer semantic color tokens (`bg-background`, `text-foreground`)
- Use `@apply` sparingly (only in global styles)

## Known Issues & Solutions

### Biome + Tailwind CSS
**Issue**: Biome cannot parse Tailwind-specific CSS syntax (`@theme`, `@apply`)

**Solution**: Exclude CSS files from lint-staged:
```json
{
  "*.{js,jsx,ts,tsx,json}": "biome check ..."
}
```

### Theme Not Switching
**Issue**: Theme changes but styles don't update

**Checklist**:
1. Verify `<html>` has `light` or `dark` class
2. Check CSS variables use `hsl()` format
3. Ensure dark theme styles are in `@layer base { .dark { } }`
4. Not using `@theme dark` (doesn't work in Tailwind v4)

## Development Commands

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run Biome linter
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Biome
```

## For AI Agents

When working on this project:

1. **Folder Structure**: Remember this uses Next.js-style structure (`src/app/page.tsx`)
2. **Tailwind v4**: No config file, everything in CSS with `@theme`
3. **Dark Mode**: Use `.dark` class selector, not media queries
4. **Linting**: Biome only checks JS/TS/JSON, not CSS
5. **Theme System**: Three modes (light/dark/system) with localStorage persistence
6. **Import Paths**: Use `@/` alias for all imports
7. **Components**: shadcn/ui components in `src/components/ui/`

### Quick Reference
- Main page: `src/app/page.tsx`
- Global styles: `src/styles/globals.css`
- Theme provider: `src/components/theme-provider.tsx`
- Entry point: `src/main.tsx`
- Vite config: `vite.config.ts`
- Biome config: `biome.json`
