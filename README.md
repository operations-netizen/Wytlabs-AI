# Wytlabs AI — product page

A React + Vite page for **Wytlabs AI**, the AI-powered marketing platform from
Wytlabs. Served at **`/ai`** (`/` redirects there).

## Positioning — read this before editing copy

This page sells **Wytlabs AI to a business that will use it for its own
marketing**. It is not selling a platform to resell, and it never asks the
visitor to white-label anything.

| Backend reality | Customer-facing reality |
| --- | --- |
| Wytlabs white-labels upstream technology | Wytlabs sells Wytlabs AI |

Keep those separate. Copy must never let a visitor think *"Wytlabs will give me
a platform I can sell to my own clients."* Concretely, the page must not contain:
white-label your business · your own branded platform · resell to your clients ·
launch your own AI platform · create client workspaces · agency white-label.

The only technology attribution is the footer legal line — it appears **once** in
the whole rendered page. Verified by reading `document.body.innerText` with every
FAQ expanded, and by a regex sweep for the phrases above.

### The journey the page follows

`what is it → what can it do → how does it work → what do I get → what does it
cost → why Wytlabs → how do I start`

```bash
npm install
npm run dev      # http://localhost:5173/ai
npm run build
npm run preview
```

---

## Brand foundation

The design system is derived from the live Wytlabs identity, not from a generic
SaaS palette. Everything below was taken from wytlabs.com.

| Token | Value | Source |
| --- | --- | --- |
| Brand blue | `#162CB9` | Headline accent + primary CTA on wytlabs.com |
| Signal blue | `#169CF5` | Secondary accent |
| Ink | `#141414` | Ink in the official logo artwork |
| Typeface | Montserrat | The typeface used across wytlabs.com |
| Button radius | 2px | wytlabs.com CTAs are near-square |

### Type scale

Hero 56→66px, section headings 32→52px, feature headings 22→32px, body 17→19px,
small metadata 13px, micro-labels 12px. Mobile: hero 36→47px, headings 32px,
body 17px. Body copy is capped at `--measure`
(64ch) so no paragraph runs the full screen width, and an automated audit
checks that no prose renders below ~15px and no line exceeds ~92 characters.
Section rhythm is `--section` (60px mobile → 100px at 1440 → 140px wide).

The wordmark is thin, wide-tracked and architectural, so the system echoes it:
hairline rules, near-square corners, wide-tracked uppercase micro-labels, and
restraint with colour. Purple appears only as a gradient tail — never as a
dominant hue.

### Logo — real assets, not a recreation

Both files in `public/brand/` are the production assets downloaded from
wytlabs.com. **There is no SVG logo on the site** — the only SVGs it serves are
AI-platform icons (ChatGPT, Claude, Grok, Perplexity), so these PNGs are the
authentic artwork:

| File | Source | Use |
| --- | --- | --- |
| `wytlabs-logo-dark.png` (300×69) | `/themes/wytlabs/new-home/images/logo.png` | Light backgrounds |
| `wytlabs-logo-light.png` (337×53) | `/uploads/2023/05/f_wytlogo.png` | Dark backgrounds |

[`Logo.jsx`](src/components/ui/Logo.jsx) is the only place the logo is rendered.
`variant="light|dark"` picks the correct official file for the background and
`height` alone drives the size, so the aspect ratio is always preserved and the
artwork is never recoloured, filtered or stretched. It appears in the header,
the Why Wytlabs section, the final CTA and the footer; the OG image embeds the
same asset as a data URI.

To swap in an SVG when one is available, replace the file and the `ASSETS` map in
that one component.

---

## Pricing is placeholder

Every figure lives in [`src/data/pricing.js`](src/data/pricing.js) and nowhere
else. The page shows an "indicative pricing" notice while `isPlaceholder` is true.

Plans are **Starter / Growth / Professional / Enterprise**, positioned by
customer type, with **Most popular** on Growth. While `isPlaceholder` is true the
section shows a dashed **Indicative pricing** tag beside the billing toggle. Replace `monthly` / `yearly` / `limits` / `features` per plan and
the whole section follows — the Growth panel, the three plan columns, the billing
toggle and the savings maths all read from that one file.

Plan copy must never suggest reselling or running client workspaces, and CTAs
stay in the set *Get started · Choose Growth · Talk to Wytlabs*.

### Two deliberate departures from the last brief

1. **The plan comparison table stays removed.** The final-polish brief asks to
   keep and improve it, but it was explicitly deleted on request after that
   brief's snapshot of the page. A recent explicit instruction beats a general
   one, so it was not resurrected — `data/comparison.js`, the component and the
   `useMediaQuery` hook are all gone. Say the word to rebuild it.
2. **The pricing placeholder marker came back, smaller.** It was removed on
   request, then the final brief asked for "clearly visible placeholders". It is
   now a compact dashed tag in the pricing control bar rather than the paragraph
   block that was removed.

---

## Content sourcing

Feature copy is limited to what the underlying platform (Blaze) documents:
brand kit generated from your website (Source Materials, Image & Video Assets,
Brand Profile, Styles & Voice, Content Preferences), 70+ content formats, 40+
languages, AI imagery and a template designer, Content Plan, Calendar,
auto-publishing, Approvals on Growth, Paid Ads on Meta and Google, Insights,
repurposing, Zapier, and the White Label add-on (workspace logo, colour theme,
branded notification emails).

Deliberately **not** on the page:

- No fabricated customer logos, testimonials or case-study numbers.
- No invented performance statistics. The trust strip names Wytlabs' **real**
  partner credentials (Google Cloud, Meta Business, Amazon Ads, Klaviyo) as text.
