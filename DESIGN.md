---
name: Leonardo Ramaj
description: A one-person software studio presented like an Olivetti identity program, with matt paper, black ink and flat red, blue and ochre fields.
colors:
  paper: "#f3f3f0"
  sheet: "#ffffff"
  hairline: "#d3d3cd"
  ink-text: "#141414"
  graphite: "#55554f"
  olivetti-red: "#c8381f"
  on-red: "#ffffff"
  red-ink: "#b3311a"
  olivetti-blue: "#1f4e8c"
  on-blue: "#ffffff"
  ochre: "#e3a823"
  on-ochre: "#141414"
  ink-field: "#141414"
  on-ink: "#f3f3f0"
  danger: "#b3261e"
  paper-dark: "#121211"
  sheet-dark: "#1c1c1a"
  hairline-dark: "#34342f"
  ink-text-dark: "#ecebe6"
  graphite-dark: "#a6a59e"
  red-ink-dark: "#f0745a"
  olivetti-blue-dark: "#2b5fa6"
  ink-field-dark: "#050505"
  on-ink-dark: "#ecebe6"
  danger-dark: "#ff8a7a"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.4rem + 4.6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontFeature: "'ss01'"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.5
  numerals:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    fontFeature: "'tnum', 'lnum'"
  wordmark:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    letterSpacing: "-0.04em"
rounded:
  none: "0"
  circle: "9999px"
spacing:
  gutter: "20px"
  gutter-lg: "24px"
  page-x: "20px"
  page-x-sm: "32px"
  page-x-lg: "40px"
  section-y: "80px"
  section-y-lg: "112px"
  field-pad: "24px"
  field-pad-lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.olivetti-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink-text}"
    textColor: "{colors.paper}"
  button-ink:
    backgroundColor: "{colors.ink-text}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-ink-hover:
    backgroundColor: "{colors.olivetti-red}"
    textColor: "{colors.on-red}"
  button-on-red:
    backgroundColor: "{colors.on-red}"
    textColor: "{colors.olivetti-red}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-on-red-hover:
    backgroundColor: "{colors.ink-text}"
    textColor: "{colors.paper}"
  icon-button:
    textColor: "{colors.ink-text}"
    rounded: "{rounded.none}"
    size: "40px"
  icon-button-hover:
    backgroundColor: "{colors.ink-text}"
    textColor: "{colors.paper}"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-text}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  radio-indicator:
    rounded: "{rounded.circle}"
    size: "20px"
---

# Design System: Leonardo Ramaj

## Overview

**Creative North Star: "The Olivetti Identity Program"**

The site treats a one-person software studio the way Olivetti treated a typewriter: technology presented with modernist rigour and warmth. A matt paper ground carries black ink type; flat red, blue and ochre fields own whole regions of the page instead of decorating them. Everything sits on a visible 12-column module, information is set in hairline-ruled spec tables, and the only ornament is a family of five geometric marks, each standing for one step of the working method.

Density is brochure-like: generous section spacing, large tightly tracked display type, few elements per spread. Depth is entirely flat. There is no monospace, no terminal imagery, no card grid and no rounded pill anywhere; the developer-portfolio default is the explicit thing this world replaces.

**Key Characteristics:**
- Archivo is the only typeface; the wordmark "leonardo ramaj" is always lowercase.
- Flat colour fields occupy whole grid regions (hero picker, project spreads, contact section, footer).
- Square corners everywhere; the only curves are true circles (circle mark, radio indicator).
- Hairline-ruled definition lists with tabular numerals carry facts (role, period, stack, VAT).
- Five GeoMarks (circle, square, half-disc, triangle, bar) are the only ornament.
- One authored motion: the hero marks assemble once.

## Colors

Matt paper and black ink, with three Olivetti fields used at full strength and full area.

### Primary
- **Olivetti Red** (olivetti-red): the action colour and the loudest field. Owns the hero enquiry picker, the whole contact section, the project-page call to action and the primary button. Same value in both themes.
- **Red Ink** (red-ink / red-ink-dark): red tuned for text on paper. Link hover, step numbers in the method diagram, success check. Lightens in dark mode so it stays legible.

### Secondary
- **Olivetti Blue** (olivetti-blue / olivetti-blue-dark): a field colour. Second project spread and its project page, portrait frame, circle and bar marks.

### Tertiary
- **Ochre** (ochre): a field colour and the selection highlight. First project spread and its page, the AI skill group, square mark. Always carries ink text (on-ochre), never white.

### Neutral
- **Paper** (paper / paper-dark): page ground and form-field fill.
- **Sheet** (sheet / sheet-dark): the white sheet the contact form is printed on, sitting inside the red field.
- **Ink** (ink-text / ink-text-dark): body text, section rules, the ink button, the focus outline.
- **Ink Field** (ink-field / ink-field-dark): the footer and the third project spread; text on it is on-ink.
- **Graphite** (graphite / graphite-dark): secondary copy, spec-table labels, inactive nav and locale codes.
- **Hairline** (hairline / hairline-dark): table rules, field borders, header bottom rule.
- **Danger** (danger / danger-dark): invalid field border and form error line only.

### Named Rules
**The Whole Field Rule.** Red, blue and ochre are used flat and at full strength: as fields that own a whole grid region with content set on them, as solid GeoMarks, or (red only) as the action button. Never as tints, gradients or decorative stripes.

**The Field Cycle Rule.** Projects take fields in order ochre, blue, ink (index mod 3), and a project page uses the same field as its home spread so the view transition reads as one object.

