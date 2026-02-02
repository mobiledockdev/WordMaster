# WordMaster: Ultimate Vocabulary Builder

Production-ready iOS App marketing website built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── terms/page.tsx      # Terms of Use
│   ├── support/page.tsx    # Support Center
│   ├── press/page.tsx      # Press Kit
│   └── data-deletion/page.tsx  # Data Deletion
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Features.tsx        # Feature cards
│   ├── HowItWorks.tsx      # Step-by-step guide
│   ├── FAQ.tsx             # FAQ accordion
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── logo.svg
│   ├── app-icon.png
│   ├── screenshot-*.png
│   └── robots.txt
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Features

✅ Mobile-first responsive design
✅ Semantic HTML + accessibility
✅ SEO optimized (metadata, OpenGraph, robots.txt)
✅ Privacy-first approach
✅ No external dependencies (static components only)
✅ TypeScript strict mode
✅ Tailwind CSS utilities
✅ App Store ready

## Pages

- **Home** - Hero, features, how it works, FAQ, CTA
- **Privacy Policy** - Data usage and privacy practices
- **Terms of Use** - Legal terms for app usage
- **Support** - FAQ, troubleshooting, contact
- **Press Kit** - Media assets and company info
- **Data Deletion** - Step-by-step deletion guide

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript (strict)
- Tailwind CSS 3
- No backend required

## Build & Deploy

```bash
npm run build
npm start
```

## Apple App Store Compliance

This website meets Apple's requirements for:
- Privacy policy with clear data practices
- Terms of use for app licensing
- Data deletion instructions (CCPA/GDPR compliant)
- Support contact information
- Professional presentation

## License

All rights reserved. WordMaster is a proprietary iOS application.