<template>
  <div class="container">
    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>

    <div v-if="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
    </div>

    <div v-else>
      <div class="blogger-default">
        <h1>{{ post.title }}</h1>
        <div v-html="sanitizedContent" class="post-content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRuntimeConfig } from '#app';
import { useRoute } from 'vue-router';
import DOMPurify from 'dompurify';

// Ambil slug dari parameter route
const route = useRoute();
const slug = route.params.slug;

// State utama
const post = ref({});
const loading = ref(true);
const errorMessage = ref('');
const sanitizedContent = ref(''); // Tambahkan ini

// Ambil konfigurasi runtime
const config = useRuntimeConfig();
const blogId = config.public.blogId;
const apiKey = config.public.apiKey;

// Fungsi untuk mengambil detail posting
const fetchPost = async () => {
  try {
    loading.value = true;
    errorMessage.value = ''; // Reset error

    // API call ke Google Blogger untuk mengambil semua postingan
    const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts`, {
      params: {
        key: apiKey,
        maxResults: 100 // Adjust as needed
      }
    });

    // Cari postingan yang sesuai dengan slug
    const foundPost = response.data.items.find(post => generateSlug(post.title) === slug);

    if (!foundPost) {
      throw new Error('Post not found');
    }

    post.value = foundPost;
    sanitizedContent.value = DOMPurify.sanitize(post.value.content);
  } catch (error) {
    errorMessage.value = error.response ? error.response.data.error.message : error.message;
    console.error('Error fetching post:', errorMessage.value);
  } finally {
    loading.value = false;
  }
};

// Panggil API saat komponen dimuat
onMounted(() => {
  fetchPost();
});

// Fungsi untuk membuat slug dari judul
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
.loading,
.error {
  text-align: center;
  margin-top: 20px;
}
.post-content img {
  max-width: 100%;
  border-radius: 10px;
}

/* Style bawaan Blogger dengan :deep */
:deep(.post-content h1), 
:deep(.post-content h2), 
:deep(.post-content h3), 
:deep(.post-content h4), 
:deep(.post-content h5), 
:deep(.post-content h6) {
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

:deep(.post-content p) {
  margin-bottom: 20px;
}

:deep(.post-content ul), 
:deep(.post-content ol) {
  margin-bottom: 20px;
  padding-left: 40px;
}

:deep(.post-content li) {
  margin-bottom: 10px;
}

:deep(.post-content img) {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

:deep(.post-content blockquote) {
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-left: 5px solid #ccc;
}

:deep(.post-content a) {
  text-decoration: none;
}

:deep(.post-content a:hover) {
  text-decoration: underline;
}

/* Additional styles to ensure proper formatting */
:deep(.post-content table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

:deep(.post-content table), 
:deep(.post-content th), 
:deep(.post-content td) {
  border: 1px solid #ddd;
}

:deep(.post-content th), 
:deep(.post-content td) {
  padding: 8px;
  text-align: left;
}

:deep(.post-content th) {
  background-color: #f2f2f2;
}

:deep(.post-content pre) {
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ccc;
  overflow: auto;
  margin-bottom: 20px;
}

:deep(.post-content code) {
  background-color: #f9f9f9;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>