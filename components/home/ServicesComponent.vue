<template>
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-12">Layanan Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div class="mb-4">
                <font-awesome-icon :icon="['fas', 'toolbox']" class="text-blue-500 text-3xl" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Layanan 1</h3>
            <p class="text-gray-700">Deskripsi singkat tentang layanan pertama Anda. Menggunakan teknologi terbaru untuk solusi terbaik.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div class="mb-4">
                <font-awesome-icon :icon="['fas', 'hammer']" class="text-blue-500 text-3xl" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Layanan 2</h3>
            <p class="text-gray-700">Deskripsi singkat tentang layanan kedua Anda. Fokus pada mobilitas dan aksesibilitas.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div class="mb-4">
                <font-awesome-icon :icon="['fas', 'paint-roller']" class="text-blue-500 text-3xl" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Layanan 3</h3>
            <p class="text-gray-700">Deskripsi singkat tentang layanan ketiga Anda. Solusi global untuk masalah lokal.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Tidak perlu menggunakan export default di Nuxt 3
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>
  