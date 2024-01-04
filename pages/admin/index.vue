<!-- components/AdminDashboard.vue -->
<template>
  <div class="w-full">
    <div class="flex">
      <Sidebar />
      <div class="flex-1 p-4">
        <div class="bg-white rounded-md shadow-md p-6">
          <h1 class="text-3xl font-semibold mb-6">Admin Dashboard</h1>

          <!-- Statistics Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-primary p-4 rounded-md text-white">
              <h2 class="text-xl font-medium mb-2">Total Projects</h2>
              <p class="text-3xl font-medium">25</p>
            </div>
            <div class="bg-secondary p-4 rounded-md text-white">
              <h2 class="text-xl font-medium mb-2">Completed Projects</h2>
              <p class="text-3xl font-medium">20</p>
            </div>
            <div class="bg-secondary-50 p-4 rounded-md text-white">
              <h2 class="text-xl font-medium mb-2">Ongoing Projects</h2>
              <p class="text-3xl font-medium">5</p>
            </div>
            <div class="bg-muted p-4 rounded-md text-white">
              <h2 class="text-xl font-medium mb-2">Pending Projects</h2>
              <p class="text-3xl font-medium">2</p>
            </div>
          </div>


          <!-- Recent Projects Section -->
          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Recent Projects</h2>
            <ul>
              <li class="mb-2">
                <span class="text-gray-600">Completed project: Personal Portfolio Website.</span>
                <span class="text-gray-400 text-sm ml-2">2 weeks ago</span>
              </li>
              <li class="mb-2">
                <span class="text-gray-600">Ongoing project: E-commerce Website Redesign.</span>
                <span class="text-gray-400 text-sm ml-2">1 month ago</span>
              </li>
              <li class="mb-2">
                <span class="text-gray-600">Pending project: Mobile App Development.</span>
                <span class="text-gray-400 text-sm ml-2">3 months ago</span>
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
};
</script>
