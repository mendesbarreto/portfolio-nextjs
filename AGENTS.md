# AGENTS.md

Guide for agentic coding assistants working on portfolio-nextjs repository.

## Build, Lint, and Test Commands

```bash
npm run dev        # Start dev server with Turbopack (http://localhost:3000)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint
```

No test framework configured. Check with team before adding tests.

## Project Architecture

- **Framework**: Next.js 15.2.2 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 (using @theme syntax)
- **State Management**: React hooks
- **Fonts**: Fira Code monospace

### Directory Structure
```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable React components
│   ├── common/       # Shared components
│   ├── home/         # Home page components
│   ├── about/        # About page components
│   ├── projects/     # Projects page components
│   └── contacts/     # Contacts page components
```

### Path Aliases
Use `@/*` alias for imports from `src/` directory.

## Code Style Guidelines

### Component Structure
1. Place `"use client"` directive at very top for client components
2. Import external libraries first, then internal components using @/* aliases
3. Use named exports for components
4. Define TypeScript interfaces for props

```tsx
"use client";

import React from "react";
import { TitleButton } from "@/components/common/base-button";

interface ComponentProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export function Component({ title, onClick, className }: ComponentProps) {
  return <div className={className}>{title}</div>;
}
```

### Naming Conventions
- **Components**: PascalCase (`HomeSummary`, `Header`)
- **Props interfaces**: PascalCase with `Props` suffix (`HomeSummaryProps`)
- **Variables/Functions**: camelCase (`isMenuOpen`, `handleClick`)
- **Files**: kebab-case (`home-summary.tsx`, `contact-info.tsx`)

### Styling with Tailwind CSS v4
- Use @theme syntax defined in `src/app/globals.css`
- Custom color tokens: `text-mPurple`, `bg-background`, `text-mGray`
- Custom spacing: `max-w-1064`, `px-1064`
- Font family: Fira Code monospace (`font-fira-code`)
- Common classes: `max-w-1064 flex flex-col items-center justify-between gap-4`

### TypeScript
- Strict mode enabled; define explicit interfaces for component props; use type assertions sparingly

### Imports
- External libraries first, internal imports second using @/* alias

### Client vs Server Components
- Use `"use client"` for components with React hooks, browser events, or browser APIs
- Server components by default; mark leaf components as client to optimize RSC

### Next.js Specific Patterns
- Use `next/image`, `next/link`, `next/font/google`; export metadata from layout/page.tsx; use `async/await` for data fetching

### Accessibility
- Include aria-labels, use semantic HTML, ensure keyboard navigation, include alt text, use proper heading hierarchy

### State Management
- Use React hooks for local state; keep state close to where needed; consider extracting custom hooks

### File Organization
- Group related components in feature folders; keep file names matching export name; co-locate small components

### Error Handling
- Use TypeScript for compile-time errors; provide visual feedback for interactions; console errors for debugging

## Code Quality
- Run `npm run lint` before committing
- Follow ESLint configuration (extends next/core-web-vitals, next/typescript)
- Fix all TypeScript type errors; keep functions small and focused; use meaningful names; comment complex logic only

## Font Awesome Integration
- Icons imported from @fortawesome packages; use FontAwesomeIcon component; solid/brand icons from respective packages; configured in src/app/fontAwesomeConfig.ts

## Common Patterns

### Button Component
```tsx
interface ButtonProps {
  onClick?: () => void;
  title: string;
  className?: string;
}

export function Button({ title, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`border border-mPurple bg-background text-white py-2 px-4 ${className}`}>
      {title}
    </button>
  );
}
```

### List Rendering
```tsx
{items.map((item, index) => <Component key={index} {...item} />)}
```

### Conditional Rendering
```tsx
{condition && <div>Content</div>}
```

### Section Header
```tsx
<h2 className="text-2xl font-bold text-white mb-4">
  <span className="text-mPurple">##</span> Section Title
</h2>
```

## Notes
- No test framework configured; check with team before adding tests
- No CI/CD pipeline configuration visible
- Project uses Turbopack; StyledComponents enabled but Tailwind is primary
- Font Awesome integration requires proper icon imports
