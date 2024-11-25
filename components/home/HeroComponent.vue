<template>
  <section class="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white h-screen flex flex-col justify-center items-center text-center px-6 py-12">
    <!-- Background Images -->
    <div class="absolute inset-0">
      <!-- Desktop Image -->
      <NuxtImg
        v-if="!isMobile"
        src="https://cdn.jsdelivr.net/gh/dhikrama/images/hero_background_maunguli.webp"
        layout="fill"
        object-fit="cover"
        alt="Hero Background Desktop"
        class="z-0"
        sizes="(min-width: 1024px) 100vw"
        loading="lazy"
      />
      <!-- Mobile Image -->
      <NuxtImg
        v-else
        src="https://cdn.jsdelivr.net/gh/dhikrama/images/mobile-hero-background.webp"
        layout="fill"
        object-fit="cover"
        alt="Hero Background Mobile"
        class="z-0"
        sizes="(max-width: 768px) 100vw"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <h1 class="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-shadow-lg">
        Bangun Impian Anda Bersama MauNguli
      </h1>
      <p class="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-shadow-md">
        Kami memberikan layanan konstruksi berkualitas tinggi untuk proyek rumah, kantor, dan bangunan komersial. Percayakan pada kami untuk mewujudkan impian Anda dengan harga terjangkau dan tepat waktu.
      </p>
      <div>
        <button
          @click="goToContact"
          class="bg-white text-purple-800 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-purple-600 hover:text-white shadow-lg"
        >
          Hubungi Kami
        </button>
      </div>
      <!-- Scroll Icon -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const isMobile = ref(false);

    const checkViewport = () => {
      isMobile.value = window.innerWidth < 1024;
    };

    onMounted(() => {
      checkViewport();
      window.addEventListener('resize', checkViewport);
    });

    return {
      isMobile,
    };
  },
  methods: {
    goToContact() {
      this.$router.push('/contact'); // Mengarahkan ke halaman kontak
    },
  },
};
</script>

<style scoped>
.text-shadow-lg {
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
}
.text-shadow-md {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