**The Two Themes Rule.** Colours come only from the `--c-*` semantic tokens in `app/assets/css/main.css`; every surface must work under the `.dark` override.

## Typography

**Display Font:** Archivo (with ui-sans-serif, system-ui)
**Body Font:** Archivo
**Label/Mono Font:** none; there is no monospace in this system.

**Character:** One grotesk at weights 400 to 800, tracked tight at display sizes and set with stylistic set 01, like corporate-identity typesetting rather than a tech product.

### Hierarchy
- **Display** (700, fluid 2.6 to 5.5rem, 0.98): hero promise, project names on the lead spread and project pages, contact title.
- **Headline** (700, fluid 2.1 to 3.6rem, 1): section titles, CTA panels, next-project link.
- **Title** (700, 1.75rem, -0.02em): picker legend, form title. Case-study section heads use 1.9rem rising to 2.4rem.
- **Body** (400, 1.125rem, 1.625): intros and case-study prose, capped at 65ch; the about bio steps up to 1.25 to 1.5rem.
- **Label** (600, 0.95rem): buttons, spec-table values, byline, field labels.

### Named Rules
**The Tabular Facts Rule.** Dates, periods, VAT and phone numbers always use tabular lining numerals.

**The Lowercase Wordmark Rule.** "leonardo ramaj" is set lowercase, semibold, tracked -0.04em (header) to -0.055em (the footer's full-width wordmark).

## Layout

Every section sits on one module: 4 columns on phones, 8 from `sm`, 12 from `lg`, with 20px gutters (24px on large screens), inside a page container capped at 84rem with 20/32/40px side padding. Sections open with a full-width ink rule and a headline-plus-intro row (headline left, intro from column 9), and are spaced 80px apart (112px on large screens). Project spreads are deliberately unequal: a lead spread set inside its field, a wide spread with the field on the right, and a compact spread with the field on the left. On phones the hero places the red picker before the method marks so the action is on the first screen.

## Elevation & Depth

The system is completely flat. No `box-shadow`, blur or overlay is used anywhere. Separation comes from colour fields, the white sheet against red, and 1px rules.

**The Printed Sheet Rule.** Depth is shown by placing one flat surface on another (sheet on red, image inside a field's padding), never by shadow.

## Shapes

Every rectangle has square corners: buttons, fields, fields of colour, images, the header. The only curves are true circles: the circle and half-disc marks and the 20px radio indicator in the hero picker. The GeoMarks are drawn on a 40-unit grid and are filled, never outlined. Lists use a small 8px red square as their bullet.

## Components

### Buttons
Blunt rectangles that invert on hover.
- **Shape:** square corners (0).
- **Primary:** red with white label, 14px by 20px padding; hover flips to ink on paper.
- **Ink:** ink with paper label; hover flips to red.
- **On red:** inside a red field the button is white with a red label; hover flips to ink.
- **Text link with arrow:** label over a 2px ink underline; hover turns rule and text red. The arrow nudges 4px right.
- **Focus:** 2px ink outline, 2px offset, site-wide.

### Cards / Containers
There are no cards. Containers are colour fields with 24 to 40px padding (up to 56px around a project banner) and no border or shadow.

### Inputs / Fields
- **Style:** 1px hairline border, paper fill, square corners, 12px by 14px padding.
- **Focus:** border turns ink; no glow.
- **Error:** border turns danger, with a danger message below. Form outcomes print as a full-width ruled line, not a toast.

### Navigation
Sticky 72px header on paper with a hairline bottom rule: lowercase wordmark, graphite section links that turn ink on hover, a locale switch (IT/EN with the inactive code in graphite), a theme cycle button, and the red contact button visible at every width. On phones the links move into a full-width ruled list with large 1.5rem semibold items.

### Spec Table
Definition lists ruled by hairlines (or by 30% current colour on a field): graphite label in a 6rem column, semibold value, numerals tabular. On wide screens the compact form becomes three columns under an ink rule.

### GeoMark and the Method Diagram
Five filled marks, each tied to a method step: circle (analysis, blue), square (planning, ochre), half-disc (build, red), triangle (SEO and launch, ink), bar (maintenance, blue). They appear as the hero row and as a manual-style diagram hung from a 2px ink axis. In the hero they assemble once when the row is 60% in view: each mark drops in from its own offset and rotation over 1.1s with an expo ease-out, staggered 90ms, animating transform only. With reduced motion or without JS the marks simply sit at rest.

### Enquiry Picker
A red field holding a ruled radio list (circular indicators) and a full-width on-red submit button that scrolls to the contact form and pre-fills its topic.

## Do's and Don'ts

### Do:
- **Do** let red, blue and ochre fields own whole grid regions, and cycle project fields ochre, blue, ink.
- **Do** open each section with a full-width ink rule and a headline on the 12-column module.
- **Do** set facts in hairline-ruled spec tables with tabular numerals.
- **Do** keep every rectangle square-cornered; use a curve only as a full circle.
- **Do** use a GeoMark only where it stands for its method step.
- **Do** use Lucide for interface icons and Simple Icons for technology and social logos.
- **Do** keep motion to transform only, and switch it off under reduced motion.

### Don't:
- **Don't** use a monospace face, terminal chrome or code-styled decoration.
- **Don't** use shadows, gradients, glass or tinted overlays.
- **Don't** use rounded rectangles, pills, chips or tag clouds.
- **Don't** lay projects out as equal cards in a grid.
- **Don't** put white text on ochre, or ochre text on paper for anything a reader needs.
- **Don't** add new decorative shapes beyond the five GeoMarks, or a second authored animation.
