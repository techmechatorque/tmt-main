# TechMecha Torque — Website Rebuild Plan (v2.1)

Supersedes v2. Same goals and honesty constraints; re-targeted to the stack that
actually exists in this repo, with three of the four blockers resolved.

Sections not restated here (positioning, banned vocabulary, design direction, component
list, pre-launch audit) carry over from v2 unchanged.

---

## 0. Decision log

**D1 — Stack. RESOLVED: keep Vite.**
v2 §7 specified Next.js App Router on Vercel. This repo is Vite 5 + React Router 6 +
shadcn/ui + Tailwind, built to static files and served by nginx in a Docker container on
EC2 (`.github/workflows/deploy.yml`, deploy branch `ec2-docker-ssl`). We keep it. No
framework rewrite, no hosting migration. §7 below is rewritten accordingly; the existing
shadcn component library is reused rather than rebuilt.

**D2 — Training & certification. RESOLVED: it stays, as a real offering.**
Learning Spaces is the product. Training and certification across different courses is a
service TMT actually delivers, and the pages for it already exist (`/bootcamps`,
`/certifications`, `/course/:courseId`, plus `/careers` and the retired `/internships`).
v2 §4 omitted all of this. The site map below adds a Training section as a top-level
entry rather than burying it in `/services`, because it has its own multi-page structure
and its own search intent.

> Assumption to confirm: training/certification stays on techmechatorque.com rather than
> moving to learningspaces.co.in. The existing pages live here, so this is the
> lower-risk reading — say if you meant the other one.

**D3 — B1 naming. RESOLVED: rename to the Spaces family.**
NextChat → Learning Spaces, NextCode → School Spaces, NextAttendance → Academic Spaces.
Requires a 301 map (see §7a) and a rewrite of the `index.html` meta description, which
still names all three.

**B2 — Shared platform layer. OPEN.**
Partial evidence found: Supabase is wired up at `src/integrations/supabase/client.ts`
against a real project, with an `/auth` page and admin CRUD for employees and interns.
So an identity service does exist for this property. Whether it is shared with Learning
Spaces and the e-commerce build is still unanswered, and that is what decides the
diagram. Default remains v2's recommendation (b): relabel as "Platform direction".

**B4 — Product statuses. OPEN.** The §3 table in v2 still has `?` cells. Nothing in the
repo answers them. This blocks Phase 2 and Phase 4.

**B3 — Founder. OPEN, and larger than v2 assumed.** There is a full `/founder` page
naming Jaya Chandra Reddy, and it is listed in `public/sitemap.xml`. "Company-anonymous"
therefore means retiring an indexed page and redirecting it, not just hiding a section.

---

## 4. Site map (revised for D2)

```
/                              Home
/products                      All platforms, grouped by status
/products/learning-spaces      (LIVE — full page)
/products/<others>             (only when status >= BUILDING)
/training                      Training & certification overview
/training/certifications       Certification tracks
/training/bootcamps            Bootcamps
/training/courses/<slug>       Per-course curriculum
/services                      Software development, digital transformation, market support
/work                          Portfolio — Hotel Vedha, Learning Spaces
/work/hotel-vedha              Case study
/about                         Company
/careers                       Retained — real openings only, else remove
/contact                       Contact + form
/privacy                       Real copy required
/terms                         Real copy required
/404                           Custom
```

Existing routes map across as: `/certifications` → `/training/certifications`,
`/bootcamps` → `/training/bootcamps`, `/course/:courseId` →
`/training/courses/<slug>`. All three need 301s (§7a).

`/auth` and `/admin` are internal, not part of the public IA. `/admin` is currently
commented out of `App.tsx`; decide whether it returns or is removed outright.

---

## 7. Technical decisions (re-targeted to Vite)

| Concern | Decision |
|---|---|
| Framework | Vite 5 + React 18 + React Router 6 + TypeScript + Tailwind (existing) |
| UI kit | shadcn/ui, already installed — reuse, don't rebuild |
| Hosting | Docker → nginx → EC2, via existing GitHub Actions workflow (existing) |
| Routing | Client-side. nginx `try_files` SPA fallback already configured |
| SEO / metadata | **Needs solving.** SPA has one static `index.html`; per-route titles and OG tags require either react-helmet-async (client-side; crawlable by Google, not by most social scrapers) or a prerender step at build. Recommend prerendering the ~15 public routes — social previews and OG images are an explicit v2 requirement and client-side tags will not satisfy them. |
| Contact form | **No backend exists.** `VITE_API_URL` is declared as a build arg in the Dockerfile and workflow but is referenced nowhere in `src`. Recommend a Supabase table + Edge Function that emails team@techmechatorque.com — Supabase is already provisioned, so this adds no new infrastructure and gives form storage for free. |
| Spam protection | Honeypot field + rate limit by IP inside the Edge Function |
| Analytics | Plausible (script tag, no cookie banner). Vercel Analytics is not available off Vercel. |
| Error monitoring | Sentry browser SDK, free tier |
| Images | No Next `<Image>`. Use `<picture>` with AVIF/WebP sources generated at build (`vite-imagetools`), explicit width/height to avoid CLS |
| Content | Static TS data files under `src/data/`. No CMS. |
| Redirects | nginx, not React (§7a) |

