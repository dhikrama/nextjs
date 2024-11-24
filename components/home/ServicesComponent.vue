<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Layanan Kami</h2>
      <p class="text-gray-600 mb-12">
        Layanan profesional kami mencakup berbagai jenis pekerjaan konstruksi yang dapat disesuaikan dengan kebutuhan Anda.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Layanan 1 -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <font-awesome-icon :icon="['fas', 'hammer']" class="text-purple-600 text-4xl mb-4" />
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Pekerjaan Konstruksi Umum</h3>
          <p class="text-gray-600">Kami menangani berbagai jenis proyek konstruksi mulai dari rumah tinggal hingga gedung besar.</p>
        </div>
        <!-- Layanan 2 -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <font-awesome-icon :icon="['fas', 'paint-roller']" class="text-purple-600 text-4xl mb-4" />
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Pengecatan dan Finishing</h3>
          <p class="text-gray-600">Memberikan hasil pengecatan yang rapi dan finishing yang detail untuk memberikan kesan estetika pada bangunan.</p>
        </div>
        <!-- Layanan 3 -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <font-awesome-icon :icon="['fas', 'tools']" class="text-purple-600 text-4xl mb-4" />
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Perbaikan Bangunan</h3>
          <p class="text-gray-600">Kami juga menyediakan layanan perbaikan bangunan yang rusak atau membutuhkan renovasi.</p>
        </div>
      </div>
    </div>
  </section>
</template>
