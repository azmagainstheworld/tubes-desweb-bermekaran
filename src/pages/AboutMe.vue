 <template>
  <!-- SECTION 1 — ABOUT -->
  <section class="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 font-[Poppins] lg:min-h-screen">
    <div class="max-w-5xl sm:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
        
        <!-- TEKS -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-snug lg:leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Adji Zahra Mahdiyyah
          </h1>
          <h3 class="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2 sm:mb-2 md:mb-3 lg:mb-4">11231004 - Informatika - ITK</h3>
          <p class="text-gray-700 text-sm sm:text-base md:text-base lg:text-base leading-relaxed mb-4 sm:mb-5 md:mb-5 lg:mb-6">
            Saya adalah seorang mahasiswa Institut Teknologi Kalimantan yang sedang menjalani perkuliahan semester 5di program studi Informatika. Perjalanan luar akademik dimulai dengan aktif mengambil job sebagai Master of Ceremony dan moderator. Kehidupan akademik tetap berjalan dengan baik, dilihat dari nilai indeks prestasi yang stabil.
          </p>
        </div>

        <!-- GAMBAR -->
        <div class="flex justify-center md:justify-end mt-6 md:mt-0 hidden md:block ">
          <img src="/src/assets/toko bunga about.jpg"
              class="rounded-3xl shadow-lg w-64 sm:w-72 md:w-80 lg:w-96 object-cover"/>
        </div>

      </div>
    </div>
  </section>

  <!-- SECTION 2 — skill -->
  <section class="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 flex items-center lg:min-h-screen ">
    <div class="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">

      <h2 class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Skill
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

      <div class="flex flex-col items-center transition hover:scale-105 duration-300">
        <Frame
          width="200px"
          height="200px"
          borderRadius="300px"
          bgColor="#FFE5E5"
        >
        <h3 class="font-semibold text-base sm:text-base md:text-lg mb-1 sm:mb-1 md:mb-2">Public Speaking</h3>
        </Frame>
      </div>     

      <div class="flex flex-col items-center transition hover:scale-105 duration-300">
        <Frame
          width="200px"
          height="200px"
          borderRadius="300px"
          bgColor="#FFE5E5"
        >
        <h3 class="font-semibold text-base sm:text-base md:text-lg mb-1 sm:mb-1 md:mb-2">Memasak</h3>
        </Frame>
      </div>   

      <div class="flex flex-col items-center transition hover:scale-105 duration-300">
        <Frame
          width="200px"
          height="200px"
          borderRadius="300px"
          bgColor="#FFE5E5"
        >
        <h3 class="font-semibold text-base sm:text-base md:text-lg mb-1 sm:mb-1 md:mb-2">Menulis</h3>
        </Frame>
      </div>  

      <div class="flex flex-col items-center transition hover:scale-105 duration-300">
        <Frame
          width="200px"
          height="200px"
          borderRadius="300px"
          bgColor="#FFE5E5"
        >
        <h3 class="font-semibold text-base sm:text-base md:text-lg mb-1 sm:mb-1 md:mb-2">Menulis</h3>
        </Frame>
      </div>       


      </div>
    </div>
  </section>

</template>

<script setup>
import Frame from '../components/Frame.vue';
</script>

