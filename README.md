# Nuxt 3 Minimal Starter
    btj-nuxt-web-profile1/
    |-- assets/
    |   |-- css/
    |       |-- main.css
    |   |-- img/
    |       |-- 6333043.jpg
    |       |-- bg-about-me.png
    |       |-- foto__1___1_-removebg-preview.png
    |-- components/
    |   |-- AppHeader.vue
    |   |-- AppFooter.vue
    |   |-- AppSidebar.vue
    |   |-- AppMain.vue
    |-- layouts/
    |   |-- default.vue
    |   |-- AdminLayout.vue
    |-- pages/
    |   |-- admin/
    |       |-- index.vue
    |       |-- about-me.vue
    |       |-- edu-work.vue
    |       |-- motto.vue
    |   |-- index.vue
    |   |-- login.vue
    |   |-- public/
    |       |-- bg-about-me.png
    |-- tailwind.config.js
    |-- nuxt.config.js

Untuk login bisa menggunakan apa saja selama memenuhi Validasi Username (tidak boleh kosong) dan Password (Harus 3 karakter dengan uppercase, lowercase, dan number)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
