<!-- layouts/default.vue -->
<template>
    <div>
        <AppMain>
            <AppHeader />
            <NuxtPage />
            <AppFooter />
        </AppMain>
    </div>
  </template>
  
  <script>
  import Header from '~/components/AppHeader.vue'
  import Footer from '~/components/AppFooter.vue'
  
  export default {
    components: {
      Header,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Your layout styles go here */
  </style>
  