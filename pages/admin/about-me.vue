<!-- components/AboutMe.vue -->
<template>
  <div class="w-full">
    <div class="flex">
      <Sidebar />
      <div class="flex-1 p-4">
        <div class="bg-white rounded-md shadow-md p-6">
          <h1 class="text-2xl font-semibold mb-4">About Me</h1>

          <!-- Form for About Me Information -->
          <form @submit.prevent="submitForm" class="mb-4">
            <div class="mb-4">
              <label for="profileImage" class="block text-sm font-medium text-gray-700">Profile Image:</label>
              <input type="file" id="profileImage" name="profileImage" @change="handleImageChange" accept="image/*" class="mt-1 p-2 w-full border rounded-md">
              <img v-if="profileImagePreview" :src="profileImagePreview" alt="Profile Image" class="mt-2 w-24 h-24 object-cover rounded-md">
            </div>
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
              <input v-model="name" type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div class="mb-4">
              <label for="job" class="block text-sm font-medium text-gray-700">Job:</label>
              <input v-model="job" type="text" id="job" name="job" class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div class="mb-4">
              <label for="description" class="block text-sm font-medium text-gray-700">About Me:</label>
              <textarea v-model="description" id="description" name="description" rows="4" class="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>
            <div class="mb-4">
              <label for="socialMedia" class="block text-sm font-medium text-gray-700">Social Media:</label>
              <div class="flex flex-col items-start">
                <div v-for="(account, index) in socialMediaAccounts" :key="index" class="flex items-center mb-2">
                  <select v-model="account.platform" class="p-2 border rounded-md mr-2">
                    <option value="" disabled>Select Social Media</option>
                    <option v-for="(accountOption, platform) in socialMediaOptions" :key="platform" :value="platform">{{ accountOption }}</option>
                  </select>
                  <input v-model="account.username" type="text" class="p-2 border rounded-md" placeholder="Username">
                  <button @click="removeSocialMediaAccount(index)" type="button" class="ml-2 text-red-500">Remove</button>
                </div>
                <button @click="addSocialMediaAccount" type="button" class="bg-blue-500 text-white p-2 rounded-md">Add Social Media</button>
              </div>
            </div>
            <div class="mb-4">
              <label for="experience" class="block text-sm font-medium text-gray-700">Experience:</label>
              <textarea v-model="experience" id="experience" name="experience" rows="4" class="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>
            <div class="flex items-center">
              <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">{{ isEditing ? 'Update' : 'Save' }}</button>
            </div>
          </form>

          <!-- Display About Me Information -->
          <div>
            <h2 class="text-xl font-semibold mb-2">About Me Information</h2>
            <div class="mb-2">
              <strong>Name:</strong> {{ currentData.name }}
            </div>
            <div class="mb-2">
              <strong>Job:</strong> {{ currentData.job }}
            </div>
            <div class="mb-2">
              <strong>About Me:</strong> {{ currentData.description }}
            </div>
            <div class="mb-2">
              <strong>Social Media:</strong>
              <ul>
                <li v-for="(account, index) in currentData.socialMediaAccounts" :key="index">
                  {{ account.platform }} - {{ account.username }}
                </li>
              </ul>
            </div>
            <div class="mb-2">
              <strong>Experience:</strong> {{ currentData.experience }}
            </div>
            <div class="mb-2">
              <strong>Profile Image:</strong>
              <img v-if="currentData.profileImage" :src="currentData.profileImage" alt="Profile Image" class="mt-2 w-24 h-24 object-cover rounded-md">
            </div>
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
      profileImage: null,
      profileImagePreview: null,
      name: '',
      job: '',
      description: '',
      socialMediaAccounts: [
        // Example initial social media account
        { platform: '', username: '' },
      ],
      experience: '',
      isEditing: false,
      currentData: {
        name: 'Nevi',
        job: 'Front End Developer',
        description: 'Excited about music and traveling. The desire to explore, appreciate beauty, and seek happiness drives my interest in music and traveling.',
        socialMediaAccounts: [
          { platform: 'Twitter', username: '@username' },
          { platform: 'LinkedIn', username: 'www.linkedin.com/in/neviliadita' },
        ],
        experience: 'Worked on various projects using different technologies.',
        profileImage: '~/assets/img/foto__1___1_-removebg-preview.png',
      },
      socialMediaOptions: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn', 'Other'],
    };
  },
  methods: {
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profileImage = file;
        this.previewImage();
      }
    },
    previewImage() {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImagePreview = reader.result;
      };
      reader.readAsDataURL(this.profileImage);
    },
    submitForm() {
      // Handle profile image upload or save logic here
      console.log('Profile Image:', this.profileImage);
      console.log('Name:', this.name);
      console.log('Job:', this.job);
      console.log('About Me:', this.description);
      console.log('Social Media Accounts:', this.socialMediaAccounts);
      console.log('Experience:', this.experience);

      this.resetForm();
    },
    resetForm() {
      this.profileImage = null;
      this.profileImagePreview = null;
      this.name = '';
      this.job = '';
      this.description = '';
      this.socialMediaAccounts = [{ platform: '', username: '' }];
      this.experience = '';
      this.isEditing = false;
    },
    addSocialMediaAccount() {
      this.socialMediaAccounts.push({ platform: '', username: '' });
    },
    removeSocialMediaAccount(index) {
      this.socialMediaAccounts.splice(index, 1);
    },
  },
  mounted() {
    this.name = this.currentData.name;
    this.job = this.currentData.job;
    this.description = this.currentData.description;
    this.socialMediaAccounts = [...this.currentData.socialMediaAccounts];
    this.experience = this.currentData.experience;
  },
};
</script>
