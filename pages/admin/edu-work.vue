<!-- components/EduWork.vue -->
<template>
    <div class="w-full">
      <div class="flex">
        <Sidebar />
        <div class="flex-1 p-4">
          <div class="bg-white rounded-md shadow-md p-6">
            <h1 class="text-2xl font-semibold mb-4">Edu Work</h1>
  
            <!-- Education Table -->
            <div>
              <h2 class="text-lg font-semibold mb-2">Education</h2>
              <table class="w-full min-w-full divide-y divide-gray-200">
                <thead class="bg-secondary text-white">
                  <tr>
                    <th class="py-3 px-4 text-left">Course</th>
                    <th class="py-3 px-4 text-left">Institution</th>
                    <th class="py-3 px-4 text-left">Degree</th>
                    <th class="py-3 px-4 text-left">Year</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <!-- Your education data loop goes here -->
                  <tr v-for="(eduItem, index) in educationData" :key="index">
                    <td class="py-2 px-4">{{ eduItem.course }}</td>
                    <td class="py-2 px-4">{{ eduItem.institution }}</td>
                    <td class="py-2 px-4">{{ eduItem.degree }}</td>
                    <td class="py-2 px-4">{{ eduItem.year }}</td>
                    <td class="py-2 px-4 text-right">
                      <button @click="editEducation(index)" class="text-blue-500">Edit</button>
                      <button @click="deleteEducation(index)" class="text-red-500 ml-2">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <!-- Button to Add Education -->
              <div class="mt-4">
                <button @click="addEducation" class="bg-blue-500 text-white p-2 rounded-md">Add Education</button>
              </div>
            </div>
  
            <!-- Work Table -->
            <div class="mt-8">
              <h2 class="text-lg font-semibold mb-2">Work</h2>
              <table class="w-full min-w-full divide-y divide-gray-200">
                <thead class="bg-secondary text-white">
                  <tr>
                    <th class="py-3 px-4 text-left">Position</th>
                    <th class="py-3 px-4 text-left">Company</th>
                    <th class="py-3 px-4 text-left">Year</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <!-- Your work data loop goes here -->
                  <tr v-for="(workItem, index) in workData" :key="index">
                    <td class="py-2 px-4">{{ workItem.position }}</td>
                    <td class="py-2 px-4">{{ workItem.company }}</td>
                    <td class="py-2 px-4">{{ workItem.year }}</td>
                    <td class="py-2 px-4 text-right">
                      <button @click="editWork(index)" class="text-blue-500">Edit</button>
                      <button @click="deleteWork(index)" class="text-red-500 ml-2">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <!-- Button to Add Work Experience -->
              <div class="mt-4">
                <button @click="addWork" class="bg-blue-500 text-white p-2 rounded-md">Add Work Experience</button>
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
        // Example data, replace it with your CMS data
        educationData: [
          { course: 'Information Engineering', institution: 'Kun Shan University', degree: 'Bachelor', year: 2023 },
          { course: 'Information System', institution: 'Brawijaya University', degree: 'Associate', year: 2021 },
          // Add more education rows as needed
        ],
        workData: [
          { position: 'Front End Developer', company: 'Profile Image Studio', year: 2020 },
          { position: 'Laboratory Assistant Manager', company: 'Kun Shan University IE Laboratory', year: 2023 },
          // Add more work rows as needed
        ],
      };
    },
    methods: {
      addEducation() {
        // Add logic to handle adding new education data
      },
      editEducation(index) {
        // Add logic to handle editing education data
      },
      deleteEducation(index) {
        // Add logic to handle deleting education data
      },
      addWork() {
        // Add logic to handle adding new work experience data
      },
      editWork(index) {
        // Add logic to handle editing work experience data
      },
      deleteWork(index) {
        // Add logic to handle deleting work experience data
      },
    },
  };
  </script>
  