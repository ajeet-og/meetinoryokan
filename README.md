# Meeti No Ryokan — Static Site

Plain HTML / CSS / JS. No build step.

## Deploy on Netlify

1. Push this repo (or drag-drop the `public/` folder into Netlify).
2. `netlify.toml` already sets `publish = "public"` — no build command required.
3. Custom domain & HTTPS via Netlify dashboard.

The contact form uses **Netlify Forms** (the `data-netlify="true"` attribute on the `<form>`). Submissions show up in your Netlify dashboard.

## Structure

```
public/
  index.html      ← single-page site
  styles.css      ← all styles (custom CSS, no framework)
  script.js       ← i18n, hero slider, gallery lightbox, testimonials, music
  assets/         ← images & audio
  robots.txt
  sitemap.xml
netlify.toml      ← Netlify config (publish dir + caching headers)
```

## Editing content

- Text: edit `public/index.html` (Japanese strings) and mirror in `public/script.js` `dict` for English.
- Images: drop new files into `public/assets/` and update the `<img src>` paths.
- Music: replace `public/assets/raga.mp3`.
