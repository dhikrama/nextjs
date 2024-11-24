<template>
    <section class="bg-purple-600 py-16">
      <div class="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Siap Memulai Proyek Anda?</h2>
        <p class="text-lg mb-8">
          Hubungi <strong>MauNguli</strong> sekarang untuk mendapatkan tenaga ahli yang siap membantu Anda mewujudkan proyek konstruksi impian Anda.
        </p>
        <div class="flex justify-center gap-4">
          <button 
            class="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            @click="handleContactUs"
          >
            Hubungi Kami
          </button>
          <button 
            class="bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-800 transition"
            @click="handleLearnMore"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CallToAction",
    methods: {
      handleContactUs() {
        // Arahkan pengguna ke halaman kontak
        this.$router.push("/contact");
      },
      handleLearnMore() {
        // Arahkan pengguna ke halaman informasi lebih lanjut
        this.$router.push("/about");
      },
    },
  };
  </script>
  