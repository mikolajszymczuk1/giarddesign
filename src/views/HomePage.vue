<template>
  <NavigationBar />

  <!-- ====== HEADER ====== -->
  <header class="md:flex">
    <!-- Heading part -->
    <div class="pt-[55px] pb-[72px] px-[21px] bg-mediumCream lg:pl-[89px] lg:pr-[64px] xlg:py-[144px] ulg:pl-[10%]">
      <h1 class="mb-[22px] font-montserrat text-[1.875rem] text-black leading-[45px] xlg:mb-[44px] xlg:text-[3.75rem] xlg:leading-[70px]">
        Nowoczesna<br>
        aranżacja<br>
        Twojego ogrodu
      </h1>

      <h2 class="mb-[36px] font-inter text-[0.75rem] text-black font-normal xlg:mb-[72px] xlg:text-[1rem] xlg:pr-[20%]">
        Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.
        Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.
      </h2>

      <div class="flex flex-col gap-y-[16px] items-start xlg:flex-row xlg:gap-x-[30px]">
        <RoundedButton>Skontaktuj się z nami</RoundedButton>
        <RoundedButton
          with-icon
          transparent
          icon-color="green"
        >
          Zobacz nasze realizacje
        </RoundedButton>
      </div>
    </div>

    <!-- Slider part -->
    <div class="md:w-[50%] xlg:w-[47.5%]">
      <HeroSlider />
    </div>
  </header>

  <!-- ====== MAIN ====== -->
  <main>
  </main>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/navigation/NavigationBar.vue';
import RoundedButton from '@/components/buttons/RoundedButton.vue';
import HeroSlider from '@/widgets/HeroSlider.vue';
</script>
