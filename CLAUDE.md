# Portfolio Project Memory

## Project Structure
- Vue 3 app, Options API style
- `src/main.js` — entry point, imports `./styles/views.css`
- `src/App.vue` — root component with Navigation and router-view
- `src/views/` — all page views
- `src/components/` — reusable components (Poster, SeeMoreCategories, ContactMe, etc.)
- `src/styles/views.css` — shared styles for all project/case study views
- `src/fonts/` — custom fonts: Futura-Med, Futura-Book, Futura Heavy, Futura Light, JosefinSans

## Shared Styles (views.css)
All case study view pages use `src/styles/views.css` (imported globally in main.js).
This file is the **source of truth** for:
- @font-face declarations (Futura-Med, Futura-Book, Josefin Sans)
- `.banner-m`, `.header`, `.header-m`, `.header-2`, `.header-2-m`
- `.subheader-posters`, `.subheader-posters-m`
- `.specs-row`, `.specs`, `.col-list`, `.specs-title`, `.specs-list`, etc.
- `.introduction` (22px, 240px margins, 28px line-height — hop.vue standard)
- `.overview`, `.overview-m`, `.introduction-m`
- `.see-more-div`, `.sm-title`, `.sm-title-m`
- `.reveal`, `.reveal.active`

## Per-View Scoped Styles
Each view's `<style scoped>` now only contains what's UNIQUE to that page:
- `.banner` (margin-top varies per page)
- `.banner-m` overrides (if height or margin-top differs from base)
- `.header-2` margin-left override (if not 240px)
- `.introduction` overrides (if font-size/margins differ from 240px/22px standard)
- Page-specific classes (.digi-ill, .header-3, .browse-title, image layouts, etc.)
- `a` / `a:hover` link colors (vary per page)

## Key Views
- `hop.vue` — flagship case study; defines the styling standard
- `cnn-sia.vue` — case study matching hop.vue's layout exactly
- `cnn.vue` — has unique `.browse-title` + custom `.reveal` (60px translate)
- `shopee.vue` — has `.header-3`, `.header-3-m` for sub-sections
- `lta.vue`, `samsung.vue` — have `.digi-ill` image gallery classes
- `digital-illustrations.vue` — has `.row1` image gallery classes
- `worm-squirm.vue` — case study page (typeface project); uses shared styles, kept `.header-2` (180px), `.introduction` (180px), image gallery, `a` colors
- `about.vue`, `doodleboard.vue`, `sandbox.vue` — completely different layouts, NOT case study pages, do NOT use shared view styles


## Notes for Claude
- This is a personal portfolio — prioritize clean, readable code over clever solutions
- When suggesting improvements, explain what changed and why
- Add comments to explain the changes made