# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-07-13

### Added

- `README.md` describing the project, its features and structure.
- `CLAUDE.md` with architecture and verification notes for contributors.
- This `CHANGELOG.md`.

### Changed

- Translated remaining German UI text to English: page title `Musiker Website`
  became `Musicians`, and the `Mehr` link label became `More`.
- Dropped the `/intl-de` locale segment from Spotify links so they are
  language-neutral.
- Cleaned up the biography text: replaced em-dash-style asides with plain
  sentence punctuation and smart quotes/apostrophes with straight ASCII.
- Declared the license explicitly as `GPL-3.0-or-later` via `SPDX-License-Identifier`
  headers in the HTML, CSS and JS source files.

## [0.1.1] - 2026-01-16

### Added

- GNU General Public License v3 (`LICENSE`).

## [0.1.0] - 2025-11-11

### Added

- Initial static website featuring The Beatles and Bob Dylan. Each artist has a
  full-screen section with a link bar (genre, Instagram, YouTube, Spotify), a
  hero image and a modal `<dialog>` containing a biography, album grid and an
  embedded video.
- Served with GitHub Pages from the repository root (`index.html`).
