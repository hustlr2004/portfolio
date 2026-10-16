# Gourav Singh — Portfolio

This portfolio is a buildless static site. There is one source of truth:

- `index.html` contains the site structure, styling, content and interactions.
- `assets/` contains the profile image, project images, resume and soundtrack.

The previous partial React/Next implementation was removed because it duplicated content while omitting several sections from the deployed site.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Deployment

The production static repository is `hustlr2004/static-repo`. Publish `index.html` and `assets/` together so content and referenced media remain in sync.
