<template>
  <section
    class="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white h-screen flex flex-col justify-center items-center text-center px-6 py-12 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-b from-purple-800 via-transparent to-black opacity-70"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto">
      <h1 class="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-shadow-lg">
        Bangun Masa Depan Bersama <span class="text-yellow-300">MauNguli</span>
      </h1>
      <p class="text-lg sm:text-2xl mb-8 max-w-3xl mx-auto text-shadow-md">
        Transformasikan ide Anda menjadi kenyataan. Kami menyediakan layanan konstruksi terbaik untuk proyek perumahan,
        komersial, dan industri.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <button @click="goToContact"
          class="bg-yellow-300 text-purple-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-purple-700 hover:text-white shadow-lg">
          Hubungi Kami
        </button>
        <button @click="scrollToServices"
          class="border border-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-purple-800 shadow-lg">
          Lihat Layanan
        </button>
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

    const scrollToServices = () => {
      const servicesSection = document.querySelector('#services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      isMobile,
      scrollToServices,
    };
  },
  methods: {
    goToContact() {
      this.$router.push('/contact');
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
