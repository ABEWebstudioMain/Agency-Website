# Agents.MD - AI Coding Assistant Instructions

## Project Overview
This document serves as the comprehensive guide for AI coding assistants (Cursor, GitHub Copilot, etc.) working on this project. It contains all necessary information to understand the project structure, requirements, and development guidelines.

## Project Description
- **Purpose**: Unit05 company website - A multilingual (EN/DE) Next.js application showcasing IT consulting and software development services
- **Technology Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4, Sanity CMS, Docker
- **Architecture**: Server-side rendered Next.js application with internationalization, CMS integration, and Docker containerization
- **Target Environment**: Development (localhost:3000), Production (Google Cloud Run)

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── [locale]/                    # Internationalized routes
│   │   │   ├── page.tsx                 # Homepage
│   │   │   ├── team/                    # Team pages
│   │   │   ├── case-studies/            # Case study pages
│   │   │   ├── services/                # Service detail pages
│   │   │   └── docs/                    # Documentation pages
│   │   ├── libs/                        # Server-side utilities
│   │   └── context/                     # React contexts
│   ├── components/
│   │   ├── About/                       # About section components
│   │   ├── CaseStudies/                 # Case study components
│   │   ├── Common/                      # Reusable UI components
│   │   ├── Footer/                      # Footer components
│   │   ├── Home/                        # Homepage sections
│   │   ├── Navbar/                      # Navigation components
│   │   ├── Services/                    # Service page components
│   │   └── Team/                        # Team-related components
│   ├── data/                            # Static data and mock content
│   ├── lib/
│   │   └── i18n/                        # Internationalization logic
│   ├── static-data/                     # Configuration data
│   ├── styles/                          # Global styles
│   ├── types/                           # TypeScript type definitions
│   └── utils/                           # Client-side utilities
├── public/
│   └── images/                          # Static assets
├── markdown/docs/                       # Documentation content
└── sanity/                              # Sanity CMS configuration
```

## Key Components & Responsibilities
- **Layout Components**: Navbar, Footer - Handle navigation and site-wide elements
- **Home Sections**: Hero, Timeline, ServicePillars, TrustSignals - Homepage content blocks
- **Service Pages**: CustomSoftware, DevSecOps, CloudMigrations, AIOptimization - Detailed service descriptions
- **Team Components**: TeamOverview, EmployeeProfile, EmployeeCard - Team member showcases
- **Case Studies**: CaseStudyCard, CaseStudyDetail - Success story presentations
- **i18n System**: Translation hooks and locale management for EN/DE support

## Development Standards
### Code Style & Conventions
- **TypeScript**: Strict mode enabled, explicit types required
- **React**: Functional components with hooks, "use client" for client components
- **Naming**: kebab-case for files, PascalCase for components, camelCase for variables
- **File Organization**: One component per file, index.tsx for main exports
- **Comment Standards**: JSDoc for public APIs, inline comments for complex logic

### Architecture Patterns
- **Component Structure**: Presentational components with data passed as props
- **State Management**: React hooks for local state, context for shared state
- **Data Flow**: Props down, events up pattern
- **Error Handling**: Error boundaries for component errors, try-catch for async operations
- **Testing Strategy**: Component testing with React Testing Library

## Dependencies & External Services
- **Core Dependencies**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **UI Libraries**: Headless UI components, custom Tailwind utilities
- **CMS**: Sanity for blog content management
- **External APIs**: Email services (Nodemailer), search (Algolia - optional)
- **Database Schema**: Sanity schemas for blog posts, authors, categories
- **Environment Variables**: Sanity project ID, email configuration, analytics IDs

## Common Tasks & Workflows
1. **Adding New Features**: 
   - Create component in appropriate directory
   - Add TypeScript types if needed
   - Update translations in both EN/DE
   - Test in both locales
   
2. **Bug Fixes**: 
   - Identify component causing issue
   - Check TypeScript errors first
   - Verify i18n translation keys exist
   - Test across different screen sizes
   
3. **Testing**: 
   - Run `npm run build` to check for build errors
   - Test in both English and German locales
   - Verify responsive design on mobile/desktop
   
4. **Deployment**: 
   - Docker build with multi-stage process
   - Environment variables injected at build time
   - Deploy to Google Cloud Run via GitHub Actions

## Operating Rules for AI Coding Assistants

### Core Principles (Do not ask, just build)
- **NO CLARIFYING QUESTIONS**: Make best, conservative assumptions based on this document
- **WORK IN LARGE BATCHES**: Process up to 25 files per iteration when possible
- **PRESENT UNIFIED CHANGES**: Provide ONE combined diff per iteration
- **CONTINUE ON SOFT ERRORS**: Only stop for HARD ERRORS (missing critical dependencies, undefined core operations)

### Development Workflow
1. **Follow Component Patterns**: Component → Props Interface → Styling → i18n Integration
2. **Maintain Separation of Concerns**: Keep UI components separate from data logic
3. **Preserve Generated Code**: Never modify auto-generated Sanity schemas or Next.js config
4. **Authorized Write Locations**: Only write to: `src/components/`, `src/types/`, `src/data/`, `src/lib/`, `src/styles/`

### Quality Assurance Process
After each iteration, automatically execute:
```bash
npm install
npm run build
npm run lint
tsc --noEmit --pretty
```

If commands fail:
- Fix TypeScript errors immediately without asking
- Ensure all translation keys exist in both locales
- Re-run the full quality assurance process
- Continue development only after all checks pass

### Decision Making Guidelines
- **Prefer Tailwind Classes**: Use utility classes over custom CSS
- **Follow i18n Patterns**: Always support both EN/DE locales
- **Use Existing Types**: Leverage defined TypeScript interfaces
- **Maintain Responsive Design**: Ensure mobile-first approach
- **Prioritize Performance**: Optimize images, lazy load components

## Internationalization (i18n) Guidelines
- **Translation Keys**: Use nested object structure (e.g., `common.hero.title`)
- **Locale Support**: English (en) as default, German (de) as secondary
- **Translation Function**: Use `useTranslation(locale)` hook in components
- **Array Handling**: Cast translation results as arrays when needed: `as string[]`
- **Fallback Strategy**: Always provide English fallback for missing German translations

## Styling Guidelines
- **Tailwind CSS 4**: Use new syntax with `@theme` and `@utility` directives
- **Color System**: Primary (#4a6cf7), dark text (#79808a), stroke (#e5e7eb)
- **Typography**: Lexend for headings, Inter for body text
- **Responsive Design**: Mobile-first with sm:, md:, lg:, xl: breakpoints
- **Dark Mode**: Support via `dark:` variants and theme context

## Component Development Patterns
- **Props Interface**: Define TypeScript interface for all component props
- **Default Props**: Use destructuring with defaults where appropriate
- **Event Handlers**: Use descriptive names (handleSubmit, onToggle, etc.)
- **Conditional Rendering**: Use ternary operators for simple conditions, early returns for complex logic
- **State Management**: useState for local state, useEffect for side effects

## Troubleshooting & Common Issues
- **Translation Errors**: Ensure translation keys exist in both `en.json` and `de.json`
- **Build Failures**: Check TypeScript errors with `tsc --noEmit`
- **Hydration Issues**: Ensure server and client render the same content
- **Image Loading**: Use Next.js Image component with proper sizing
- **Route Issues**: Verify locale parameter is properly passed through components

## Resources & References
- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS 4**: https://tailwindcss.com/docs
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Sanity Documentation**: https://www.sanity.io/docs
- **Architecture Decisions**: See component comments and type definitions

---
**Last Updated**: January 2025
**Version**: 2.1.0

<system_reminders>
IMPORTANT: For generating diffs, pay close attention to indentation and whitespace! This is critical for the parser to apply the diffs.

CRITICAL i18n RULES:
- Always cast translation arrays: `(t('key', { returnObjects: true }) as string[])`
- Check translation key existence before using .map()
- Provide fallback arrays for missing translations
- Support both EN/DE locales in all new features
</system_reminders>