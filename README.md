# XGH-OS

**eXtreme Go Horse | OutSystems Edition** — manifesto satírico em 13 axiomas sobre desenvolvimento OutSystems à pressa. Inspirado no [eXtreme Go Horse (XGH) original](https://gohorse.com.br/extreme-go-horse-xgh.html), dedicado ao ecossistema OutSystems (Service Studio, TrueChange, AI Mentor, Forge, LifeTime, ODC, Aurora).

Site brutalist single-page bilingue (PT/EN), construído em [Astro](https://astro.build/) e deployed via GitHub Pages.

> Live: <https://redeagle48.github.io/XGH-OutSystems/>

---

## Desenvolver localmente

Precisas de Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abre <http://localhost:4321/XGH-OutSystems/>.

## Onde editar o conteúdo

| Ficheiro | O que tem |
|---|---|
| `src/i18n/ui.ts` | Todos os textos (PT/EN): axiomas, hero, níveis, footer, print, about |
| `src/components/Hero.astro` | Markup do hero (wordmark XGH/-OS) e ticker random |
| `src/components/Manifesto.astro` | Renderização dos axiomas |
| `src/components/Levels.astro` | Níveis de certificação |
| `src/components/Submit.astro` | CTA para submeter axiomas |
| `src/components/Footer.astro` | Rodapé |
| `src/pages/index.astro` & `src/pages/en/index.astro` | Pages PT e EN |
| `src/pages/about.astro` & `en/about.astro` | About / Disclaimer Legal |
| `src/pages/print.astro` & `en/print.astro` | Versão poster A3 imprimível |
| `src/layouts/Layout.astro` | Head, JSON-LD, hreflang, language detection |
| `src/styles/global.css` | Design system (Anton + JetBrains Mono + DM Serif) |
| `public/llms.txt` & `llms-full.txt` | AEO — markdown optimizado para LLMs |
| `.github/ISSUE_TEMPLATE/new-axiom.yml` | Template do issue de submissão |

## Deploy

Push para `main` → GitHub Action (`.github/workflows/deploy.yml`) faz build e publica automaticamente em GitHub Pages.

Para activar Cloudflare Web Analytics: cria a variable `CF_BEACON_TOKEN` em **repo → Settings → Secrets and variables → Actions → Variables**. O workflow já lê `vars.CF_BEACON_TOKEN` e injecta-o no build.

## Configuração

`astro.config.mjs`:

```js
site: 'https://redeagle48.github.io',
base: '/XGH-OutSystems',
i18n: { defaultLocale: 'pt', locales: ['pt', 'en'] }
```

## Stack

- **Astro 6** — gerador estático, zero JS por defeito
- **`@astrojs/sitemap`** — sitemap.xml com hreflang i18n
- **Anton** (display) + **JetBrains Mono** (body) + **DM Serif Display** (acentos serif italic)
- **Cloudflare Web Analytics** (opcional, sem cookies, sem banner RGPD)
- Sem framework UI, sem Tailwind, sem build pesado.

## Estrutura

```
.
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── llms.txt
│   ├── llms-full.txt
│   └── robots.txt
├── src/
│   ├── components/
│   ├── i18n/ui.ts
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── index.astro            ← PT manifesto
│   │   ├── about.astro            ← PT about & legal
│   │   ├── print.astro            ← PT poster A3
│   │   └── en/
│   │       ├── index.astro
│   │       ├── about.astro
│   │       └── print.astro
│   └── styles/global.css
└── .github/
    ├── ISSUE_TEMPLATE/new-axiom.yml
    └── workflows/deploy.yml
```

## Disclaimer

Sátira. Não é endossado pela OutSystems S.A. Ver [/about/](https://redeagle48.github.io/XGH-OutSystems/about/) para o disclaimer legal completo, marcas registadas e canal de takedown.
