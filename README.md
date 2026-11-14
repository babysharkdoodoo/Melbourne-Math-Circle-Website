# Melbourne Math Circle

Melbourne Math Circle (MMC) is a student-led chapter of [Orlando Math Circle](https://www.orlandomathcircle.org/pages/about-us) based in Melbourne, Florida. Founded in 2023, MMC helps students explore mathematics through problem solving, activities, and school outreach.

This repository contains the MMC website. It introduces the team, documents past activities, and provides math lessons and practice materials for students, families, educators, and volunteers.

## Website

| Page | What it contains |
| --- | --- |
| `/` | An introduction to MMC, outreach photos, and an interactive counter game |
| `/about` | The circle’s history and work in Melbourne |
| `/team` | Student leaders, volunteers, and an alumni advisor |
| `/gallery` | Photos from past activities |
| `/volunteers` | Ways to help and email contacts for volunteer inquiries |
| `/for-schools` | Activity ideas and instructions for school outreach inquiries |
| `/topics` | Illustrated topic guides and practice problems |
| `/resources` | Books, handouts, videos, and math tools |
| `/math-bites` | Short articles with examples and activities |
| `/printable-activities` | Three worksheets with optional answer keys and print controls |
| `/study-plans` | Ordered reading and practice plans |
| `/fun-math-problems` | Interactive practice problems with hints and solutions |
| `/join-us` | Registration form |
| `/contact` | Contact form |

The former events, meetings, and workshops routes redirect to the photo gallery. Photos from the completed library session series remain part of the archive.

## Run locally

Use **Node.js 24** and npm. The repository includes an npm lockfile for reproducible installation.

```bash
git clone https://github.com/babysharkdoodoo/Melbourne-Math-Circle-Website.git
cd Melbourne-Math-Circle-Website
npm ci
npm run dev -- --hostname 127.0.0.1
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

To create and serve a production build:

```bash
npm run build
npm run start -- --hostname 127.0.0.1
```

Browsing the site and using the math activities do not require environment variables. The contact and registration API routes forward submissions to existing Google Apps Script services. Fork maintainers should configure their own destinations before accepting submissions; local forms can reach the configured services.

## Project structure

Built with Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons. Math Bites articles are stored as Markdown and rendered with math support.

```text
app/                    Pages, API routes, and site styles
components/             Navigation, forms, and interactive activities
content/blog/           Math Bites articles
lib/team.ts             Team names, roles, biographies, and photos
lib/topics.ts           Topic guides and practice problems
lib/activities.ts       Printable worksheet questions and answer keys
lib/math-bites-data.ts  Article listings and search metadata
public/Photos/          Outreach and activity photos
public/pfps/            Team portraits
public/images/math/     Educational diagrams
public/optimized/       Compressed WebP copies used by the site
scripts/optimize-photos.mjs  Rebuild compressed copies from the original photos
```

## Update content

- **Team:** edit `lib/team.ts` and place approved portraits in `public/pfps/`.
- **Math Bites:** edit the Markdown files in `content/blog/` and keep the corresponding listing in `lib/math-bites-data.ts` in sync.
- **Topic guides:** edit `lib/topics.ts`. Keep existing topic IDs when updating a published guide so its URL continues to work.
- **Worksheets:** edit `lib/activities.ts`. Each entry supplies the worksheet, illustration, questions, and answer key.
- **Announcements:** edit `components/announcement-banner.tsx`.
- **Styles:** shared site styles are in `app/circle.css`; learning and supporting page styles are in `app/nav-pages.css`.

The learning indexes share `/some-math`, with tabs for topics, Math Bites, worksheets, study plans, and resources. Older index URLs redirect to the matching tab; individual guide, article, and worksheet URLs still work.

After adding or replacing an original photo, run `node scripts/optimize-photos.mjs` to regenerate its WebP copy in `public/optimized/`. The original photos are retained.

Worksheets can be printed or saved as PDFs through the browser’s print dialog. The answer key is excluded until the reader selects **Show answer key**.

Use factual descriptions, descriptive image alternatives, and photos approved for public use. Preserve any privacy coverings in the original school photos. Do not commit credentials, private student records, or form submissions.

## Checks

```bash
npm run build
npx tsc --noEmit --incremental false
git diff --check
```

The existing Next.js configuration skips TypeScript and ESLint errors during production builds. A successful build does not replace a separate type check; some older admin and interactive components have outstanding type errors. Check changed pages on desktop and mobile, including navigation, images, links, and interactive controls.

## Contact

For school visits or volunteering, email [Faizan Ahmed](mailto:faizan@orlandomathcircle.org). General questions can also go to [Eshan Vipuil](mailto:eshan.mmc@orlandomathcircle.org).

Follow [Melbourne Math Circle on Instagram](https://www.instagram.com/melbournemathcircle_omc/).
