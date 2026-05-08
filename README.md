# OUTHORSE

Site brutalist single-page no estilo *manifesto*, pronto para hospedares no GitHub Pages.
Construído em [Astro](https://astro.build/). O conteúdo está em **placeholder** (`Lorem ipsum`) — só substituis pelo teu.

---

## 1. Instalar localmente

Precisas de Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abre <http://localhost:4321/outhorse/>.

## 2. Onde editar o conteúdo

Os textos estão concentrados nos componentes. Mexe só nestes ficheiros:

| Ficheiro | O que tem lá |
|---|---|
| `src/components/Hero.astro` | título, subtítulo, carimbo |
| `src/components/Marquee.astro` | a frase que passa em loop |
| `src/components/Manifesto.astro` | array `axioms` — os mandamentos numerados |
| `src/components/Levels.astro` | array `levels` — os níveis de certificação |
| `src/components/Footer.astro` | rodapé |
| `src/layouts/Layout.astro` | `<title>` e meta description (SEO) |

A paleta de cores e tipografias estão em `src/styles/global.css`, no bloco `:root`.

## 3. Publicar no GitHub Pages

### Passo 1 — Ajusta `astro.config.mjs`

Abre o ficheiro e edita estas duas linhas:

```js
site: 'https://SEU-USUARIO.github.io',
base: '/NOME-DO-REPO',
```

> Se nomeares o repo como `seu-usuario.github.io`, define `base: '/'`.

### Passo 2 — Cria o repo e faz push

```bash
git init
git add .
git commit -m "outhorse: primeira versão"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

### Passo 3 — Ativa o GitHub Pages

No repositório, vai a **Settings → Pages** e em **Source** escolhe **GitHub Actions**.

O workflow `.github/workflows/deploy.yml` já está configurado: a cada push para `main`, o site faz build e publica automaticamente. Demora 1-2 minutos.

O site fica em: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`

---

## Estrutura

```
.
├── astro.config.mjs           ← config do site/base
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/            ← onde está o conteúdo
│   ├── layouts/Layout.astro
│   ├── pages/index.astro      ← monta a página
│   └── styles/global.css      ← design system (cores, fontes)
└── .github/workflows/deploy.yml
```

## Stack

- **Astro 4** — gerador estático, zero JS por padrão
- **Google Fonts** — Anton (display), JetBrains Mono (body), DM Serif Display (acentos)
- **Sem framework UI**, sem Tailwind, sem build pesado. Só HTML/CSS.

Bom *deploy*.
