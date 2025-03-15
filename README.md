# Tidal Telescope - Astro Blog

This is a blog website built with [Astro](https://astro.build), migrated from a Jekyll site.

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── scripts/
│   └── migrate-jekyll-posts.js
├── src/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   └── config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── BlogPost.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── blog/
│           ├── index.astro
│           └── [...slug].astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Blog posts are stored in the `src/content/blog/` directory as Markdown files.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Migrating from Jekyll

This project includes a script to help migrate blog posts from Jekyll to Astro. To use it:

1. Make sure your Jekyll site is in the `site/` directory at the root of the project
2. Run the migration script:

```bash
node scripts/migrate-jekyll-posts.js
```

The script will:
- Read Jekyll posts from the `site/_posts` directory
- Convert them to Astro content collection format
- Save them to `src/content/blog` directory

### Manual Adjustments

After running the migration script, you may need to make some manual adjustments:

1. Check the front matter of migrated posts to ensure all fields are correct
2. Update image paths if necessary
3. Fix any formatting issues in the content
4. Add or update tags as needed

## 🧠 Learning Astro

Check out the [Astro documentation](https://docs.astro.build) to learn more about building with Astro.

## 🚀 Deployment

This site is configured to be deployed to GitHub Pages. To deploy:

1. Update the `site` property in `astro.config.mjs` with your GitHub Pages URL
2. Run `npm run build` to build the site
3. Deploy the `dist` directory to GitHub Pages

You can also use other deployment options like Netlify, Vercel, or any static site hosting service.

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
