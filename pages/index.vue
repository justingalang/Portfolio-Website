<template>
    <div class="home">
      <HomeHeader />
      <a :href="filePath" target="_blank">View My Resume</a>
      <nav>
        <nuxt-link to="/about">About Me</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </nav>
    </div>
  </template>
  
  <script>
  import HomeHeader from '~/components/HomeHeader.vue';
  // import { ASSETS_BUCKET, getSignedUrl } from '~/services/storageService';
  export default {
    components: {
      HomeHeader,
    },
    data() {
      return {

      };
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin: 2rem auto;
  }
  
  nav {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  nav a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #3498db;
    transition: color 0.3s;
  }
  
  nav a:hover {
    color: #2980b9;
  }
  </style>
  