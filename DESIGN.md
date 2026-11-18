---
name: "80's Liquor"
description: "A white package-store counter: sign-color fills, skewed shop type, and work-order tickets."
colors:
  pink: "#fb305d"
  pink-deep: "#d3284e"
  pink-deep-hover: "#c42549"
  yellow: "#fcba00"
  teal: "#1ed2cc"
  link: "#096360"
  white: "#ffffff"
  ink: "#212123"
  ink-soft: "#4a4748"
  cream: "#fcf6e4"
  hatch: "#f3f1ec"
typography:
  display:
    fontFamily: "Archivo, \"Arial Narrow\", sans-serif"
    fontSize: "clamp(2.15rem, 4.6vw, 4.15rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 118"
  headline:
    fontFamily: "Archivo, \"Arial Narrow\", sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 1.85rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Archivo, \"Arial Narrow\", sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.02em"
    fontVariation: "\"wdth\" 115"
  body:
    fontFamily: "Hanken Grotesk, \"Avenir Next\", \"Segoe UI\", sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 3vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.pink-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.pink-deep-hover}"
    textColor: "{colors.white}"
  button-line:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1rem"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  chip-open:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.1rem 0.45rem"
    height: "1.7rem"
  chip-closed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0.1rem 0.45rem"
    height: "1.7rem"
  tag:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.18rem 0.35rem"
  tag-today:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.18rem 0.35rem"
  ticket:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 0.9rem"
  banner:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.9rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0.55rem"
    height: "44px"
  frame:
    backgroundColor: "{colors.hatch}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.75rem"
  text-link:
    textColor: "{colors.link}"
---

# Design System: 80's Liquor

## Overview

**Creative North Star: "The Shop Sign and the Work Order"**

The site is a package-store counter on a white page. The official logo is the supplied PNG, used as-is. Color comes from that sign and stays in the minority: a three-line stripe, a button, a tag, an open or closed chip, a cream row. Ink does the reading. The page does not borrow a tasting-room layout, a shadow stack, or a neon theme.

Type carries the counter. One display line is expanded and skewed. Headlines in the same face stay upright. Body is a plain grotesque at 18px. Hours, tags, chips, and frame labels are mono, so the record looks like a work order rather than a story. Unknown photos and the map sit in a hatched frame with a readable label. Deals and the owner note sit on a clipped ticket.

Motion is small and optional. When the visitor allows it, the hero copy rises 8px and fades in, and text links redraw their underline from the left. Reduced motion removes the entrance, the underline redraw, and the color transitions. Focus is a 2px ink outline set 3px outside the control.

**Key Characteristics:**

- White page, ink text, and 1px ink rules, with no shadows
- Sign colors used as stripes and fills; button pink deepened so white type holds
- Skewed expanded display, upright headlines, mono for hours and tags
- Clipped tickets and hatched frames with visible labels
- A full-bleed three-line stripe as the only ornament
- Official logo PNG, not a redraw

## Colors

The palette is the sign, sampled from the official logo, plus the white page. Bright sign colors are fills and stripes. Text is ink, or a teal darkened until it can be a link.

The three sign colors sit together only in the stripe. Elsewhere a region carries one job: deepened pink on the primary button, sign pink on the current nav mark, yellow on tags and text selection, teal on the open chip, cream on today's row and the notice banner.

### Primary

