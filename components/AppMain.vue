<template>
    <div class="flex justify-center items-center p-8 min-h-screen" style="background: linear-gradient(317deg, rgb(255,114,92) 36%, rgb(55,90,100) 36%);">
          <!-- Form and Image Section Container -->
          <div class="flex flex-col justify-center items-center bg-white rounded-xl w-full">
            <slot></slot>
          </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppMain'
  };
  </script>
  