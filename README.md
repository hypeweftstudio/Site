# Hypeweft Studio

A static video portfolio built for GitHub Pages. It uses plain HTML, CSS, and JavaScript, with GSAP loaded from a CDN for scroll and intro animation.

## Publish on GitHub Pages

1. Add the project files and video assets to a GitHub repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for the Pages deployment to finish and open its published URL.

## Update the portfolio

All 18 MP4 files already in the project folder and the newly supplied Hypeweft reel are included in the portfolio. Web-ready H.264 copies are in `assets/videos/`, with lightweight poster frames in `assets/posters/`. The supplied reel also plays as the muted, looping hero background. Original MP4 exports stay in the workspace and are excluded from Git by `.gitignore`.

To add work, place an optimized MP4 or WebM in `assets/videos/`, create a poster image in `assets/posters/`, and add a project object near the top of `app.js`:

```js
{ title: "Project title", client: "Client / description", kind: "BRAND FILM",
  year: "2026", poster: "assets/posters/new-film.jpg",
  video: "assets/videos/new-film.mp4" }
```

GitHub Pages is static, so new videos are added to the repository and the project list; there is no upload form on the live site. The contact link is `hypeweft@gmail.com`.

## Video size

The 19 optimized clips total about 77 MB. The original exports remain available locally but are not published. GitHub Pages permits published sites up to 1 GB, so there is room for future videos; keep adding compressed copies under `assets/videos/`. Project videos load only when a visitor opens a card; the short hero clip autoplays muted and loops.

See [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) and [GitHub's large-file guidance](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).

