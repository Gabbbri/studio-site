# Studio site

Sito Astro dello studio web. Il branch `redesign/web-studio-v2` contiene la direzione approvata, separata dall'attività software.

## Sviluppo

```sh
npm install
npm run dev
```

Il sito è disponibile su `http://localhost:4321/`.

## Struttura

- `src/pages/index.astro`: composizione della homepage e metadati SEO
- `src/components/HomePage.astro`: contenuti della homepage
- `src/components/ProjectCard.astro`: card dei progetti e concept
- `src/layouts/SiteLayout.astro`: struttura HTML, font e metadati
- `src/styles/`: stile della homepage in tre livelli

## Verifica e deployment

```sh
npm run build
npm run build:pages
```

`build:pages` prepara i percorsi per GitHub Pages sotto `/studio-site`.
