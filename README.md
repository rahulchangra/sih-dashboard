# Medical Dashboard

This is a Dashboard to monitor progress of patient. A modern dashboard template built with React and Next.js, designed for creating rich web applications.

## Installation

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- npm, yarn, pnpm, or bun (npm is used in the examples below)

### Clone the repository

```bash
git clone <repository-url>
cd material-kit-react
```

### Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Setup

### Environment Variables

This project may use environment variables for configuration. Create a `.env.local` file in the root of the project based on `.env.example` (if available) or the following example:

```
NEXT_PUBLIC_LOG_LEVEL=ALL
# Add any other environment variables here
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

```
.
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierignore
├── CHANGELOG.md
├── eslint.config.mjs
├── LICENSE.md
├── next.config.mjs
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── prettier.config.mjs
├── README.md
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── ... (image assets)
└── src/
    ├── config.ts
    ├── paths.ts
    ├── app/
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   ├── page.tsx
    │   ├── auth/
    │   │   └── ... (auth pages)
    │   ├── dashboard/
    │   │   └── ... (dashboard pages)
    │   └── errors/
    │       └── ... (error pages)
    ├── components/
    │   ├── auth/
    │   │   └── ... (auth components)
    │   ├── core/
    │   │   └── ... (core components)
    │   └── dashboard/
    │       └── ... (dashboard components)
    ├── contexts/
    │   └── user-context.tsx
    ├── hooks/
    │   └── ... (custom hooks)
    ├── lib/
    │   └── ... (utility functions)
    ├── styles/
    │   └── ... (styling files)
    └── types/
        └── ... (type definitions)
```

## Author

Rahul Changra
