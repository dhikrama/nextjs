<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">
          <!-- Logo & Deskripsi -->
          <div class="mb-4 sm:mb-0">
            <h2 class="text-2xl font-bold text-purple-500">MauNguli</h2>
            <p class="text-gray-400 mt-2">
              Solusi terpercaya untuk semua kebutuhan konstruksi Anda.
            </p>
          </div>
  
          <!-- Navigasi -->
          <div class="flex gap-6">
            <a href="/" class="text-gray-400 hover:text-white transition">Beranda</a>
            <a href="/about" class="text-gray-400 hover:text-white transition">Tentang Kami</a>
            <a href="/services" class="text-gray-400 hover:text-white transition">Layanan</a>
            <a href="/contact" class="text-gray-400 hover:text-white transition">Kontak</a>
          </div>
        </div>
  
        <!-- Garis Pembatas -->
        <div class="my-6 border-t border-gray-700"></div>
  
        <!-- Hak Cipta -->
        <div class="text-center text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} MauNguli. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  