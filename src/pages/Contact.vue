<template>
  <section class="pt-16 pb-24 text-center px-4">

    <h1 class="text-3xl font-extrabold mb-4">Contact</h1>
    <p class="text-gray-600 max-w-2xl mx-auto mb-10">
      Fill out the form below to place your bouquet order, send a custom request, or  
      simply reach out to us — we’d love to make your floral dream bloom.
    </p>

    <ContactForm />
  </section>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<style scoped>
section {
  font-family: "Poppins", sans-serif;
}
</style>
