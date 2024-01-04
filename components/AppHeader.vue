<template>
    <header v-if="!isLoginPage" class="bg-white text-white p-4 flex justify-between items-center w-full rounded-xl">
      <!-- Logo and Welcome Text -->
      <div class="flex items-center mx-3">
        <img
          id="logoImage"
          :class="{ 'rotate-360': logoClicked }"
          src="assets/img/6333043.jpg"
          alt="Logo"
          class="w-20 cursor-pointer transition-transform duration-500 ease-in-out"
          @click="rotateLogo"
        />
        <span class="text-2xl font-semibold text-primary">Welcome</span>
      </div>
  
      <!-- Responsive Toggle Menu (Hidden by default) -->
      <div class="lg:hidden mx-3 relative z-10">
        <button id="toggleBtn" class="text-primary focus:outline-none" @click="toggleMobileNav">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6h10M4 12h16m-16 6h16"></path>
          </svg>
        </button>
        <!-- Navigation Menu (Initially hidden on small screens) -->
        <nav v-if="isMobileNavVisible" class="absolute bg-white mt-2 p-2 rounded-lg right-0 w-40 text-center shadow-md">
          <NuxtLink to="/login" class="block text-primary hover:text-secondary active:font-semibold">Login</NuxtLink>
        </nav>
      </div>
  
      <!-- Navigation Menu (Visible on larger screens) -->
      <nav :class="{ 'hidden': isMobileNavVisible }" class="hidden lg:flex space-x-4 mx-3 z-3">
        <NuxtLink to="/login" @click="checkLoginAndRedirect" class="text-primary hover:text-secondary active:font-semibold">Login</NuxtLink>
      </nav>
    </header>
  </template>
  
<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        isMobileNavVisible: false,
        logoClicked: false,
      };
    },
    computed: {
    isLoginPage() {
        return this.$route.path === '/login'; // Check if the current route is the login page
        }
    },
    methods: {
      rotateLogo() {
        this.logoClicked = true;
        setTimeout(() => {
          this.logoClicked = false;
        }, 500); // Adjust the duration to match the transition duration in CSS
      },
      toggleMobileNav() {
        this.isMobileNavVisible = !this.isMobileNavVisible;
      },
      checkLoginAndRedirect() {
        // Implement your login check and redirect logic here
      },
    },
  };
</script>
  
<style scoped>
  .rotate-360 {
    transform: rotate(360deg);
  }
</style>
  