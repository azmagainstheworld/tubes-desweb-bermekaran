 <template>
  <!-- SECTION 1 — ABOUT -->
  <section class="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 font-[Poppins] lg:min-h-screen">
    <div class="max-w-5xl sm:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
        
        <!-- TEKS -->
        <div>
          <h3 class="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2 sm:mb-2 md:mb-3 lg:mb-4">About</h3>
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-snug lg:leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Every flower tells a story of love, care, <br />
            and connection
          </h1>
          <p class="text-gray-700 text-sm sm:text-base md:text-base lg:text-base leading-relaxed mb-4 sm:mb-5 md:mb-5 lg:mb-6">
            Bermekaran began from a small hobby — making handmade bouquets for friends — soon blossomed into a growing passion...
          </p>
          <p class="text-gray-700 text-sm sm:text-base md:text-base lg:text-base leading-relaxed">
            Every bouquet is thoughtfully arranged to share warmth and connection...
          </p>
        </div>

        <!-- GAMBAR -->
        <div class="flex justify-center md:justify-end mt-6 md:mt-0">
          <img src="/src/assets/toko bunga about.jpg"
              class="rounded-3xl shadow-lg w-64 sm:w-72 md:w-80 lg:w-96 object-cover"/>
        </div>

      </div>

      <!-- STATISTIK -->
      <div class="grid grid-cols-1 sm:grid-cols-3 text-center mt-12 sm:mt-14 md:mt-16 lg:mt-20 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF7C7C]">1000+</h2>
          <p class="text-gray-700 font-bold mt-1 sm:mt-2">Bouquets Delivered</p>
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF7C7C]">24</h2>
          <p class="text-gray-700 font-bold mt-1 sm:mt-2">Provinces Reached</p>
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF7C7C]">100%</h2>
          <p class="text-gray-700 font-bold mt-1 sm:mt-2">Fresh Flowers From Local</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2 — WHY CHOOSE US -->
  <section class="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 flex items-center lg:min-h-screen">
    <div class="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">

      <h2 class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Why Choose Bermekaran?
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-14">

        <!-- 1 -->
        <div class="flex flex-col items-center">
          <div class="text-4xl sm:text-4xl md:text-5xl mb-2 sm:mb-2 md:mb-3">💖</div>
          <h3 class="font-semibold text-base sm:text-base md:text-lg mb-1 sm:mb-1 md:mb-2">Handcrafted with Love</h3>
          <p class="text-gray-600 text-xs sm:text-xs md:text-sm">
            Every bouquet is lovingly handcrafted with attention to detail.
          </p>
        </div>

        <!-- 2 -->
        <div class="flex flex-col items-center">
          <div class="text-4xl sm:text-4xl md:text-5xl mb-2 sm:mb-2 md:mb-3">🌿</div>
          <h3 class="font-semibold text-base sm:text-base md:text-lg mb-1 sm:mb-1 md:mb-2">Freshness Guaranteed</h3>
          <p class="text-gray-600 text-xs sm:text-xs md:text-sm">
            Our flowers are freshly picked from trusted local farmers.
          </p>
        </div>

        <!-- 3 -->
        <div class="flex flex-col items-center">
          <div class="text-4xl sm:text-4xl md:text-5xl mb-2 sm:mb-2 md:mb-3">⚡</div>
          <h3 class="font-semibold text-base sm:text-base md:text-lg mb-1 sm:mb-1 md:mb-2">Instant Delivery</h3>
          <p class="text-gray-600 text-xs sm:text-xs md:text-sm">
            Fast delivery across Indonesia — your flowers arrive vibrant & fresh.
          </p>
        </div>

      </div>
    </div>
  </section>

</template>

