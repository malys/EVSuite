# EVSuite site

[![Pages](https://github.com/malys/EVSuite_site/actions/workflows/pages.yml/badge.svg)](https://github.com/malys/EVSuite_site/actions/workflows/pages.yml)
[![Website](https://img.shields.io/badge/website-malys.github.io%2FEVSuite__site-2f81f7)](https://malys.github.io/EVSuite_site/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Source of the EVSuite documentation site, <https://malys.github.io/EVSuite_site/>, built with
[Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Included in the
EVSuite workspace as the `site/` submodule.

## Contents

- [Building](#building)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Legal](#legal)

## Building

```sh
npm ci
npm run dev     # local preview
npm run build   # static output in dist/
```

Pages live in `src/content/docs/`; the sidebar is declared in `astro.config.mjs`. Internal
links carry the `/EVSuite_site/` base path.

## Screenshots

`tools/shots.sh` captures the apps from a running Automotive emulator (1920×1080, AAOS bars
included) into `src/assets/screenshots/`. Install current builds on the emulator first.

```sh
tools/shots.sh          # every app
tools/shots.sh tasker   # one app: control | abrp | simple | swipe | tasker
```

## Deployment

Every push to `main` builds and deploys to GitHub Pages through
[`pages.yml`](.github/workflows/pages.yml). Pages must be enabled with source
**GitHub Actions** in the repository settings.

## Legal

MIT — see [LICENSE](LICENSE). EVSuite is an independent project, not affiliated with or
approved by SAIC Motor or MG Motor.
