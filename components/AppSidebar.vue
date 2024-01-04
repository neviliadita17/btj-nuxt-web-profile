<!-- components/AppSidebar.vue -->
<template>
    <aside class="bg-secondary-50 text-white w-64 ">
      <div class="flex items-center justify-center h-16 bg-primary">
        <h1 class="text-2xl font-semibold">Admin Panel</h1>
      </div>
      <nav class="mt-4">
        <ul>
            <li>
            <nuxt-link to="/admin" class="flex items-center p-4 hover:bg-gray-700">
                <svg
                class="h-6 w-6 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <!-- Ganti dengan icon yang sesuai dengan Dashboard -->
                <!-- Contoh: <path d="M12 3l-9 18h18z" /> -->
                </svg>
                Dashboard
            </nuxt-link>
            </li>
            <li>
            <nuxt-link to="/admin/about-me" class="flex items-center p-4 hover:bg-gray-700">
                <svg
                class="h-6 w-6 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <!-- Ganti dengan icon yang sesuai dengan About Me -->
                <!-- Contoh: <circle cx="12" cy="12" r="10" /> -->
                </svg>
                About Me
            </nuxt-link>
            </li>
            <li>
            <nuxt-link to="/admin/edu-work" class="flex items-center p-4 hover:bg-gray-700">
                <svg
                class="h-6 w-6 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <!-- Ganti dengan icon yang sesuai dengan Eduwork -->
                <!-- Contoh: <rect width="20" height="14" rx="2" ry="2" /> -->
                </svg>
                Eduwork
            </nuxt-link>
            </li>
            <li>
            <nuxt-link to="/admin/motto" class="flex items-center p-4 hover:bg-gray-700">
                <svg
                class="h-6 w-6 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <!-- Ganti dengan icon yang sesuai dengan Motto -->
                <!-- Contoh: <path d="M12 3l-9 18h18z" /> -->
                </svg>
                Motto
            </nuxt-link>
            </li>
            <li>
            <nuxt-link to="/login" class="flex items-center p-4 hover:bg-gray-700">
                <svg
                class="h-6 w-6 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <!-- Ganti dengan icon yang sesuai dengan Logout -->
                <!-- Contoh: <path d="M15 7H5v10h10V7zm-2 8H7v-6h6v6z" /> -->
                </svg>
                Logout
            </nuxt-link>
            </li>
        </ul>
</nav>

    </aside>
  </template>
  
  <script>
  export default {
    name: 'AppSidebar',
    methods: {
      logout() {
        // Logika logout di sini (bisa menggunakan Vuex atau method lainnya)
        // Contoh: Hapus token, kosongkan data pengguna, dll.
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for the sidebar */
  </style>
  