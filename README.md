# Musicians

A small static website that showcases musicians. Each artist gets a full-screen
section with a hero image, quick links to their genre and streaming/social
profiles, and a "More" button that opens a modal dialog with a short biography,
album covers and an embedded video.

The site currently features **The Beatles** and **Bob Dylan**.

## Live site

The site is a plain static page and is served with GitHub Pages from the
repository root (`index.html`).

## Features

- Full-height, scroll-snapping sections (one per artist)
- Per-artist link bar (genre, Instagram, YouTube, Spotify)
- Native `<dialog>` modal with biography, album grid and a YouTube embed
- Responsive layout that collapses the dialog grid on narrow screens
- Custom web fonts loaded locally from `assets/fonts/`

## Tech stack

Hand-written **HTML, CSS and vanilla JavaScript** — no framework, no build step
and no dependencies. Open the page in any modern browser to run it.

## Project structure

```
.
├── index.html            # Markup for all artist sections and their dialogs
├── css/
│   └── style.css         # All styling (custom properties, layout, dialog, responsive)
├── js/
│   └── script.js         # Wires the "More" buttons to open/close each dialog
├── assets/
│   └── fonts/            # Local web fonts (Mauline, SF Pro)
├── LICENSE               # GNU GPL v3 license text
├── CHANGELOG.md          # Notable changes, following Keep a Changelog
└── AGENT/                # Project health report and agent working notes
```

## Development

There is no toolchain to install. To work on the site:

1. Clone the repository.
2. Open `index.html` directly in a browser, or serve the folder with any static
   file server (for example `python -m http.server`) so relative paths resolve.
3. Edit the HTML/CSS/JS and reload.

### Adding another artist

Each artist is a self-contained `<section>` in `index.html` following the same
pattern (link `<nav>`, hero `<img>` and a `<dialog>`). To add one, copy an
existing section, give its dialog and open/close controls unique IDs, and wire
those IDs up in `js/script.js`.

## License

Licensed under the **GNU General Public License v3.0 or later**
(`GPL-3.0-or-later`). See [LICENSE](LICENSE) for the full text.
