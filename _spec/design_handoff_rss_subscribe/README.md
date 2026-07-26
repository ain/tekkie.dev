# Handoff: RSS subscribe — progressive disclosure panel (option 1c)

## Overview
The blog index ends with a plain `subscribe via RSS` text link that reads exactly like body copy and, when clicked, hands the user a wall of raw XML. This design keeps the link's rest state **pixel-identical to today** and instead fixes what happens after the click: the link expands an inline panel containing a copyable feed URL, one-tap hand-off to three RSS readers, and a one-sentence explainer for people who don't have a reader.

Hard constraints agreed with the designer/owner, which the implementation must honour:
- no colour changes
- no font changes
- no layout changes (at rest — the panel is a click-triggered reveal that pushes content below it down while open)
- pagination is not touched

## About the design files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behaviour, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (the source page appears to be a Jekyll/minima-style static site, so a Liquid include plus vanilla JS is the likely fit) using its established patterns. If the target is a component framework instead, build it with that framework's idioms.

`RSS Subscribe Link.dc.html` contains four side-by-side mocks: a `ref` card (today), and options `1a`, `1b`, `1c`. **Only `1c` is being implemented.** 1a and 1b are included for context on what was rejected.

## Fidelity
**High fidelity.** Colours, typography, spacing and interaction are final and were matched to a screenshot of the live page (`current-page-reference.png`). Values below are exact.

Caveat: the mock reproduces the host page's styles inline so it can stand alone. In the real codebase, **inherit** the page's existing type and colour rather than hardcoding the values below — the values are given so you can verify you inherited the right thing, not so you can re-declare them.

## Screen / view

**Name:** Blog index — end-of-list subscribe affordance
**Purpose:** Let a returning reader subscribe to the feed without leaving the index or seeing raw XML.
**Location:** Between the last post excerpt and the pagination row, in the existing `.rss-subscribe` slot. Content column is the page's normal text column (700px in the mock's card; use the host page's column width).

### Trigger link (rest state)
Unchanged from today. Do not restyle it.
- Text: `subscribe via RSS` (lowercase, as today)
- Type: inherited body font — `"Helvetica Neue", Helvetica, Arial, sans-serif`, 400, 16px, line-height 1
- Colour: `#15498c` (the page link blue), `text-decoration: none`
- Hover: `text-decoration: underline` (page default)
- Container: `display:flex; flex-direction:column; align-items:flex-start` so the panel below can stretch
- Click: `preventDefault()`, toggles the panel
- Keep the `href` pointing at the real feed URL so middle-click / cmd-click / no-JS still works

### Panel (revealed state)
Wrapper:
- `align-self: stretch` (full text-column width), `box-sizing: border-box`
- `margin-top: 18px`
- `border: 1px solid #e8e8e8` (same hairline as the pagination boxes and footer rule)
- `padding: 20px 22px`
- `display:flex; flex-direction:column; gap:16px`
- No background fill, no radius, no shadow

Row 1 — feed URL + copy button (`display:flex; flex-wrap:wrap`, no gap; the two boxes share a border seam):
- `<code>`: `flex:1; min-width:0; box-sizing:border-box; border:1px solid #e8e8e8; border-right:0; padding:11px 13px;` type `ui-monospace, SFMono-Regular, Menlo, monospace` 400 14px/1.2, colour `#111`; `overflow:hidden; text-overflow:ellipsis; white-space:nowrap`
- Copy button: `border:1px solid #e8e8e8; background:transparent; padding:11px 16px;` type Helvetica 400 14px/1.2, colour `#15498c`, `cursor:pointer`
- Button hover: `border-color:#15498c`
- Label toggles `Copy` → `Copied` for 1600ms after a successful click, then reverts

Row 2 — reader hand-off (`display:flex; flex-wrap:wrap; gap:10px`), three links styled identically:
- `border:1px solid #e8e8e8; padding:8px 13px;` Helvetica 400 14px/1.2, colour `#15498c`, `text-decoration:none`
- Hover: `border-color:#15498c`
- Targets (feed URL percent-encoded):
  - Feedly — `https://feedly.com/i/subscription/feed/{encodeURIComponent(feedUrl)}`
  - Inoreader — `https://www.inoreader.com/?add_feed={encodeURIComponent(feedUrl)}`
  - NetNewsWire — `feed:{feedUrl}` (the generic `feed:` scheme; opens whatever native reader is registered)

Row 3 — explainer:
- Helvetica 400 14px/1.5, colour `#757575`, `text-wrap: pretty`
- Copy, verbatim: `No reader yet? An RSS app collects new posts from every site you follow in one list — no inbox, no algorithm.`

## Interactions & behavior
- **Toggle:** clicking the link opens the panel; clicking again closes it. No animation in the mock; a 120–160ms height/opacity ease-out is acceptable if the codebase animates other disclosures, but honour `prefers-reduced-motion`.
- **Copy:** `navigator.clipboard.writeText(feedUrl)`, failure swallowed silently. The `Copied` label shows regardless so the button never appears dead; if you prefer, gate it on promise resolution and fall back to selecting the `<code>` text.
- **Layout impact:** while open the panel pushes the pagination row down. This is the only layout movement in the design and only occurs after an explicit click.
- **Pagination:** untouched — do not restyle, reorder, or move it.
- **Accessibility:** the trigger should be a real control — `aria-expanded` on the link, `aria-controls` pointing at the panel id, panel focusable content in natural tab order, Escape closes and returns focus to the link. The copy button needs an `aria-live="polite"` announcement of "Copied" (the visual label change alone is not enough).
- **No-JS:** with JS disabled the link must still navigate to the feed URL. Progressive enhancement only.
- **Responsive:** the feed URL `<code>` has `min-width:0` and the row wraps, so at narrow widths the Copy button drops below the URL field. Reader links wrap on their own. No breakpoints needed.

## State management
Two pieces of local component state, no data fetching:
- `panelOpen: boolean` — false initially, toggled by the trigger link
- `copied: boolean` — set true on copy, reset to false by a 1600ms timeout (clear the timeout on unmount and on repeat clicks)

Config: `feedUrl` string, default `https://tekkie.dev/feed.xml`. In Jekyll this is `{{ "/feed.xml" | absolute_url }}`.

## Design tokens
All values are existing page values — nothing new was introduced.

| Token | Value | Used for |
|---|---|---|
| Link blue | `#15498c` | trigger link, buttons, reader links |
| Body text | `#111111` | feed URL text |
| Muted text | `#757575` | explainer line |
| Hairline | `#e8e8e8` | all borders (same as pagination boxes / footer rule) |
| Page surface | `#fdfdfd` | page background (inherited, not set by this component) |
| Body font | `"Helvetica Neue", Helvetica, Arial, sans-serif` | everything except the feed URL |
| Mono font | `ui-monospace, SFMono-Regular, Menlo, monospace` | feed URL |
| Sizes | 16px / 14px | trigger link / panel contents |
| Spacing | 10, 16, 18, 20, 22px | gaps and padding as specified above |
| Radius | `0` | no rounded corners anywhere |

## Assets
None. No images, no icon fonts. Option 1a used an inline RSS glyph SVG but **1c ships no icons** — nothing to source.

## Files
- `RSS Subscribe Link.dc.html` — the design prototype. Open in a browser; click `subscribe via RSS` in the `1c` card to see the panel. Option 1c's markup is in the `<div id="1c">` block; its behaviour (`togglePanel`, `copyFeed`, `readers`) is in the logic class at the bottom of the file.
- `current-page-reference.png` — screenshot of the live page as it exists today, for verifying inherited type and colour.