- No claim that Wytlabs owns the AI technology, and no white-label pitch. The
  supply relationship is attributed once, in the footer legal line.
- Wytlabs' real agency case studies exist on wytlabs.com and are linked from the
  footer, but they are **not** presented as Wytlabs AI product results, because
  they are not. Where product proof does not exist yet, the section stays
  minimal rather than borrowing credibility.
- Footer social links are the actual Wytlabs profiles taken from the live site,
  not guessed handles.

Numbers inside the dashboards are illustrative; the Insights screen labels itself
"Sample data".

---

## Page architecture

The section order is the product story, and the light/dark rhythm is deliberate:

```
hero (dark navy)          → the promise, 66px headline + 875px dashboard
problem (light grey)      → why this exists
platform (white)          → one workspace, big interface + labelled areas
features (white)          → 4 stories, each a DIFFERENT composition
workflow (soft blue)      → 4 steps on a gradient rail + approvals proof
transform (soft blue)     → one brief → every asset → one schedule
showcase (dark)           → wide dashboard, tab row, workspace pillars
white label (dark)        → the workspace wearing a customer's brand
pricing (white)             → recommended plan panel + 3 compact cards
why wytlabs (dark)        → the differentiator, numbered
audience (light grey)     → 4 large cards, 2×2
faq (white)               → editorial two-column
final cta (dark navy)
footer (dark)             → 5 columns + verified social profiles
```

```
src/
├── data/                    # all copy — nothing hard-coded in components
│   ├── site.js              # brand, nav, credentials, footer, SEO
│   ├── pricing.js           # plans, billing, credits  ← PLACEHOLDER
│   ├── content.js           # problem, platform, features, workflow, transform,
│   │                        #   showcase, why, white label, audiences
│   └── faqs.js              # FAQ + FAQPage structured data
├── styles/
│   ├── tokens.css           # the design system
│   ├── base.css             # reset + type
│   ├── ui.css               # buttons, panels, heads, rules, reveal, frame
│   └── mockups.css          # the product-UI system
├── components/
│   ├── ui/                  # Logo, Icon, Reveal, Head
│   ├── mockups/             # 7 hand-built product screens
│   └── <Section>.jsx+.css   # one component + stylesheet per section
└── pages/WytlabsAI.jsx      # section order + document metadata
```

### Dark sections

A section opts in with `class="dark"`, which re-points the semantic tokens
(`--bg`, `--text`, `--rule`, `--accent`…). The same `.btn`, `.panel`, `.tag` and
`.frame` work on both grounds with no dark-specific rules.

### Feature compositions

The four feature blocks deliberately avoid a text→screenshot rhythm. Each block
declares a `layout` in `data/content.js`:

| layout | composition |
| --- | --- |
| `full` | split header, then the interface full width beneath |
| `split` | copy left, interface right |
| `flip` | interface left, copy right |
| `labels` | wide interface with callout labels down its side |

### The transformation section

`Transform.jsx` is the page's signature moment: a brief fans out into four
generated assets and converges on one schedule, drawn with SVG connectors behind
real product UI cards. Stage labels sit in their own grid row so all three share
a baseline; below 1080px the whole thing becomes a vertical timeline (with the
label→content order interleaved via `order`, since the markup emits all labels
first).

`.uiscope` exposes the product-UI token set outside a window frame, so these
cards are the same components used inside the dashboards.

### Product UI

The seven dashboards are real DOM — no screenshots, no image payload, crisp at
any density. Navigation mirrors the documented Blaze workspace (Home, Calendar,
Content Plan, Approvals, Paid Ads, Brand Kit, Insights, plus Files & Projects).
They size with **container queries** on the `.app` frame, because the same screen
appears at several widths on the page: the rail collapses to an icon rail based
on its own box, not the viewport. `AppShell` takes an `accent` and `brand`
override, which is how the white-label section shows the product in a customer's
colours.

### Responsive

Verified for no horizontal scrolling at 320 / 375 / 390 / 430 / 768 / 1024 /
1280 / 1440 / 1920. The hero additionally resolves inside a single viewport on
desktop — measured at 1280×720, 1366×768, 1440×900, 1600×900, 1920×809 and
1920×1080 — with the frame capped and bottom-masked so the clipped dashboard
reads as a window rather than a truncation. Below 1181px wide or 660px tall the
hero flows naturally instead, because a fixed height there would crush it.

Mobile is composed, not scaled: the hero re-flows to a single column with
full-width squared CTAs, the pricing panel stacks, and the workflow rail and
campaign flow both turn from horizontal ramps into vertical spines.

### Motion

`styles/motion.css` holds every micro-interaction, documented in one place.
Reveal-triggered rules hang off `.rv.in` so they play once as a section arrives:
eyebrow rules and workflow rail segments draw in, bar charts grow from the
baseline with a stagger, sparklines draw. Only the product mockups loop — a
shimmer on generating copy and a breathing dot on live status — so the interface
reads as software rather than a screenshot. Product frames lift on hover.

Every rule is switched off under `prefers-reduced-motion`; verified as zero
running animations and zero unrevealed elements in that mode.

### A11y, SEO Single
`<h1>`, clean H1→H2→H3→H4 outline, one `<header>`/`<main>`/`<footer>`, labelled
`role="img"` on every mockup, `SoftwareApplication` + `FAQPage` structured data,
OG/Twitter cards, canonical URL.

### Performance

No UI, icon or animation libraries. Icons are one inline SVG set; Montserrat is
self-hosted via `@fontsource-variable/montserrat`. The only raster assets are the
two logo PNGs (15KB total).
