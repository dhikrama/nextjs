<template>
    <div class="bg-gray-50 py-16 min-h-screen">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Tentang MauNguli</h1>
          <p class="text-gray-600">
            MauNguli adalah solusi terbaik untuk memenuhi semua kebutuhan konstruksi Anda. Kami menyediakan layanan tukang bangunan profesional yang andal dan efisien.
          </p>
        </div>
  
        <!-- Misi dan Visi -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <!-- Misi -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-2xl font-bold text-purple-600 mb-4">Misi Kami</h2>
            <p class="text-gray-600">
              Memberikan layanan konstruksi yang berkualitas tinggi dengan memanfaatkan tenaga ahli profesional, alat modern, dan teknologi terbaru untuk memenuhi kebutuhan pelanggan.
            </p>
          </div>
          <!-- Visi -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-2xl font-bold text-purple-600 mb-4">Visi Kami</h2>
            <p class="text-gray-600">
              Menjadi platform terpercaya di Indonesia untuk menyediakan layanan tukang bangunan berkualitas yang mampu membangun impian pelanggan menjadi kenyataan.
            </p>
          </div>
        </div>
  
        <!-- Keunggulan -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Mengapa Memilih MauNguli?</h2>
          <p class="text-gray-600">
            Kami menawarkan keunggulan kompetitif yang membuat kami berbeda dari yang lain.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Keunggulan 1 -->
          <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <font-awesome-icon :icon="['fas', 'tools']" class="text-purple-600 text-4xl mb-4" />
            <h3 class="text-lg font-semibold text-gray-800">Tenaga Ahli Profesional</h3>
            <p class="text-gray-600">
              Tukang bangunan kami memiliki pengalaman luas dan keahlian dalam berbagai jenis proyek konstruksi.
            </p>
          </div>
          <!-- Keunggulan 2 -->
          <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <font-awesome-icon :icon="['fas', 'clock']" class="text-purple-600 text-4xl mb-4" />
            <h3 class="text-lg font-semibold text-gray-800">Pekerjaan Tepat Waktu</h3>
            <p class="text-gray-600">
              Kami memahami pentingnya waktu dan selalu menyelesaikan proyek sesuai jadwal yang disepakati.
            </p>
          </div>
          <!-- Keunggulan 3 -->
          <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <font-awesome-icon :icon="['fas', 'thumbs-up']" class="text-purple-600 text-4xl mb-4" />
            <h3 class="text-lg font-semibold text-gray-800">Kepuasan Pelanggan</h3>
            <p class="text-gray-600">
              Kami berdedikasi untuk memberikan hasil terbaik dengan fokus pada kebutuhan pelanggan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    components: {},
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya jika diperlukan */
  </style>
  