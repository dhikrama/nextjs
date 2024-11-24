<template>
    <header class="bg-gray-800 text-white">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <a href="/" class="text-lg font-semibold">Brand</a>
          <div class="hidden md:flex space-x-6">
            <a href="/" class="hover:text-gray-300">Home</a>
            <a href="/about" class="hover:text-gray-300">About</a>
            <a href="/services" class="hover:text-gray-300">Services</a>
            <a href="/contact" class="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>
  