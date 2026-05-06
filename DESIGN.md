---
name: Forbes.cz Membership Strategy
description: Internal analytical dashboards for Forbes.cz membership performance
colors:
  # Base
  white: "#FFFFFF"
  surface: "#F8FAFC"
  dark: "#020617"
  # Accent
  rose: "#E11D48"
  rose-tint: "#FFF1F2"
  rose-deep: "#9F1239"
  # Ink scale
  ink-secondary: "#475569"
  ink-tertiary: "#94A3B8"
  border-subtle: "#E2E8F0"
  border: "#CBD5E1"
  # Dark mode surfaces
  dark-surface: "#0F172A"
  dark-raised: "#1E293B"
  dark-text: "#F8FAFC"
  dark-text-secondary: "#94A3B8"
  dark-rose: "#FB7185"
  # Data viz (categorical)
  data-perspective: "#5b8cff"
  data-inspire: "#3dd9ff"
  data-help: "#34d399"
  data-update: "#a3e635"
  data-keep: "#fbbf24"
  data-educate: "#ff8a7a"
  data-divert: "#ff4fd8"
  data-connect: "#a78bfa"
typography:
  display:
    fontFamily: "ForbesHighlander, Georgia, serif"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1.15
  headline:
    fontFamily: "ForbesHighlander, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Favorit Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  pill: "20px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "0"
    padding: "0"
  tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.rose}"
    rounded: "0"
    padding: "0"
  stat-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.dark}"
    rounded: "{rounded.md}"
    padding: "24px"
  badge-accent:
    backgroundColor: "{colors.rose-tint}"
    textColor: "{colors.rose}"
    rounded: "{rounded.xs}"
    padding: "2px 7px"
  badge-neutral:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.xs}"
    padding: "2px 7px"
---

# Design System: Forbes.cz Membership Strategy

## 1. Overview

**Creative North Star: "The Forbes Data Document"**

The Figma file is the source of truth. The experience is a Forbes-branded data document: a precise editorial home page that leads into dark analytical dashboards. The home page uses a white document canvas, the Forbes wordmark, a 48px Highlander title, large abstract image cards, and understated footer links. Subpages use the same wordmark and footer, then shift into a dark data workspace with underline tabs, large bordered stat cards, horizontal bar analysis, and dense tables.

The accent rose is used for the active tab indicator and rare priority focus. It marks navigation state more than decoration.

This system is restrained, but not as austere as the previous version. The home cards intentionally use 24px radii, abstract color imagery, translucent labels, and card elevation from Figma. The dashboard pages remain flat and analytical: borders, slate tracks, colored bars, and compact tabular structure.

**Key Characteristics:**
- Figma-first 1200px document frame with 45px page gutters on desktop
- ForbesHighlander 48px/400 for the home title; Forbes wordmark in every header
- Favorit Pro body type in Figma; production must load the licensed web font or fall back cleanly
- Dark dashboard subpages on `#020617` with `#334155` dividers and tracks
- Rose `#E11D48` active tab text and underline
- Home cards: 350 × 373px, 24px radius, abstract image, translucent 9px label chip, Figma card shadow

## 2. Colors: The Three-Note Palette

Two absolutes and one accent. Everything else is in service of these three.

### Primary
- **Pure White** (`#FFFFFF`): Primary card and panel surface in light mode. Never used as page background — that role belongs to Surface.
- **Page Surface** (`#F8FAFC`): The cool off-white that underlies the page. Just enough separation from white cards to establish depth without introducing a warm or tinted cast.

### Secondary
- **Crimson Rose** (`#BE123C`): The only accent in the system. Used for active states, priority labels, key callouts, and any single value on a screen that needs to be seen first. One use per visual region maximum.
- **Rose Tint** (`#FFF1F2`): Background for rose-accented badges and inline highlights. Never used for layout backgrounds.
- **Rose Deep** (`#9F1239`): Hover and active state for rose elements only.

### Neutral
- **Near-Black** (`#020617`): Primary text in light mode and page background in dark mode. The same value anchors both modes — the system is built on a single dark absolute.
- **Slate Mid** (`#475569`): Secondary text. Table data, supporting labels, descriptive copy.
- **Slate Muted** (`#94A3B8`): Tertiary text. Section labels, timestamps, metadata. Also the dark mode secondary text.
- **Border Subtle** (`#E2E8F0`): Hairline borders on cards and table rows. 0.5px only.
- **Border** (`#CBD5E1`): Standard borders — interactive elements at rest (tabs, filter pills).

### Dark Mode
Dark mode is built from the near-black DNA of the light mode text color. The two modes share `#020617` as an anchor — light mode reads it as text, dark mode reads it as canvas.

