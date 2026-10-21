# abyss.dev // cwr.io

Source code for [https://abyss.dev](https://abyss.dev) and [https://cwr.io](https://cwr.io).

Built with [Hugo](https://gohugo.io/) and a custom theme using [Tailwind CSS v4](https://tailwindcss.com/) and [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography), all contained in this repository.

Both sites share the same content and codebase, with site-specific configuration in `config/cwr.io/` overriding the defaults in `config/_default/`.

Hosted on [Cloudflare Pages](https://pages.cloudflare.com/), deployed automatically on push.

## Development

```bash
task dev        # abyss.dev (http://localhost:8000)
task dev:cwr    # cwr.io (http://localhost:8000)
```

## Build

```bash
task build      # abyss.dev
task build:cwr  # cwr.io
```

## Icons

Icons are [Simple Icons](https://simpleicons.org/) SVGs (CC0) in `assets/icons/`, read at build time with `resources.Get`.

To add one, download it by slug and reference the slug as `icon` in a `[[params.social]]` entry in `config/_default/config.toml`:

```bash
curl -fo assets/icons/<slug>.svg https://cdn.jsdelivr.net/npm/simple-icons@16.35.0/icons/<slug>.svg
```

A missing file drops the link silently. `linkedin.svg` comes from `simple-icons@13.21.0` because later versions removed it.

## Code blocks and callouts

Code blocks use the Chroma `onedark` style (`hugo gen chromastyles --style=onedark > assets/css/syntax.css`). Tag each fence with a language so it gets highlighted.

Callouts use Hugo's alert syntax, for example `> [!NOTE]` on the first line of a blockquote. Types are `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, and `CAUTION`.

## License

All code is licensed under the [ISC License](https://opensource.org/licenses/ISC).

All non-code content is licensed [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
