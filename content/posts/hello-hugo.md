---
title: "Hello Hugo"
date: 2020-07-22
lastmod: 2021-05-16
draft: false
tags: ["hello", "hugo"]
aliases: ["/posts/so-it-begins"]
---

Finally, a published site on my domains.

I've always wanted to keep an up to date website, but never wanted to spend money on hosting or website builders and wanted a relatively straight-forward management process.

That's where Hugo came to the rescue. Being a static site generator, I am able to host it on GitHub Pages, for free, using a prebuilt theme! Of course, I'm picky, so I've modified the theme to my liking, contributing upstream when it made sense.

This site will serve as a place for collecting any writing I do, as well as list the projects I'm involved in with descriptions. I may add other stuff down the line.

The source code for the entire site is [available on GitHub](https://github.com/abyss/abyss.dev).

### Theme and Design Goals

I wanted to have two separate sites: one that I can keep slightly anonymized (for sharing online), and one that I can use as a professional portfolio in real life. Originally, I was expecting to do two separate sites.

However, through some clever tricks using Hugo environments, I am able to build the same site with slightly different choices. This ultimately means a shared code base between both sites, and dual posting all content.

### Static Site Generator: Hugo & Theme Choice

This site uses [Hugo](https://gohugo.io/) as a Static Site Generator. If you're not familiar with it, essentially it allows me to write most of the site in Markdown and quickly compile to a static HTML/CSS/JS website. I chose it mostly because of its popularity and ease of use.

For a theme, I started with [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) by Djordje Atlialp from the Hugo Theme's site. I picked it primarily because it had a light and dark mode, and had a nice minimalist-geek aesthetic.

I wasn't quite fond of every decision made by Djordje, which lead me to customizing the theme more and more. The theme the site now uses is [hello-abyss](https://github.com/abyss/hugo-theme-hello-abyss). More details about the differences can be found in the README on GitHub.

As mentioned before, I am using Hugo Environments to use different configuration sets (merged with the `_default` configuration) to add different settings for each domain's build.

### Hosting & CI/CD/CD: GitHub & GitHub Actions

When I push any changes to GitHub, the entire site is rebuilt using GitHub Actions. The sites are then hosted in two repositories that use GitHub Pages to serve.

Primarily, this is all on the back of [@peaceiris' actions-hugo](https://github.com/peaceiris/actions-hugo) and [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages), which are well documented and easy to use.

### Conclusion

It's been fun building out everything for the sites, and I'm incredibly pleased with the results. There will surely be more to come, as I have a few plans for the site and theme.

Thanks for checking it out!
