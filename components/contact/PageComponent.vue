<template>
    <div class="bg-gray-50 py-16 min-h-screen">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-gray-800 text-center mb-8">Kontak Kami</h1>
        <p class="text-gray-600 text-center mb-8">
          Ada pertanyaan atau ingin memulai proyek? Isi formulir di bawah ini, dan kami akan segera menghubungi Anda!
        </p>
        <form @submit.prevent="submitForm" class="bg-white shadow-lg rounded-lg p-6">
          <!-- Nama -->
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">Nama</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Masukkan nama Anda"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Masukkan email Anda"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <!-- Pesan -->
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-medium mb-2">Pesan</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              placeholder="Tuliskan pesan Anda"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            ></textarea>
          </div>
          <!-- Tombol Submit -->
          <div class="text-center">
            <button
              type="submit"
              class="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
        <!-- Notifikasi -->
        <div v-if="successMessage" class="mt-6 text-center text-green-600 font-medium">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
        successMessage: "",
      };
    },
    methods: {
      submitForm() {
        // Simulasi pengiriman data (untuk produksi, gunakan API atau backend)
        console.log("Form Data:", this.formData);
  
        // Reset form dan tampilkan pesan sukses
        this.successMessage = "Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda!";
        this.formData = { name: "", email: "", message: "" };
  
        // Pesan hilang setelah beberapa detik
        setTimeout(() => {
          this.successMessage = "";
        }, 5000);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya jika diperlukan */
  </style>
  