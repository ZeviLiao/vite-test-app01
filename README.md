# Vite + React 19 + Tailwind v4

A modern React application with Tailwind CSS v4 and shadcn/ui components.

## Tech Stack

- React 19.2.0
- Vite 7.2.4
- TypeScript 5.7.2
- Tailwind CSS v4.1.18
- shadcn/ui
- Biome.js (linter/formatter)

## Features

- Complete theme system (Light/Dark/System)
- shadcn/ui components
- Next.js App Router-style folder structure
- Pre-commit hooks with Husky
- CSS-first Tailwind configuration

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Development

```bash
npm run dev          # Start dev server
npm run lint         # Run linter
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code
```

## Documentation

See [docs/PROJECT_FEATURES.md](docs/PROJECT_FEATURES.md) for detailed information about:
- Project architecture
- Folder structure (Next.js-inspired)
- Theme system implementation
- Tailwind CSS v4 configuration
- Common patterns and solutions

## Notes

- This project uses Next.js App Router folder structure (`src/app/page.tsx`)
- Tailwind v4 uses CSS-first configuration (no config file)
- Theme switching includes light/dark/system modes with localStorage persistence
