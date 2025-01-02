<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRuntimeConfig } from '#app';

// Ambil konfigurasi runtime
const config = useRuntimeConfig();
const blogId = config.public.blogId;
const apiKey = config.public.apiKey;

// State utama
const posts = ref([]);
const loading = ref(true);
const nextPageToken = ref(null);
const prevPageToken = ref(null);
const errorMessage = ref('');

// Fungsi untuk mengambil daftar posting
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Hapus karakter non-alfanumerik
    .trim()
    .replace(/\s+/g, '-'); // Ganti spasi dengan "-"
};

const fetchPosts = async (pageToken = '') => {
  try {
    loading.value = true;
    errorMessage.value = ''; // Reset error

    const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts`, {
      params: {
        key: apiKey,
        maxResults: 5,
        pageToken: pageToken || undefined,
      },
    });

    posts.value = response.data.items.map(post => ({
      ...post,
      slug: generateSlug(post.title), // Tambahkan slug untuk SEO
    }));

    nextPageToken.value = response.data.nextPageToken || null;
    prevPageToken.value = response.data.prevPageToken || null;
  } catch (error) {
    errorMessage.value = error.response ? error.response.data.error.message : error.message;
    console.error('Error fetching posts:', errorMessage.value);
  } finally {
    loading.value = false;
  }
};

// Utility untuk memotong teks
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

// Utility untuk mengambil gambar pertama dari konten
const getFirstImage = (content) => {
  const imgTag = content.match(/<img[^>]+src="([^">]+)"/);
  return imgTag ? imgTag[1] : '/default-thumbnail.jpg'; // Gambar default jika tidak ada
};

// Panggil API saat komponen dimuat
onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="container">
    <h1 class="title">Blog Posts</h1>

    <!-- Loading -->
    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>

    <!-- Error -->
    <div v-if="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- Daftar Post -->
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post-card">
        <img :src="getFirstImage(post.content)" alt="Thumbnail" class="thumbnail" />
        <h2>{{ post.title }}</h2>
        <p v-html="truncateText(post.content.replace(/<img[^>]*>/g, ''), 30)"></p>
        <nuxt-link :to="'/blog/' + post.slug" class="read-more">Read more</nuxt-link>
      </div>

      <!-- Paginasi -->
      <div class="pagination">
        <button @click="fetchPosts(prevPageToken)" :disabled="!prevPageToken">Previous</button>
        <button @click="fetchPosts(nextPageToken)" :disabled="!nextPageToken">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
.loading,
.error {
  text-align: center;
  margin-top: 20px;
}
.post-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.thumbnail {
  max-width: 100%;
  border-radius: 10px;
}
.read-more {
  color: #007bff;
  text-decoration: none;
}
.read-more:hover {
  text-decoration: underline;
}
.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

/* Style bawaan Blogger */
::v-deep .post-card h2 {
  font-family: 'BloggerSans', sans-serif;
  font-size: 24px;
  margin: 0;
  padding: 0;
  color: #333;
}

::v-deep .post-card p {
  font-family: 'BloggerSans', sans-serif;
  font-size: 16px;
  color: #555;
}

::v-deep .post-card img {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

::v-deep .pagination button {
  font-family: 'BloggerSans', sans-serif;
  font-size: 14px;
}
</style>