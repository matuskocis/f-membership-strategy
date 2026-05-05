---
name: Forbes.cz Membership Strategy
description: Internal analytical dashboards for Forbes.cz membership performance
colors:
  # Base
  white: "#FFFFFF"
  surface: "#F8FAFC"
  dark: "#020617"
  # Accent
  rose: "#BE123C"
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
  data-violet: "#7F77DD"
  data-emerald: "#1D9E75"
  data-clay: "#D85A30"
  data-blue: "#378ADD"
  data-amber: "#BA7517"
  data-pink: "#D4537E"
typography:
  display:
    fontFamily: "ForbesHighlander, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.15
  headline:
    fontFamily: "ForbesHighlander, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  pill: "20px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "5px 14px"
  tab-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.dark}"
    rounded: "{rounded.pill}"
    padding: "5px 14px"
  stat-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.dark}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
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

**Creative North Star: "The Quiet Authority"**

The palette is three notes: pure white, near-black, and a single crimson rose. No tonal warmth, no ambient softness — the contrast is the confidence. This is a document that knows what it contains. The Forbes brand is present as structure, not decoration: the Highlander serif in page titles, the 0.5px hairline as the only visual separator.

The accent rose is used like a highlighter on a printed report. It marks one thing at a time. Its rarity is the point. When rose appears, readers stop.

This system rejects everything performative: no gradient fills, no shadow theatrics, no BI-tool color coding that turns a dashboard into a rainbow. The design serves professional readers who want to get in, understand, and decide. Every visual element either aids comprehension or is removed.

**Key Characteristics:**
- Extreme tonal contrast (pure white / near-black) with a single warm accent
- Flat surfaces separated by 0.5px hairlines, not shadows or backgrounds
- ForbesHighlander at 28px/400 weight as the only display voice
- System sans at 11–13px for all data, labels, and body
- Dark mode built on the same near-black as the light mode text

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
Six categorical colors for chart series and user-need segments. These are fixed assignments — each color maps to a content category across all dashboards. They are never used for UI chrome.

- **Violet** (`#7F77DD`): Default first series.
- **Emerald** (`#1D9E75`): Second series.
- **Clay** (`#D85A30`): Third series.
- **Blue** (`#378ADD`): Fourth series.
- **Amber** (`#BA7517`): Fifth series.
- **Pink** (`#D4537E`): Sixth series.

Each data color has a corresponding light tint (~10% opacity) for background fills and heatmap cells.

### Named Rules
**The One Voice Rule.** Rose appears on at most one element per visual region. Two rose elements in the same viewport compete and both lose. If multiple items qualify for emphasis, use weight or size — not more rose.

**The No-Warm-Neutral Rule.** The neutral scale is cool slate, not warm sand. Introducing warm beige or warm gray reads as a different brand. All surface tints must sit on the cool-to-neutral axis.

## 3. Typography

**Display Font:** ForbesHighlander (with Georgia, serif fallback)
**Body Font:** System UI stack (–apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif)

**Character:** The pairing is deliberately unresolved — a licensed editorial serif for titles only, then immediately handing off to the reader's native system font. Nothing decorative in the body. The Highlander carries identity; the sans carries information.

### Hierarchy
- **Display** (400 weight, 28px, line-height 1.15): Page and dashboard titles only. Set in ForbesHighlander at regular weight — not bold. The Highlander's weight is its authority; bold defeats the serif's natural authority.
- **Headline** (400 weight, 22–20px, line-height 1.2): Section titles and large stat numbers. ForbesHighlander for section headings; system 500 weight for numeric stat values.
- **Body** (400 weight, 13px, line-height 1.5): Table titles, article names, descriptions. System sans.
- **Label** (500 weight, 11px, letter-spacing 0.06em, uppercase): Section dividers, column headers, category markers. Uppercase system sans. Max line length 65ch.
- **Micro** (400–500 weight, 10px): Timestamps, footnotes, metadata. Never below 10px.

### Named Rules
**The Regular-Weight Rule.** ForbesHighlander display is always 400 weight. Bold Highlander is available but forbidden in these dashboards — it overpowers the data and tips into marketing register.

**The System Sans Rule.** No Google Fonts, no web-loaded secondary faces. All non-display text uses the system UI stack. This keeps the dashboards fast, legible at small sizes, and indifferent to network conditions.

## 4. Elevation

This system is flat by default. There are no `box-shadow` values in the component vocabulary. Depth is conveyed entirely through tonal layering: the page sits on `surface` (#F8FAFC), cards sit on `white` (#FFFFFF), and separating hairlines are 0.5px at `border-subtle` opacity.

In dark mode the same logic inverts: the page sits on `dark` (#020617), panels on `dark-surface` (#0F172A), elevated elements (sticky nav, selected rows) on `dark-raised` (#1E293B).

### Named Rules
**The No-Shadow Rule.** Shadows are prohibited. A card does not receive a shadow on hover. A modal does not receive a drop shadow. Depth is tonal or it is nothing. If you find yourself reaching for `box-shadow`, use a border or a background shift instead.

## 5. Components

All components are measured and direct. State changes are acknowledged with the minimum viable signal: a border shift, a background change, a color swap. No transitions longer than 150ms. No scale transforms. No movement beyond opacity.

### Tabs / Filter Pills
The primary interactive element across all dashboards. Pills with full-radius borders.

- **Shape:** 20px radius (full pill)
- **Inactive:** `surface` background, `border` border (0.5px), `ink-secondary` text, 12px font
- **Active:** `white` background, `dark` border (0.5px), `dark` text, 500 weight
- **Hover:** border shifts to `ink-tertiary`; 150ms transition on all properties
- **Sizing:** `5px 14px` padding. Font 12px system sans.

### Stat Cards
Summary metrics. Compact, flat, no hierarchy within the card beyond number → label.

- **Shape:** 8px radius
- **Background:** `white`
- **Border:** 0.5px `border-subtle`
- **Number:** 20–22px, 500 weight, `dark`
- **Label:** 10px, `ink-tertiary`
- **Padding:** `8px 12px`

### Section Labels
Structural dividers that title groups of content. Never clickable.

- **Style:** 11px system sans, 500 weight, uppercase, letter-spacing 0.06em, `ink-tertiary`
- **Margin below:** 12px before the content it labels
- No border, no background, no decoration

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
- **Do** use the categorical data colors (#7F77DD, #1D9E75, #D85A30, #378ADD, #BA7517, #D4537E) only for chart series. They are data, not UI.
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
- **Don't** use the categorical data colors (#7F77DD etc.) for UI states, badges, or navigation. They are reserved for chart series meaning.
- **Don't** load additional web fonts. System sans for all body and label text.
