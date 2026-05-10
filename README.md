# Project 150 — Website Brief

A complete brief for building the Project 150 personal family health journal website.

---

## What This Website Is

**Project 150** is a private family longevity mission, publicly documented. It is **not** a gym, business, coaching service, or membership community.

A son (the creator) reviewed his parents' blood reports in May 2026 and decided to turn the family's health journey into a public journal — so other families could get inspired and start their own.

- **Father:** 74 years old
- **Mother:** 66 years old
- **Mission:** Prove that with the right habits, even at 66 and 74, you can add healthy, independent decades to your life
- **Goal:** Reach 150 combined healthy years through food discipline, daily walking, medicines, and consistent tracking

**There is no selling. No memberships. No coaching. No products. Ever.**

---

## Brand Identity

### Taglines
- **Primary:** Our Family's 150-Year Journey
- **Supporting:** From Blood Reports to 150
- **Supporting:** One Family. One Mission. 150 Years.
- **Supporting:** Documenting the Real Path to Longevity

### Logo
- The word **PROJECT** in clean white/silver — font weight 800, slightly spaced letters
- The number **150** next to it in bold red (#e30613) — font weight 900, slight red glow effect
- This is the only element on the site that uses red. Everything else uses gold as the accent color.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#07090f` | Page background |
| Surface 1 | `#0d1120` | Card backgrounds |
| Surface 2 | `#121828` | Nested elements |
| Logo Red | `#e30613` | PROJECT 150 logo ONLY |
| Gold Accent | `#c9a84c` | All other accents — eyebrows, highlights, dots, stats |
| White | `#eef0f6` | Warm off-white for headings (not pure white) |
| Grey 1 | `#d8dce8` | Body text |
| Grey 2 | `#8892a4` | Muted/secondary text |
| Grey 3 | `#4a5268` | Borders, disabled states |
| Border | `rgba(255,255,255,0.07)` | Subtle card borders |

**The background is deep midnight blue-black, not pure black. This is intentional — easier on the eyes.**

### Typography

- **Headings:** Montserrat, weight 800–900 (from Google Fonts)
- **Body:** Inter, weight 400–600 (from Google Fonts)
- **Heading sizes:** h1 clamps between 2.4rem and 4.2rem, h2 between 1.5rem and 2.2rem
- **Eyebrow labels:** Montserrat 700, 0.72rem, letter-spacing 0.18em, uppercase, gold color

### Visual Style

- **Dark theme only** — deep midnight blue-black background
- **Glassmorphism cards** — subtle transparency, blur, light top border shimmer
- **Gold accents** — used for timeline dots, stat numbers, section labels, interactive hover states
- **Ambient glow** — soft radial gradients of gold and teal behind the content (CSS only, no images)
- **Fade-up animations** — sections animate in on load with staggered delays
- **Logo pulse** — the red "150" in the logo has a subtle CSS pulse/glow animation
- **No stock images** — the site uses no photos currently (placeholders can be added later for real family photos)

---

## Site Structure — 5 Pages

### 1. Home (`index.html`)

**Purpose:** First impression. Mission statement. Latest update.

**Sections:**
1. **Hero block** — Large heading: "Our Family's 150-Year Journey". Below it, 3 lines of text: "In May 2026, we looked at my parents' blood reports. High sugar. Low iron. Low Vitamin D. Heart risks. We decided to fight back — with food, walks, and daily discipline." Two buttons: "Read Our Story" (gold/filled) and "View Timeline" (ghost/outline).
2. **Stats row** — Three numbers in a horizontal strip separated by vertical dividers: `74` (Father), `66` (Mother), `150` (Year Goal). Numbers in large gold with glow.
3. **Mission quote block** — Centered large quote: *"Project 150 is not a gym. It is our family's private mission — publicly documented, so other families can start their own."* Below it, three pills: "No memberships", "No selling", "Just honesty".
4. **Latest Updates** — Three small cards in a row labeled Week 1, Week 2, Week 3 with brief one-line progress notes. Link to full timeline below.

---

### 2. Our Story (`our-story.html`)

**Purpose:** The origin story. Emotional core of the site.

**Sections:**
1. **Page hero** — Heading: "From Blood Reports to 150"
2. **Prose block** — Plain readable text (max-width ~680px) telling the story: reviewed blood reports, what the numbers showed, the decision to fight back, what Project 150 is.
3. **Blood report box** — A dashed-border box mid-prose showing: 🔴 High blood sugar · 🟡 Low iron · 🟡 Low Vitamin D · 🔴 Heart risk indicators
4. **Four pills** at the bottom of the prose: "No coaching", "No products", "No memberships", "Just the truth"
5. **Closing quote block** — Centered: *"If our journey helps one more family begin theirs — this mission is worth it."* With a button linking to the timeline.

---

### 3. The Journey (`journey.html`)

**Purpose:** Transparent, dated log of progress.

**Sections:**
1. **Page hero** — Heading: "Real Progress. Real Setbacks. Real Discipline." Sub: "Updated weekly. Nothing is edited for good optics."
2. **Vertical timeline** — Dot + line connector layout. Each entry has: a date label (gold, uppercase), and 2–3 sentences of plain text.

**Current timeline entries:**
- May 2026 · Week 1 — Baseline: Blood reports reviewed, tracking sheet created
- May 2026 · Week 2 — First Rules: Walks locked in, sugar removed, meal timing fixed
- May 2026 · Week 3 — Systems: Medication alarm, water tracking, sleep consistency
- May 2026 · Week 4 — First Signals: Better alertness, walks at 35 min, doctor review booked
- June 2026 — Upcoming (dashed style, semi-transparent): First follow-up blood test

**New entries will be added here every week or month.**

---

### 4. What We Eat (`what-we-eat.html`)

**Purpose:** Practical food reference for the family and visitors.

**Sections:**
1. **Page hero** — Heading: "Simple Food. Strict Consistency." Sub: "No special diets. Just traditional home cooking, controlled portions, and fixed timings."
2. **Daily meal structure card** — Four rows with time labels (Morning, Lunch, Evening, Dinner) and a brief description of what is eaten. Clean table-like layout.
3. **Two-column section:**
   - Left card: **House Rules** — 5 non-negotiable food rules (no sugary drinks, no packaged snacks, fixed timings, protein and fiber every meal, 8 glasses of water)
   - Right card: **Monthly Kitchen List** — bilingual Telugu + English grocery reference in 4 categories: Vegetables, Proteins, Grains, Add-ons

---

### 5. Learnings (`learnings.html`)

**Purpose:** Honest lessons from the journey.

**Sections:**
1. **Page hero** — Heading: "What This Journey Is Teaching Us". Sub: "Not expert opinions. Lived experience — shared plainly."
2. **Two-column cards:**
   - Left (gold-tinted card): **What Works** — 4 lessons with title + 1-line explanation: Consistency beats intensity / Family accountability works / Simple food is sustainable / Walking is medicine
   - Right (standard card): **Still Improving** — 4 honest gaps: Sleep timing inconsistent / Social events break discipline / Report anxiety is real / Tracking drops in busy weeks
3. **Closing quote** — Centered: *"This is a journal, not medical advice. Always consult your own doctor."*

---

## Navigation

All 5 pages share the same sticky header with:
- Logo on the left (PROJECT in white + 150 in red)
- Nav links on the right: Home, Our Story, The Journey, What We Eat, Learnings
- Active page link shown in gold

All pages share the same footer with:
- Logo mark on the left
- A one-line tagline on the right (different per page)

---

## Technical Notes

- **Pure static HTML + CSS** — no JavaScript framework, no build tools required
- **Single stylesheet** (`styles.css`) shared across all pages
- **Google Fonts** loaded via `<link>` tag (Inter + Montserrat)
- **No JavaScript** — all animations are CSS only (keyframes, transitions)
- **Fully responsive** — breakpoints at 860px and 600px
- **No backend, no CMS** — content is updated by editing the HTML files directly

### Component Classes (CSS)

| Class | Purpose |
|---|---|
| `.hero-block` | Full-width hero on Home page |
| `.stats-row` | Horizontal stat strip with dividers |
| `.mission-block` | Centered large quote section |
| `.update-grid` | 3-column update card row |
| `.page-hero` | Standard heading block for inner pages |
| `.prose-block` | Readable body text block (max-width constrained) |
| `.card` | Glassmorphism card |
| `.card-hot` | Gold-tinted card variant |
| `.tl-item` | Timeline row (dot + connector + body) |
| `.meal-row` | Labelled meal row inside a card |
| `.check-list` / `.check-item` | Icon + text checklist |
| `.btn-primary` | Filled gold button |
| `.btn-ghost` | Outline ghost button |
| `.pill` / `.pill-gold` | Tag/label pill |
| `.eyebrow` | Uppercase section label (gold) |
| `.fade-up` / `.delay-1` etc. | CSS entrance animation |

---

## Tone and Content Rules

- **Honest, direct, no fluff** — every sentence must earn its place
- **No commercial language** — no "join", "sign up", "buy", "offer", "plan"
- **No transformation promises** — this is a journal, not a marketing site
- **Telugu + English** where relevant (especially food/grocery content)
- **Medical disclaimer** always present on the Learnings page
- **First-person family voice** — written as a son documenting his family's journey

---

## Future Additions (Not Yet Built)

- Real family photos (parents walking, meal plates, blood report documents)
- A simple "add new update" format for the journey timeline
- Monthly blood report snapshot section on the Journey page
- Open Graph / social sharing meta tags for sharing on WhatsApp/social media
