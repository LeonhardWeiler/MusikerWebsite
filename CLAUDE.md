# CLAUDE.md

Guidance for working in this repository.

## What this is

A static musician showcase website (`index.html` + `css/` + `js/`). Plain HTML,
CSS and vanilla JavaScript — **no framework, no build step, no dependencies, no
package manager**. It is served with GitHub Pages straight from the repository
root, so `index.html` must stay at the root and all asset paths stay relative.

## Verify changes

There is no local toolchain to install. To verify a change, open `index.html` in a
browser (or serve the folder, e.g. `python -m http.server`, so relative paths and
fonts resolve) and check the affected artist section and its dialog.

CI runs htmlhint against `index.html` on every push and pull request
(`.github/workflows/lint.yml`); it executes via `npx`, so nothing is installed
into the repo. Run the same check locally with `npx htmlhint index.html`.

## Architecture

Each artist is a self-contained `<section>` in `index.html` with the same shape:

- a link `<nav>` (genre + Instagram / YouTube / Spotify),
- a hero `<img class="img-big">`,
- a `<dialog>` holding the biography, album grid and a YouTube embed.

`js/script.js` wires each dialog's open/close by element ID
(`<artist>__open`, `<artist>__dialog`, `<artist>__close`).

### Mirrored logic — keep in sync

The per-artist markup and its JS wiring are **parallel copies**. When adding,
removing or renaming an artist you must update **both** `index.html` (the
section + unique IDs) **and** `js/script.js` (the matching open/close handlers).
IDs must match exactly or the dialog will not open.

## Conventions

- Styling lives entirely in `css/style.css`, driven by CSS custom properties
  defined in `:root` (colors, font sizes, spacing).
- Source files carry `SPDX-License-Identifier: GPL-3.0-or-later`.
- The project is documented for a general audience in English; keep user-facing
  text and identifiers English.

## License

GNU GPL v3.0 or later (`GPL-3.0-or-later`); see `LICENSE`.
