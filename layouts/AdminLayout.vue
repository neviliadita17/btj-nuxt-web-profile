<!-- AdminLayout.vue -->
<template>
    <div>
      <div class="flex">
        <AppSidebar />
        <main class="p-4 flex-1">
            <nuxt />
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import AppSidebar from '~/components/AppSidebar.vue'
  
  export default {
    components: {
      AppSidebar,
    },
  }
  </script>
  
  <style scoped>
  /* Custom styles for the admin layout */
  </style>
  