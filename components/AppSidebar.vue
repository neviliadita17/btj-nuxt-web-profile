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
            <i class='bx bx-home-alt text-2xl mr-2'></i>
            Dashboard
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/about-me" class="flex items-center p-4 hover:bg-gray-700">
            <i class='bx bx-user text-2xl mr-2'></i>
            About Me
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/edu-work" class="flex items-center p-4 hover:bg-gray-700">
            <i class='bx bx-book-open text-2xl mr-2'></i>
            Eduwork
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/motto" class="flex items-center p-4 hover:bg-gray-700">
            <i class='bx bx-message-alt text-2xl mr-2'></i>
            Motto
          </nuxt-link>
        </li>
        <li>
          <a href="#" class="flex items-center p-4 hover:bg-gray-700" @click="logout">
            <i class='bx bx-log-out text-2xl mr-2'></i>
            Logout
          </a>
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