- **Dark Base** (`#020617`): Page background. Identical to light mode primary text.
- **Dark Surface** (`#0F172A`): Card and panel surfaces elevated one step above the base.
- **Dark Raised** (`#1E293B`): Further elevated surfaces (e.g. sticky nav, selected rows).
- **Dark Text** (`#F8FAFC`): Primary text on dark. Matches the light mode `surface` for symmetry.
- **Dark Text Secondary** (`#94A3B8`): Secondary and tertiary text on dark — same value as light mode `ink-tertiary`.
- **Dark Rose** (`#FB7185`): Accent in dark mode. The base rose (`#BE123C`) fails contrast on dark surfaces; this lighter value maintains the rose identity while meeting WCAG A.
- **Dark borders**: `rgba(248, 250, 252, 0.08)` (subtle) and `rgba(248, 250, 252, 0.15)` (standard).

### Data Viz (Categorical)
Eight categorical colors from Figma for chart series and user-need segments. These are fixed assignments — each color maps to one content category across all dashboards. They are never used for UI chrome.

- **Give me perspective** (`#5b8cff`)
- **Inspire me** (`#3dd9ff`)
- **Help me** (`#34d399`)
- **Update me** (`#a3e635`)
- **Keep me engaged / on trend** (`#fbbf24`)
- **Educate me** (`#ff8a7a`)
- **Divert / Amuse me** (`#ff4fd8`)
- **Connect me** (`#a78bfa`)

Each data color has a corresponding light tint (~10% opacity) for background fills and heatmap cells.

### Named Rules
**The One Voice Rule.** Rose appears on at most one element per visual region. Two rose elements in the same viewport compete and both lose. If multiple items qualify for emphasis, use weight or size — not more rose.

**The No-Warm-Neutral Rule.** The neutral scale is cool slate, not warm sand. Introducing warm beige or warm gray reads as a different brand. All surface tints must sit on the cool-to-neutral axis.

## 3. Typography

**Display Font:** ForbesHighlander (with Georgia, serif fallback)
**Body Font:** Favorit Pro in Figma and production when licensed files are available. Fallback: system UI stack (–apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif).

**Character:** The pairing is deliberately unresolved — a licensed editorial serif for titles only, then immediately handing off to the reader's native system font. Nothing decorative in the body. The Highlander carries identity; the sans carries information.

### Hierarchy
- **Display** (400 weight, 48px, line-height 1.125): Home page title only. Set in ForbesHighlander at regular weight.
- **Subtitle** (400 weight, 32px, line-height 1.24): Home page supporting line. Favorit Pro/system sans.
- **Dashboard Metrics** (700 weight, 32px, line-height 1.2, letter-spacing 0.64px): Stat numbers on analytical pages.
- **Body** (400 weight, 15px, line-height 1.2, letter-spacing 0.3px): Navigation breadcrumbs, tabs, chart labels, descriptions, footer links, table text.
- **Section Title** (700 weight, 15px, line-height 1.2): Chart and analysis group headings. No uppercase transform.
- **Micro** (400–500 weight, 10px): Timestamps, footnotes, metadata. Never below 10px.

### Named Rules
**The Regular-Weight Rule.** ForbesHighlander display is always 400 weight. Bold Highlander is available but forbidden in these dashboards — it overpowers the data and tips into marketing register.

**The Favorit Dependency Rule.** Figma uses Favorit Pro for all non-display text. Production should add licensed `Favorit Pro` web font files locally. Until then, use the system UI stack as the fallback; do not reintroduce Google Inter.

## 4. Elevation

