// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true },
//   ssr: true, // other configurations 
// })

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id', // Mengatur atribut lang ke Indonesia
      },
    },
  },
  pages: true,

  // other configurations 
  ssr: true,

  css: ['@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      blogId: process.env.BLOG_ID,
      apiKey: process.env.API_KEY,
    }},

    // plugins: ['~/plugins/canonical.js'],

    modules: ['@nuxt/image', '@nuxt/ui'],
    image: {
      domains: ['cdn.jsdelivr.net'], // Daftarkan domain gambar yang diizinkan
      provider: 'ipx', // Gunakan provider bawaan
    },
  
})