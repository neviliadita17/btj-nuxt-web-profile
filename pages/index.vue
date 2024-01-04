<template>
  <div class="flex flex-col justify-center bg-white rounded-xl w-full">
    <!-- Bio Section -->
    <section class="relative">
      <div class="grid grid-cols-1 md:grid-cols-2 w-full bg-cover bg-center"  style="background: linear-gradient(317deg, rgb(255,114,92) 36%, rgb(55,90,100) 36%);">
        
        <!-- Bagian Kiri (Foto Profil) -->
        <div class="md:flex md:items-center">
          <div class="profile-picture relative overflow-hidden mx-auto" @click="zoomImage()">
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 border rounded-[50px] mt-5 w-4/5 h-3/5 bg-white z-1"></div>
            <img id="photo" src="assets/img/foto__1___1_-removebg-preview.png" class="relative object-cover bottom-5 md:right-[35px] md:bottom-[0] w-80 h-auto rounded-[50px] mx-auto" alt="Profile Image" style="z-index: 2;">
          </div>
        </div>
          
        <!-- Bagian Kanan (Informasi Profil) -->
        <div class="md:flex md:items-center p-5">
          <div class="card relative balloon-card p-7 rounded-xl shadow-md bg-white">
            <h2 class="text-2xl text-primary font-semibold">Hello Everyone, I'm Nevi</h2>
            <p class="text-muted">Focus on Front End Developer @BTJ Academy</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="p-4">
      <div class="container mx-auto">
        <div class="text-center p-5">
          <h3 class="text-2xl font-semibold mb-3 text-primary">About Me</h3>
          <p class="text-md mb-5 text-muted">Excited about music and traveling. The desire to explore, appreciate beauty, and seek happiness drives my interest in music and traveling.</p>
        </div>
        
        <!-- Get in touch -->
<div class="text-center">
  <h4 class="text-lg font-medium text-secondary text-center">Get In Touch</h4>
  <div class="text-center">
    <!-- Tautan ke halaman LinkedIn dengan ikon dari Boxicons -->
    <a href="https://www.linkedin.com/in/neviliadita/" target="_blank" class="text-2xl text-secondary hover:text-secondary-50 transition">
      <i class="bx bxl-linkedin-square"></i>
    </a>

    <!-- Tautan email dengan ikon dari Boxicons -->
    <a href="mailto:neviliadita1@gmail.com" class="text-2xl text-secondary hover:text-secondary-50 transition">
      <i class="bx bxs-envelope"></i>
    </a>
  </div>
</div>

      </div>
      
      <!-- Portofolio -->
      <div class="mt-5 text-center">
        <h4 class="text-lg font-medium text-secondary text-center">- I also have experience in several fields such as - </h4>
        <div class="flex flex-wrap justify-around p-3">
          <div v-for="(item, index) in portfolioItems" :key="index" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div class="card border rounded-md p-3 md:flex flex-col h-full">
              <div class="card-body text-center flex flex-col items-center justify-center md:flex">
                <i :class="item.iconClass"></i>
                <h5 class="card-title text-2xl text-secondary font-medium mt-4">{{ item.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Edu-Work Section -->
    <section class="p-4">
      <div class="container mx-auto">
        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-3 text-primary text-center">Edu-Work Experience</h3>
          <div class="text-center">
            <div class="flex mt-4 mx-5">
              <!-- Kolom Pendidikan (Education) -->
              <div class="w-full">
                <h5 class="text-xl text-center text-secondary">Education</h5>
                <div v-for="(item, index) in educationItems" :key="index">
                  <div class="w-full border-b border-gray-200">
                    <button @click="toggleAccordion('education', index)" class="accordion-button flex justify-between items-center w-full text-left h4-text-color focus:outline-none py-2 px-4">
                      <span>{{ item.title }}</span>
                      <i :class="{'bx bx-chevron-down text-primary text-xl': !item.isOpen, 'bx bx-chevron-up text-primary text-xl': item.isOpen}"></i>
                    </button>
                  </div>
                  <div v-if="item.isOpen" class="text-start text-muted px-8 mt-3">
                    {{ item.content }}
                  </div>
                </div>
              </div>
              
              <!-- Kolom Pekerjaan (Work) -->
              <div class="w-full">
                <h5 class="text-xl text-center text-secondary">Work Experience</h5>
                <div v-for="(item, index) in workItems" :key="index">
                  <div class="border-b border-gray-200">
                    <button @click="toggleAccordion('work', index)" class="accordion-button flex justify-between items-center w-full text-left h4-text-color focus:outline-none py-2 px-4">
                      <span>{{ item.title }}</span>
                      <i :class="{'bx bx-chevron-down text-primary text-xl': !item.isOpen, 'bx bx-chevron-up text-primary text-xl': item.isOpen}"></i>
                    </button>
                  </div>
                  <div v-if="item.isOpen" class="text-start text-muted px-8 mt-3">
                    {{ item.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Motto Section -->
    <section class="p-4">
      <div class="container mx-auto ">
        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-3 text-primary text-center">My Motto?</h3>
          <p class="text-md mb-5 text-muted">"Do what you love because there are so many reasons to be happy."</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
        educationItems: [
            { title: "Bachelor's Degree", content: "Information Engineering - Kun Shan University, Taiwan (2021 - 2023)", isOpen: false },
            { title: "Associate's Degree", content: "Information System - Brawijaya University (2018 - 2021)", isOpen: false }
        ],
        workItems: [
            { title: "Internship", content: "Front End Developer Internship @Profile Image Studio, Malang", isOpen: false },
            { title: "Assistant Laboratorium", content: "Being a laboratory assistant manager to manage laboratory networks @Kun Shan University's IE Laboratory", isOpen: false }
        ],
        portfolioItems: [
            { title: "UI/UX", iconClass: 'bx bxl-figma text-5xl text-primary' },
            { title: "Front End", iconClass: 'bx bx-code-block text-5xl text-primary' },
            { title: "Machine Learning", iconClass: 'bx bxl-python text-5xl text-primary' }
        ]
        };
    },
    methods: {
        toggleAccordion(category, index) {
        const items = category === 'education' ? this.educationItems : this.workItems;
        items[index].isOpen = !items[index].isOpen;
        }
    }
}
</script>

<style scoped>
/* Your page-specific styles go here */
</style>