Dashboard surfaces are flat by default. The analytical pages use tonal layering and borders: the page sits on `dark` (#020617), cards sit on the same dark surface, and separating hairlines use `#334155`.

The home page is the exception because Figma explicitly uses elevated image cards and a document-level shadow. Home cards use the Figma elevation stack: `0 10px 10px -5px rgba(0,0,0,.04), 0 20px 25px -5px rgba(0,0,0,.10)`. Do not apply this card shadow to dashboard tables, stat cards, or charts.

### Named Rules
**The Shadow Scope Rule.** Shadows are allowed only where Figma specifies them: the home page document frame and home image cards. Dashboard components remain border-only.

## 5. Components

All components are measured and direct. State changes are acknowledged with the minimum viable signal: a border shift, a background change, a color swap. No transitions longer than 150ms. No scale transforms. No movement beyond opacity.

### Tabs
The primary interactive element across all dashboards. Figma uses full-width underline tabs, not pills.

- **Container:** 64px height, full-width, sticky, bottom border `#334155`
- **Inactive:** transparent background, no border, `#CBD5E1` text, 15px font
- **Active:** rose `#E11D48` text and 1px underline
- **Spacing:** 24px between tabs; no pill padding or rounded shape

### Stat Cards
Summary metrics. Compact, flat, no hierarchy within the card beyond number → label.

- **Shape:** 16px radius
- **Background:** `#020617` on dark dashboards
- **Border:** 1px `#334155`
- **Number:** 32px, 700 weight, `white`
- **Label:** 15px, `#CBD5E1`
- **Padding:** `24px`

### Section Titles
Structural dividers that title groups of content. Never clickable.

- **Style:** 15px Favorit/system sans, 700 weight, no uppercase transform, `white`
- **Margin below:** 12px before the content it labels
- Sections are separated with 1px `#334155` rules where Figma shows dividers.

### Badges / Tier Pills
Small inline labels on data items. Two variants only.

- **Accent (rose):** `rose-tint` background, `rose` text, 8px radius, `2px 7px` padding, 10px font, 500 weight. Reserved for high-priority, top-tier, or alert states.
- **Neutral:** `surface` background, `ink-secondary` text. Default state for all other labels.

### Navigation Header
Fixed top bar on subpages. The only persistent chrome element.

- **Background:** `white` (light) / `dark-surface` (dark)
- **Border:** 0.5px `border-subtle` bottom edge only
- **Title:** ForbesHighlander 28px/400 — the page name, nothing else
- **Back button:** 16px icon, `ink-tertiary` at rest, `dark` on hover, 150ms transition
- **Max-width inner:** 960px centered

### Data Viz Bars
Horizontal bar charts for ranked lists. The bar is the data; labels flank it.

- **Track:** `surface` background, 4px radius, 22px height
- **Fill:** categorical data color (no opacity, full saturation)
- **Value label:** positioned outside the fill, colored to match the bar's category color, 11px/500
- **Bar radius:** 4px (matches track)

### Tables
Sortable ranked lists. The primary display surface for article and conversion data.

- **Header:** `ink-tertiary` text, 500 weight, 0.5px `border-subtle` bottom separator
- **Rows:** alternating by zebra striping is forbidden — use 0.5px `border-subtle` row separators only
- **Row hover:** `surface` background shift only (no border change)
- **Key value cells:** `dark` / 500 weight to distinguish from supporting columns

## 6. Do's and Don'ts

### Do:
- **Do** use `#BE123C` rose as the single accent. It appears once per visual region — on the element that must be seen first.
- **Do** use 0.5px borders throughout. `border-subtle` (#E2E8F0) for resting states, `border` (#CBD5E1) for interactive elements, `dark` (#020617) for active/selected states.
- **Do** keep ForbesHighlander at 400 weight in dashboards. Regular weight only.
- **Do** switch the rose accent to `#FB7185` in dark mode. The base rose fails contrast on `#0F172A` and `#020617` surfaces.
- **Do** use the categorical data colors (#5b8cff, #3dd9ff, #34d399, #a3e635, #fbbf24, #ff8a7a, #ff4fd8, #a78bfa) only for chart series. They are data, not UI.
- **Do** label all bar chart values outside the fill, colored to match the bar's data color.
- **Do** keep section labels uppercase at 11px with 0.06em letter-spacing. This is the only instance of uppercase text in the system.
- **Do** limit body line length to 65ch for any prose or descriptive text.

### Don't:
- **Don't** use Looker Studio or BI-tool visual patterns: color-coded columns, rainbow heatmaps, heavy chrome, panel-per-metric layouts. These dashboards are editorial documents, not control panels.
- **Don't** use startup dashboard clichés: gradient cards, large glowing stat numbers, animated counters, hero metrics with accent fills. The data speaks without theatrics.
- **Don't** use `box-shadow` anywhere. No ambient glows, no card lifts, no dropdown shadows. Depth is tonal.
- **Don't** use `border-left` or `border-right` greater than 0.5px as a colored accent stripe on any card, callout, or list item. Rewrite the element with a full border, a background tint, or nothing.
- **Don't** use gradient text or `background-clip: text`. All text is a single solid color.
- **Don't** introduce warm neutrals (sand, beige, warm gray). The neutral scale is cool slate. Warm tones read as a different brand identity.
- **Don't** use more than one rose element in the same visual region. Two rose accents cancel each other.
- **Don't** use the categorical data colors (#5b8cff etc.) for UI states, badges, or navigation. They are reserved for chart series meaning.
- **Don't** load additional web fonts. System sans for all body and label text.