- **Sign Pink** (#fb305d): The top band of the stripe and the 2px underline on the current nav item. It is not the button fill and it is not type.
- **Button Pink** (#d3284e): The primary button fill. Sign pink mixed toward black so white type clears contrast.
- **Button Pink Hover** (#c42549): The primary button hover fill. One step darker than Button Pink. The ink border stays.

### Secondary

- **Sign Yellow** (#fcba00): The middle stripe band, the placeholder tag, and the text-selection highlight. Selection text stays ink. Yellow is not type.

### Tertiary

- **Sign Teal** (#1ed2cc): The bottom stripe band and the open-chip fill. Chip text on it is ink. The bright teal is not type.
- **Link Teal** (#096360): Inline links and text links. Sign teal darkened so it holds on white. Visited links keep this color.

### Neutral

- **White** (#ffffff): The page ground, the line button, the ticket, and the closed-chip and primary-button type. The theme color is white. There is no dark theme.
- **Ink** (#212123): Body, headlines, display, rules, borders, the closed chip, and the line button's hover fill. The focus outline is ink.
- **Soft Ink** (#4a4748): The dated aside on the rating ("as of"). It is not a second body color.
- **Sign Cream** (#fcf6e4): Today's row in the hours list and hours table, and the dashed notice banner. A logo cream used as a highlight fill, not as a page ground.
- **Hatch** (#f3f1ec): The ground of a missing photo or map, under a 45° ink hatch. It is a frame neutral, not a logo swatch.

**The Fill-Not-Text Rule.** Sign yellow, sign cream, and the bright sign teal are never type. They are stripes, tags, row highlights, and the open chip. Body, headlines, and labels are ink. Linked sentences use the darkened teal. White type appears on the deepened-pink button and the closed chip.

**The Deepened Button Rule.** The primary button does not use sign pink. It uses Button Pink, then Button Pink Hover. Sign pink stays the stripe and the current-page mark.

## Typography

**Display Font:** Archivo (with Arial Narrow, then sans-serif)
**Body Font:** Hanken Grotesk (with Avenir Next, Segoe UI, then sans-serif)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, then monospace)

**Character:** Shop-sign type over a plain grotesque, with a mono record for anything that has to be read as a fact. The shipped display face is Archivo with the width axis, weight 800. It is not a separate Archivo Black cut. Arial Narrow is only the fallback if Archivo does not load.

### Hierarchy

- **Display** (800, width 118%, clamp(2.15rem, 4.6vw, 4.15rem), line-height 0.92, tracking −0.035em): The page title. Skewed −8° from the lower left, ink, and only as wide as the line. The visit street line uses the same skew and weight at clamp(2.5rem, 7vw, 5.1rem), line-height 0.88, tracking −0.04em. The about quotation uses the same skew at clamp(1.9rem, 3.8vw, 3.15rem).
- **Headline** (800, width 112%, clamp(1.45rem, 2.2vw, 1.85rem), line-height 1.05, tracking −0.02em): Section headings. Upright. The same width and weight at 1.55rem covers the short owner heading.
- **Title** (800, width 115%, 1.2rem, line-height 0.95, tracking 0.02em, uppercase): Category names. Footer headings use the same uppercase Archivo voice at 0.95rem, width 112%, tracking 0.03em.
- **Body** (400, 1.125rem / 18px, line-height 1.55): Paragraphs, buttons (700, 1.05rem), and nav (700, 1rem). Prose measure is 62ch. The hero copy stops at 42ch. A lede is 1.25rem, line-height 1.4, and 36ch. The header phone is upright Archivo, weight 800, width 108%, 1.05rem and 1.35rem from 900px, tracking −0.02em, with a 2px underline.
- **Label** (500, 0.78rem, line-height 1.2, tracking 0.02em): The open/closed chip. Placeholder tags are 0.75rem with tracking 0.05em. Hours column headers are 0.78rem, uppercase, tracking 0.05em. Hero hours and the week list are 0.95rem. The live "today" figure is the same mono at clamp(1.8rem, 3.4vw, 2.7rem), line-height 1, tracking −0.03em. Header status is 0.82rem, 0.78rem from 900px. The rating figure is 1.25rem.

**The Skew Rule.** Display lines are Archivo, width 118%, skewed −8° from the lower left. Headlines, category names, and phone numbers in the same family stay upright.

**The Record Face Rule.** Hours, tags, chips, ticket meta, frame labels, the rating figure, and source lines are IBM Plex Mono at weight 500. Body stays in Hanken Grotesk.

## Layout

Content sits in a column of min(1120px, 100% minus the gutter on each side). The gutter is clamp(1rem, 3vw, 2.5rem). The stripe and the header rules run the full width of the viewport; the words stay in the column.

The page is mobile-first and has to work at 390px. On a narrow screen the header stacks: logo and phone on one row, today's status on the next, nav under that. From 900px the header is one row (logo, nav, status and phone) and sticks to the top. The logo is 52px, then 56px from 900px. Tap targets in the header, nav, and contact list are at least 44px tall on small screens. The header phone drops that minimum once it sits in the desktop cluster.

From 700px, deals form two columns (three from 880px; the short home list stays one column), categories form two columns split by a vertical ink rule, the footer forms two columns, and buttons gain an 11rem minimum width. From 880px the hero becomes two columns (copy about 1.15, frame about 0.78, gap 2.5rem), the deals/hours band splits on a vertical rule, the building line becomes a three-part row, and the about page sets prose beside the photo frames. Main ends with 2.5rem of padding. Section blocks open with about 1.5rem of space.

**The Column and the Bleed Rule.** Reading content lives in the 1120px column. The stripe and the hairline rules that frame the header bleed edge to edge.

## Elevation & Depth

The system is flat. Nothing has a shadow. Depth is a 1px ink rule, a dashed edge, a cream highlight on today's row, or the hatch behind a missing image. A white address card can sit on that hatch; it does not lift. The home week list uses a quieter divider, ink at 18% opacity. Structural rules and table rules are solid ink.

**The No Shadow Rule.** Surfaces are flat at rest and flat on hover. Do not add a drop shadow to a button, ticket, frame, or header.

## Shapes

Corners are square. Radius is 0 everywhere. Borders are 1px solid ink, except the notice banner and the missing-photo frame, which use a 1px dashed ink edge.

The ticket is the one clipped form: a sharp rectangle with 14px cut off the top-right corner and a 1px ink tick across that cut (a 20px line rotated 45°). Placeholder tickets add top padding (2.35rem) so the tag sits in the corner. Nothing else is clipped.

The stripe is three stacked bands, 3px each, pink then yellow then teal. It is hidden from assistive tech. It marks the top of the header, the top of the footer, and the breaks between major bands. Text selection is sign yellow with ink type.

**The One Clip Rule.** Only the ticket clips a corner, and only the top-right 14px. Every other corner is square.

**The Three-Line Rule.** The only ornament is the full-bleed stripe of three 3px bands. No second pattern, no neon, no generated illustration.

## Components

### Buttons

Square, 1px ink border, Hanken Grotesk 700 at 1.05rem, padding 0.65rem 1rem, minimum height 48px. From 700px, a minimum width of 11rem. Background and color move in 160ms ease. Focus is the page outline: 2px ink, 3px offset.

- **Shape:** Square (0px radius)
- **Primary:** Button Pink fill, white type, ink border. Hover fills with Button Pink Hover and keeps white type. Visited stays white.
- **Line:** White fill, ink type, ink border. Hover fills with ink and switches type to white. Used for directions and the way back to the front page.
- **Secondary / Ghost / Tertiary:** There is no third button. A text link is not a button.

### Chips

The open/closed mark. Square, 1px ink border, mono 500 at 0.78rem, tracking 0.02em, padding 0.1rem 0.45rem, minimum height 1.7rem. The header shows one chip next to today's range. The hours board shows the same chip beside the large mono range. Before the clock resolves, the header shows the weekly summary in mono and no chip.

- **Open:** Sign teal fill, ink type. The word is "Open now".
- **Closed:** Ink fill, white type. The word is "Closed".

### Tags

Square mono labels, 0.75rem, weight 500, tracking 0.05em, line-height 1.2, padding 0.18rem 0.35rem, 1px ink border.

- **Placeholder:** Sign yellow fill, ink type, pinned to the ticket's top-left (0.55rem inset). It reads PLACEHOLDER and only while the deal or the owner note is still unknown.
- **Today:** White fill, ink type, inline after the day name. It reads Today.

### Cards / Containers

- **Ticket:** White, 1px ink border, padding 0.85rem 0.9rem, the clipped top-right corner, and the diagonal tick. The deal line is body at 1.05rem. The "Valid" line is mono at 0.875rem. The hours table uses the same ticket with the padding on the cells (0.72rem 0.9rem) and a max width of 44rem. Today's row is Sign Cream. Cell type is mono at 1.05rem with tabular figures. Column headers are uppercase mono at 0.78rem, tracking 0.05em. The table caption ("Weekly hours, Eastern time") is screen-reader only; Days, Opens, and Closes are the visible headers. Ranges stay whole: hero ranges are nowrap, and the table keeps each open and close in its own cell.
- **Notice banner:** Sign Cream, 1px dashed ink border, padding 0.75rem 0.9rem, max 68ch. It carries the placeholder notice above the deals. It is not a button.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Corner Style:** Square, except the ticket's single clip.

### Navigation

A single row of text links, wrapping if it must: Home, Shop, Visit, About. Ink, weight 700, 1rem, no underline, padding 0 0.55rem, minimum height 44px. Hover draws a 2px ink underline. The current page draws a 2px Sign Pink underline. Visited stays ink. From 900px the row sits between the logo and the hours.

The phone in the header is an ink Archivo link with a 2px underline, not a button and not Link Teal. On small screens it is at least 44px tall.

A skip link sits off-screen until focused: ink fill, white type, weight 700.

### Hatched frames

A missing photo is a dashed ink frame on Hatch, with a 45° hatch of ink at 16% opacity, 7px apart. The label is mono 500 at 0.875rem on a white bar at 92% opacity, along the bottom. The hero frame is 4/5 and up to 16.5rem wide until the two-column hero. Category thumbs are square. About photos are 3/2.

The visit map is the same hatch at 16/9, up to 40rem, padded 1rem, content at the bottom-left. Its label reads "Map placeholder", with a 1px ink border, white fill, and padding 0.15rem 0.45rem. The address sits in a white card (94% white, 1px ink border, padding 0.85rem 1rem, max 24rem) with a line button for directions.

**The Labeled Blank Rule.** A missing photo or map stays a hatched frame with a readable label. The visit frame's label is "Map placeholder". Do not drop in a generated picture.

### Text links

Link Teal, no default underline. A 1px underline in the current color sits under the line and, when motion is allowed, redraws from the left in 220ms with cubic-bezier(0.16, 1, 0.3, 1). Visited keeps Link Teal. Focus uses the ink outline. The same treatment is the footer phone, email, and Facebook, and the source lines.

### Hours figure

Today's range on the home board is the large mono figure, paired with the chip, in a slot at least 4.6rem tall so the swap from "Eastern time" to the live range does not jump. The shop call line is upright Archivo, width 110%, clamp(1.7rem, 3vw, 2.15rem); the number inside it is clamp(2rem, 5vw, 3rem), width 112%, ink, with a 2px underline. That sentence is the heading. It does not sit under a second label.

**The Range Stays Whole Rule.** An open-to-close range stays on one line. The weekly caption on the hours table stays screen-reader only.

## Do's and Don'ts

### Do:

- **Do** keep the page ground white and the reading text ink.
- **Do** use the official logo PNG as supplied: 52px in the header, 56px from 900px up.
- **Do** skew display lines −8° from the lower left, Archivo width 118%, weight 800, and leave headlines upright at width 112%.
- **Do** set body in Hanken Grotesk at 1.125rem (18px), weight 400, line-height 1.55.
- **Do** set hours, tags, chips, and frame labels in IBM Plex Mono at weight 500.
- **Do** fill the primary button with Button Pink and white type, keep the 1px ink border, and hold a 48px minimum height.
- **Do** mark the current nav item with a 2px Sign Pink underline. Hover is a 2px ink underline.
- **Do** keep each hours range intact on one line. Keep the weekly-hours caption screen-reader only.
- **Do** label a missing photo or map in the hatched frame. The visit frame reads "Map placeholder".
- **Do** draw :focus-visible as a 2px ink outline, 3px outside the control.
- **Do** run the 8px hero rise (700ms) and the underline redraw only when the visitor has not asked for reduced motion.

### Don't:

- **Don't** set type in sign yellow, sign cream, or the bright sign teal.
- **Don't** use sign pink as the button fill. That pink is the stripe and the current-page mark.
- **Don't** add a drop shadow, a corner radius, or an ornament besides the three-line stripe.
- **Don't** redraw the logo or replace a labeled hatch with a generated illustration.
- **Don't** load Archivo Black as a second family. Display type is Archivo with the width axis.
- **Don't** skew headlines, category names, or the phone number.
- **Don't** show the weekly-hours caption as visible text above the table.
- **Don't** build a neon theme. The period notes are the stripe, the skew, and the ticket.
- **Don't** give visited links a second color. A visited text link stays Link Teal; a visited button, nav item, or phone link keeps that control's own ink or white.
