<template>
    <!-- Form and Image Section Container -->
    <div class="flex flex-col justify-center items-center bg-white rounded-xl max-w-screen-xl max-h-screen-xl my-12">

      <div class="flex flex-col lg:flex-row justify-center items-center mx-3">
        <!-- Form Section -->
        <div class="flex-1 p-4 sm:w-full lg:w-[50%] lg:mr-4">
          <div class="bg-white p-6 lg:p-10 rounded-lg shadow-md border">
            <div class="">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold mb-3">Welcome to Our Landing Page</h2>
              <p class="text-sm sm:text-base lg:text-lg text-muted mb-5">Please login to access other features.</p>
            </div>

            <form @submit.prevent="validateForm">
              <div class="mb-5">
                <label for="username" class="block text-gray-700 text-sm font-medium mb-2">Username</label>
                <input v-model="username" type="text" id="username" name="username" class="w-full border px-4 py-2 rounded-md" @input="validateUsername" @keydown="checkCapsLock">
                <div v-if="usernameError" class="text-red-500 text-sm">{{ usernameError }}</div>
              </div>
              <div class="mb-5">
                <label for="password" class="block text-gray-700 text-sm font-medium mb-2">Password</label>
                <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password" name="password" class="w-full border px-4 py-2 rounded-md" @input="validatePassword" @keydown="checkCapsLock">
                <div v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</div>
              </div>

              <span v-if="capsLockWarning" class="text-yellow-500 text-sm">Caps Lock is ON</span>

              <div class="flex items-center gap-2 mt-3 mb-5">
                <input type="checkbox" id="checkPassword" v-model="showPassword" class="">
                <label for="checkPassword" class="text-sm">Show Password</label>
              </div>

              <button
                :disabled="usernameError !== '' || passwordError !== '' || username === '' || password === ''"
                type="submit"
                class="w-full border border-secondary text-secondary px-4 py-2 rounded-md hover:bg-secondary hover:text-white"
                @click="login"
              >
                Login
              </button>

            </form>
          </div>
        </div>

        <!-- Image Section -->
        <div class="flex-1 mt-4 lg:mt-0 mx-3">
          <div class="bg-white p-3 rounded-xl">
            <div class="flex-col text-center">
              <img src="assets/img/6333043.jpg" alt="Image" class="w-full h-auto lg:w-80 mx-auto object-cover">
              <p class="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      capsLockWarning: false,
      showPassword: false,
    };
  },
  methods: {
    validateUsername() {
      const username = this.username.trim();

      if (username === "") {
        this.usernameError = "Field Username!";
      } else {
        this.usernameError = "";
      }
    },
    validatePassword() {
      const hasUppercase = /[A-Z]/.test(this.password);
      const hasLowercase = /[a-z]/.test(this.password);
      const hasNumber = /\d/.test(this.password);

      let passwordError = "";

      if (!hasUppercase) passwordError += " 1 Uppercase,";
      if (!hasLowercase) passwordError += " 1 Lowercase,";
      if (!hasNumber) passwordError += " 1 Number,";

      // Removing the trailing comma
      passwordError = passwordError.slice(0, -1);

      if (this.password === "") {
        this.passwordError = "Field Password!";
      } else if (this.password.length < 3 || passwordError !== "") {
        this.passwordError = "Password must be at least 3 characters with:" + passwordError;
      } else {
        this.passwordError = "";
      }
    },
    validateForm() {
      this.validateUsername();
      this.validatePassword();
    },
    checkCapsLock(event) {
      // Implement Caps Lock check logic here
      this.capsLockWarning = event.getModifierState('CapsLock');
    },
    login() {
      // Check if both username and password meet criteria
      if (this.username.trim() === "") {
        this.usernameError = "Field Username!";
      } else {
        this.usernameError = "";
      }

      if (this.password === "") {
        this.passwordError = "Field Password!";
      }

      if (this.usernameError === '' && this.passwordError === '') {
        // Navigate to the admin page (replace '/admin' with the actual route)
        this.$router.push('/admin');
      } else {
        // Handle invalid login attempt, if needed
        console.log('Invalid login attempt. Please check your credentials.');
      }
    },
  },
};
</script>


<style scoped>
/* Your page-specific styles go here */
</style>
