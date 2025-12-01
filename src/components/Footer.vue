<template>
  <footer class="bg-[#FF7C7C] text-black px-6 md:px-20 py-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">

      <!-- Kiri -->
      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src="/src/assets/logodesweb.png"
          alt="Logo"
          class="w-36 h-36 md:w-60 md:h-60 object-contain -mt-4 md:-mt-10"
        />

        <div class="mt-2 space-y-1 text-xs md:text-sm">
          <p class="leading-tight">
            Bringing love and joy<br />through every bloom.
          </p>
          <p>© 2025 Bermekaran</p>
        </div>
      </div>

      <!-- Tengah -->
      <div class="flex flex-col items-center justify-start mt-4 md:mt-10 space-y-3 md:space-y-6">
        <h3 class="font-semibold text-sm md:text-base">Navigation</h3>

        <RouterLink to="/" class="hover:underline text-xs md:text-sm">Home</RouterLink>
        <RouterLink to="/products" class="hover:underline text-xs md:text-sm">Products</RouterLink>
        <RouterLink to="/about" class="hover:underline text-xs md:text-sm">About</RouterLink>
        <RouterLink to="/contact" class="hover:underline text-xs md:text-sm">Contact</RouterLink>
      </div>

      <!-- Kanan -->
      <div class="flex flex-col items-center md:items-end text-center md:text-right mt-4 md:mt-10 space-y-2">
        <h3 class="font-semibold text-sm md:text-base">Get to know us more!</h3>
        <p class="text-xs md:text-sm">Follow us on:</p>

        <div class="flex space-x-3 md:space-x-4 text-xl md:text-2xl">
          <a href="https://facebook.com" target="_blank" class="hover:text-pink-600">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="hover:text-pink-600">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.font-cursive {
  font-family: 'Playfair Display', cursive;
}
</style>
