// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'boxicons/css/boxicons.min.css', 
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // router: {
  //   base: '/',
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'index',
  //       path: '/',
  //       component: resolve(__dirname, 'pages/index.vue'),
  //     });
  //   },
  // },
  // router: {
  //   linkActiveClass: 'active',
  //   extendRoutes(routes, resolve) {
  //     routes.push(
  //       {
  //         path: '/admin/about-me',
  //         component: resolve(__dirname, 'pages/admin/about-me.vue'),
  //       },
  //       {
  //         path: '/admin/edu-work',
  //         component: resolve(__dirname, 'pages/admin/edu-work.vue'),
  //       },
  //       {
  //         path: '/admin/motto',
  //         component: resolve(__dirname, 'pages/admin/motto.vue'),
  //       }
  //     );
  //   },
  // },
})