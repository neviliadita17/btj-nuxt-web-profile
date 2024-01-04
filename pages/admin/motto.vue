<!-- components/Motto.vue -->
<template>
    <div class="w-full">
      <div class="flex">
        <Sidebar />
        <div class="flex-1 p-4">
          <div class="bg-white rounded-md shadow-md p-6">
            <h1 class="text-2xl font-semibold mb-4">Motto</h1>
  
            <!-- Form for Adding or Updating Motto -->
            <form @submit.prevent="submitForm" class="mb-4">
              <div class="mb-4">
                <label for="motto" class="block text-sm font-medium text-gray-700">Motto:</label>
                <input v-model="motto" type="text" id="motto" name="motto" class="mt-1 p-2 w-full border rounded-md">
              </div>
              <div class="flex items-center">
                <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Save</button>
              </div>
            </form>
  
            <!-- Display Motto List -->
            <div>
              <h2 class="text-xl font-semibold mb-2">Motto List</h2>
              <ul>
                <li v-for="(mottoItem, index) in mottoData" :key="index" class="mb-2 bg-gray-100 p-3 rounded-md">
                  <span class="text-lg font-semibold">{{ mottoItem.motto }}</span>
                  <button @click="deleteMotto(index)" class="ml-2 text-red-500">Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '~/components/AppSidebar.vue';
  
  export default {
    components: {
      Sidebar,
    },
    data() {
      return {
        motto: '',
        mottoData: [
          { motto: 'Do what you love because there are so many reasons to be happy' },
          { motto: 'Life is a journey, not a destination' },
          { motto: 'Be the change you want to see in the world' },
        ],
      };
    },
    methods: {
      submitForm() {
        if (this.motto.trim() !== '') {
          // Add or Update Motto
          // For simplicity, we are assuming each motto is unique, and we are not handling duplicate mottos.
          const existingMottoIndex = this.mottoData.findIndex(item => item.motto === this.motto);
          if (existingMottoIndex !== -1) {
            // Update existing motto
            this.mottoData[existingMottoIndex].motto = this.motto;
          } else {
            // Add new motto
            this.mottoData.push({ motto: this.motto });
          }
  
          // Clear the input field after adding or updating
          this.motto = '';
        }
      },
      deleteMotto(index) {
        // Delete Motto
        this.mottoData.splice(index, 1);
      },
    },
  };
  </script>
  