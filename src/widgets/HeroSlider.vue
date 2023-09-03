<template>
  <div class="relative md:h-[100%]">
    <swiper-container
      class="md:h-[100%]"
      speed="300"
      loop="true"
      :navigation="{
        nextEl: '.nextEl',
        prevEl: '.prevEl',
      }"
    >
      <swiper-slide
        v-for="slider in 3"
        :key="slider"
        class="h-[225px] bg-no-repeat bg-center bg-cover bg-heroImageAMobile lg:bg-heroImageADesktop md:h-[100%]"
      ></swiper-slide>
    </swiper-container>

    <div
      class="flex justify-between items-center gap-x-[21px] absolute bottom-0 right-0 px-[21px] py-[16px] bg-lightCream z-[1]
        xlg:py-[24px] xlg:px-[32px]"
    >
      <button class="prevEl flex justify-center items-center w-[32px] h-[32px] xlg:w-[48px] xlg:h-[48px]">
        <SliderArrowIcon class="xlg:w-[24px] xlg:h-auto" />
      </button>

      <button class="nextEl flex justify-center items-center w-[32px] h-[32px] rotate-180 xlg:w-[48px] xlg:h-[48px]">
        <SliderArrowIcon class="xlg:w-[24px] xlg:h-auto" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderArrowIcon from '@/components/icons/SliderArrowIcon.vue';
</script>
