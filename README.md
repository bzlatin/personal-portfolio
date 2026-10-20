# Ben Zlatin — personal portfolio

A Next.js 16 / React 19 portfolio with an editorial visual system, interactive SVG linework, and five engineering case studies.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm start`.

## Content and design

- `src/app/page.tsx`: homepage composition and current IDT role.
- `src/data/home.ts`: preserved experience and skill content.
- `src/data/projects.ts`: all five original project stories, technologies, outcomes, and links.
- `src/components/project-detail.tsx`: shared case-study layout; original routes remain intact.
- `src/components/signal-field.tsx`: keyboard-accessible Flow / Orbit / Wave study.
- `src/app/globals.css`: responsive design tokens and styles.
- `DESIGN.md`: visual direction, reusable patterns, motion, and content constraints.
- `PRODUCT.md`: verified content and outstanding factual gaps.

The current role is Software Engineer at Innovative Defense Technologies, starting August 2026. No responsibilities have been inferred. A résumé asset is not present; “Request résumé” opens an email draft. Project graphics are abstract illustrations. StudyGuider is a side project built for exams and studying while at school. The senior design dates remain as supplied until updated by the owner.

## Validation

```sh
npm run lint
npx tsc --noEmit
npm run build
```

Browser checks use externally installed Playwright and Chrome without adding runtime dependencies:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/playwright BASE_URL=http://127.0.0.1:3000 REVIEW_PASS=2 node scripts/verify-browser.mjs
PLAYWRIGHT_MODULE=/absolute/path/to/playwright AXE_PATH=/absolute/path/to/axe.min.js BASE_URL=http://127.0.0.1:3000 node scripts/check-accessibility.mjs
```

Set `CHROME_PATH` for a non-default Chrome installation. Screenshots and reports are saved under the Git-ignored `verification/` directory. Browser checks cover viewport overflow, all project routes, images, mobile menu and Escape focus, SVG controls, clipboard feedback, reduced motion, skip links, and content without JavaScript. The accessibility script checks all six pages at desktop and mobile widths.

Before deployment, optionally supply an actual résumé PDF and confirm the public deployment domain for canonical/social URLs. Confirm any changed project status or senior design end date before editing those facts.
