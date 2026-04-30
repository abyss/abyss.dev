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

## License

All code is licensed under the [ISC License](https://opensource.org/licenses/ISC).

All non-code content is licensed [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
