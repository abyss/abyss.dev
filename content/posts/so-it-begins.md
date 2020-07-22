---
title: "So It Begins"
date: 2020-07-22
draft: false
tags: ["hello", "hugo"]
---

Finally, I have published a website on my domains.

I've always had thoughts of what I'd do with a website, but also realized that no one is interested enough in my thoughts to come to a website to read them. Then I would realize that I would have to pay a hosting fee and deal with a lot of HTML/CSS to design it properly (and boy am I picky). That was always enough to convince me not to do it.

At some point I learned about static site generators realized I could remove the cost barrier and some of the design barrier (with themes designed by others).

This site will serve as a place for me to collect any writing I decide to do (mostly guides, likely), as well as list all projects I'm involved in with descriptions. I may put other stuff here eventually, too.

The source code for the entire site is [available on GitHub](https://github.com/abyss/abyss.dev).

### Theme and Design Goals

I wanted to have two separate sites: one that I can keep for my online identity, and one that I can use as a professional portfolio in real life. Originally, I was expecting to do two separate sites.

However, I eventually came to the thought that I could use the same website, and with some use of variables I could have some content or links on either site. Also, given that my online handle is "Abyss", I was amused by the idea that my online identity website would be "dark mode", and my professional portfolio "light mode".

### Static Site Generator: Hugo + Theme

This site uses [Hugo](https://gohugo.io/) as a Static Site Generator. If you're not familiar with it, essentially it allows me to write most of the site in Markdown and quickly compile to static HTML files. I chose it mostly because of it's popularity.

For a theme, I picked out [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) by Djordje Atlialp from the Hugo Theme's site. I picked it primarily because it had a light and dark mode, and had a nice minimalist-geek aesthetic.

Did I mention that I'm picky? I wanted to change some things... so I did. The actual theme used by the site is [hello-abyss](https://github.com/abyss/hugo-theme-hello-abyss). More details about the differences in the README on GitHub.

I use Hugo Environments to use different configuration sets (merged with the `_default` configuration) to add different settings for each domain's build.

### Build / Hosting: GitHub

When I push any changes to GitHub, the entire site is rebuilt using GitHub Actions. The sites are then hosted in two repositories that use GitHub Pages to serve.

Primarily, this is all on the back of [@peaceiris' actions-hugo](https://github.com/peaceiris/actions-hugo) and [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).


### Conclusion

It's been incredibly fun building out everything for the sites, and I'm incredibly pleased with the results. More is to come, as I plan to add a Projects page at the very least, and maybe a Tech page where I put the hardware and software I use and recommend. I also have some thoughts on things I'd like to look different in the theme as well.

Thanks for checking out my page!
