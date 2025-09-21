# Copilot Instructions for `my-portfolio`

Welcome to the `my-portfolio` project! This document provides essential guidelines for AI coding agents to be productive in this codebase. It outlines the architecture, workflows, and conventions specific to this project.

## Project Overview

This is a portfolio website built using [Next.js](https://nextjs.org). The project is structured to showcase case studies, designs, and other portfolio elements. It uses modern web development practices, including:

- **Next.js App Router**: The `src/app` directory follows the App Router paradigm.
- **TypeScript**: Strongly typed codebase for better maintainability.
- **Tailwind CSS**: For styling components.
- **Radix UI**: For accessible UI primitives.
- **Lucide Icons**: For consistent and modern icons.

## Key Directories and Files

- `src/app/`: Contains the main application pages and layouts.
  - `page.tsx`: The homepage.
  - `casestudy/`: Subdirectories for individual case studies.
- `src/components/`: Reusable UI components.
  - `ui/`: Core UI components (e.g., `button.tsx`, `card.tsx`).
  - `custom ui/`: Custom components specific to the portfolio.
- `src/lib/`: Assets and utility functions.
  - `utils.ts`: Shared utility functions.
  - Subdirectories for images and SVGs used in case studies.
- `public/`: Static assets like images and icons.

## Developer Workflows

### Running the Development Server

To start the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The server runs at [http://localhost:3000](http://localhost:3000).

### Building the Project

To build the project for production:

```bash
npm run build
```

### Linting and Formatting

This project uses ESLint for linting and Prettier for formatting. Run the following command to check for linting issues:

```bash
npm run lint
```

### Deployment

The project is configured for deployment on [Vercel](https://vercel.com). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Conventions and Patterns

1. **Component Structure**:
   - Components are organized by type (`ui/`, `custom ui/`) or feature (`case-studies/`).
   - Use Tailwind CSS for styling and Radix UI for accessibility.

2. **Image Handling**:
   - Use the `Image` component from `next/image` for optimized image loading.
   - Store images in `public/` or `src/lib/` as appropriate.

3. **State Management**:
   - Local state is managed using React's `useState` and `useReducer` hooks.

4. **Routing**:
   - Follow the App Router paradigm. Pages are defined in `src/app/`.
   - Use dynamic routing for case studies (e.g., `src/app/casestudy/[caseStudy]/page.tsx`).

5. **Icons**:
   - Use `lucide-react` for consistent iconography.

## External Dependencies

- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework.
- **Radix UI**: Accessible UI components.
- **Lucide Icons**: Icon library.

## Examples

### Adding a New Case Study

1. Create a new directory under `src/app/casestudy/` (e.g., `NewCaseStudy/`).
2. Add a `page.tsx` file with the case study content.
3. Use existing components from `src/components/` to maintain consistency.

### Creating a New UI Component

1. Add the component file in `src/components/ui/`.
2. Use Tailwind CSS for styling.
3. Export the component and document its usage if necessary.

---

For further questions or updates, refer to the `README.md` or project maintainers.