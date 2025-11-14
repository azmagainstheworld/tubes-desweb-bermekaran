<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <!-- router-view menampilkan halaman aktif -->
    <main class="flex-grow px-10 md:px-20">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
