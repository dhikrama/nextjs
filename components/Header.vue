<template>
  <header class="bg-gray-800 text-white shadow-md sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/">
            <NuxtImg
              src="https://cdn.jsdelivr.net/gh/dhikrama/images/logo-website-maunguli.webp"
              width="150"
              height="44"
              quality="100"
              alt="Kembali ke halaman utama"
              loading="lazy"
            />
          </a>
        </div>

        <!-- Hamburger menu for mobile -->
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none z-50" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Navbar items for desktop -->
        <div class="hidden lg:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="/" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Home</a>
            <a href="/about" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">About</a>
            <a href="/services" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Services</a>
            <a href="/contact" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Contact</a>
            <a href="https://blog.maunguli.com/" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg">Blog</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="lg:hidden absolute inset-x-0 top-16 bg-gray-800 text-white shadow-lg z-50 p-4">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base">Home</a>
        <a href="/about" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base">About</a>
        <a href="/services" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base">Services</a>
        <a href="/contact" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base">Contact</a>
        <a
          href="https://blog.maunguli.com/"
          class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
        >
          Blog
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Tambahkan transisi smooth jika diperlukan */
header {
  transition: all 0.3s ease-in-out;
}
</style>