### 7a. Redirect strategy — must be nginx

The current `nginx.conf` serves `try_files $uri $uri/ /index.html`, so every unmatched
path returns **HTTP 200** with the SPA shell. Consequences:

1. `/internships` is in `sitemap.xml` at priority 0.9 but its route is commented out in
   `App.tsx:36`. It is currently a **soft 404** — Google sees a 200 and indexes an error
   page. Fix immediately, independent of the rebuild.
2. Client-side redirects cannot produce a 301. Every B1/D2/D3 URL move must be an
   explicit `location` block with `return 301` in `nginx.conf`, added before the
   catch-all.
3. The custom 404 must return a real 404 status, which an SPA fallback cannot do for
   arbitrary paths. Either enumerate valid routes in nginx, or accept soft 404s on
   genuinely unknown paths and ensure only real URLs are ever advertised in the sitemap.

Redirect map to build (pending B1/B3 confirmation):

| Old | New | Code |
|---|---|---|
| `/certifications` | `/training/certifications` | 301 |
| `/bootcamps` | `/training/bootcamps` | 301 |
| `/course/:id` | `/training/courses/<slug>` | 301 |
| `/internships` | `/careers` or 410 | 301 / 410 |
| `/vision` | `/about` | 301 |
| `/founder` | `/about` or retain | pending B3 |
| NextChat/NextCode/NextAttendance URLs | Spaces equivalents | 301 |

---

## 8. Build phases (revised)

**Phase 0 — Decisions & assets.** Answer B2, B3, B4. Fill the v2 §3 product table.
Capture screenshots for every LIVE product. Write Privacy and Terms copy. Produce a
1200×630 OG image.
*Done when:* the product table has no `?` cells and `/public/screens/` is populated.

**Phase 0.5 — Live-site triage (new, can run now).** Independent of everything else:
remove `/internships` from `sitemap.xml`, replace `YOUR_VERIFICATION_TOKEN_HERE`
(`index.html:14`), and fix the "Revolutionary" title (`index.html:6`). Three small fixes
to defects that are live today.

**Phase 1 — Foundation.** Design tokens into `tailwind.config.ts` and `index.css`.
Typography scale. Layout primitives. Navbar + mega menu + mobile nav. Footer. Real 404.
Audit the existing shadcn components against the new tokens rather than regenerating.
*Done when:* a bare route renders with correct nav and footer at 320/768/1440, keyboard
navigable, visible focus rings.

**Phase 2 — Data layer.** `src/data/products.ts`, `services.ts`, `training.ts`,
`company.ts`. Products typed `status: 'LIVE' | 'BUILDING' | 'PLANNED'`. Contact details
imported from `company.ts` everywhere. Fold the existing `src/data/courses.tsx` into the
training data model.
*Done when:* `tsc` passes and no contact string appears in a component file.

**Phase 3 — Home.** All eight sections from v2 §5, real copy.
*Done when:* passes the v2 §10 content audit and Lighthouse ≥90 on all four axes.

**Phase 4 — Product pages.** `/products` index + detail pages for LIVE/BUILDING only.
*Done when:* every card links somewhere real; no PLANNED product has a detail page.

**Phase 5 — Training, Work, Services, About.** Migrate and rewrite the existing
bootcamp/certification/course pages into `/training/*`. Hotel Vedha case study. Services.
About from verified facts only. Purge the 15 banned-vocabulary occurrences found in
`Features.tsx`, `Vision.tsx`, `Founder.tsx`, `Testimonials.tsx`, `FAQ.tsx`.
*Done when:* every claim traces to v2 §1 or to a product that exists.

**Phase 6 — Contact & forms.** Supabase Edge Function, handler, spam protection, success
and error states.
*Done when:* a test submission arrives at team@techmechatorque.com and a forced failure
shows a visible error.

**Phase 7 — SEO, migration, launch.** Prerender step. Metadata per route, OG/Twitter,
canonicals, regenerated sitemap, robots.txt, Organization + Product structured data. Real
verification token. nginx 301 blocks per §7a.
*Done when:* every old indexed URL resolves or redirects with the right status code
(verified with `curl -I`, not in a browser), and no placeholder token remains.

---

## Open items blocking progress

1. **B4 product statuses** — blocks Phases 2 and 4.
2. **B2 platform layer** — blocks the architecture visual only.
3. **B3 founder page** — blocks `/about` and the redirect map.
4. **Testimonials** — `src/components/Testimonials.tsx` exists. v2 §10 forbids
   testimonials that aren't real. Confirm whether these are genuine and attributable.
5. **`/careers` and `/admin`** — keep or remove.
6. **Training location** — confirm the D2 assumption above.
