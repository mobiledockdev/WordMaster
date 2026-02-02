#!/bin/bash

# WordMaster Website - Development & Production Guide

## Installation

```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Project Structure

```
WordMaster/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles & Tailwind imports
│   ├── privacy/page.tsx         # Privacy Policy (GDPR/CCPA compliant)
│   ├── terms/page.tsx           # Terms of Use
│   ├── support/page.tsx         # Support Center
│   ├── press/page.tsx           # Press Kit with media assets
│   └── data-deletion/page.tsx   # Data Deletion Request
│
├── components/                   # Reusable React components
│   ├── Header.tsx               # Navigation with mobile menu
│   ├── Hero.tsx                 # Hero section with CTA
│   ├── Features.tsx             # Feature showcase (6 items)
│   ├── HowItWorks.tsx          # Step-by-step guide (4 steps)
│   ├── FAQ.tsx                  # FAQ accordion (10+ Q&A)
│   └── Footer.tsx               # Footer with legal links
│
├── public/                       # Static assets
│   ├── logo.svg                 # WordMaster logo
│   ├── app-icon.png             # App Store icon
│   ├── screenshot-1.png         # Learning interface
│   ├── screenshot-2.png         # Audio learning
│   ├── screenshot-3.png         # Car Mode
│   └── robots.txt               # SEO robots directive
│
├── Configuration Files
│   ├── package.json             # Dependencies & scripts
│   ├── tsconfig.json            # TypeScript (strict mode)
│   ├── tailwind.config.ts       # Tailwind CSS config
│   ├── postcss.config.js        # PostCSS plugins
│   ├── next.config.js           # Next.js configuration
│   └── .eslintrc.json           # ESLint rules
│
└── Documentation
    ├── README.md                # Project overview
    └── DEPLOY.sh                # This file
```

## Key Features

✅ **Mobile-First Design** - Responsive from 320px to 4K
✅ **TypeScript Strict Mode** - Type-safe throughout
✅ **SEO Optimized** - Metadata, OpenGraph, canonical URLs
✅ **Accessibility** - Semantic HTML, ARIA labels
✅ **Performance** - Static generation, ~88KB First Load JS
✅ **Privacy-First** - CCPA/GDPR compliant pages
✅ **No External Dependencies** - Only React, Next.js, Tailwind
✅ **Apple App Store Ready** - All required legal pages included

## Pages & Routes

### Home (/)
- Hero section with App Store link
- 6-feature showcase
- 4-step how-it-works guide
- Privacy-first value prop
- 10+ FAQ items
- Final CTA

### Privacy (/privacy)
- Data collection practices
- Storage & security measures
- Third-party sharing policy
- User rights & GDPR/CCPA compliance
- Contact information

### Terms of Use (/terms)
- License grant & restrictions
- IP rights
- Acceptable use policy
- Liability limitations
- Legal jurisdiction

### Support (/support)
- Common issues troubleshooting
- Feature explanations
- Support contact info
- Response time SLA
- Multi-language support (EN/RU)

### Press Kit (/press)
- Company information
- Feature highlights
- Media assets (logo, icon, screenshots)
- App Store link
- Press contact email

### Data Deletion (/data-deletion)
- Step-by-step deletion guide
- 4-step process with verification
- Compliance information (CCPA, GDPR)
- Deletion timeline
- FAQ about data retention

## Internationalization

Primary language: English
- Russian helper text on key sections (max 1 line each)
- Future-ready for full i18n implementation

## Build Output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    8.54 kB        95.8 kB
├ ○ /_not-found                          873 B          88.1 kB
├ ○ /data-deletion                       153 B          87.4 kB
├ ○ /press                               153 B          87.4 kB
├ ○ /privacy                             153 B          87.4 kB
├ ○ /support                             153 B          87.4 kB
└ ○ /terms                               152 B          87.4 kB
+ First Load JS shared by all            87.3 kB
```

## Deployment Checklist

- [ ] Update `next.config.js` with actual domain
- [ ] Replace `support@wordmaster.app` with real email
- [ ] Replace `privacy@wordmaster.app` with real email
- [ ] Replace `legal@wordmaster.app` with real email
- [ ] Replace `press@wordmaster.app` with real email
- [ ] Update App Store link in Header & Hero
- [ ] Replace logo.svg with final design
- [ ] Replace app-icon.png with final icon
- [ ] Update screenshot PNGs with real app screenshots
- [ ] Update social media links in Footer
- [ ] Set up SSL certificate
- [ ] Configure robots.txt with actual domain
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Verify all links work
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Submit to Apple App Store with this website link
- [ ] Set up analytics (privacy-respecting)
- [ ] Monitor performance metrics

## Apple App Store Requirements Met

✓ Privacy Policy with clear data practices
✓ Terms of Use for app licensing
✓ Data Deletion instructions (CCPA/GDPR compliant)
✓ Support contact information
✓ Professional, polished presentation
✓ Responsive mobile design
✓ Fast load times
✓ Secure (HTTPS ready)
✓ No harmful content
✓ Proper copyright attributions

## Performance Targets

- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Maintenance

- Review analytics monthly
- Update dependencies quarterly
- Monitor for broken links
- Keep legal pages current
- Monitor App Store reviews for feedback

## Support

For issues, features, or questions:
- Email: support@wordmaster.app
- Response time: Within 24 hours

---

Generated: 2026-02-01
Next.js: 14.2.35
React: 18.2.0
Tailwind CSS: 3.3.6
