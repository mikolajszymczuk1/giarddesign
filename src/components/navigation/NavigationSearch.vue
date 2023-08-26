<template>
  <div
    class="flex items-center relative w-[112px] h-[23px] pl-[30px] pr-[10px] group border-solid border-[1px]
      border-black/10 rounded-[25px] overflow-hidden md:w-0 md:border-white md:hover:border-black/10 md:hover:w-[112px]
        md:transition-all md:duration-150 md:ease-in-out lg:py-[20px] lg:pl-[40px] lg:hover:w-[150px]"
  >
    <SearchIcon class="absolute left-[10px] lg:w-[24px] lg:h-[24px]" />

    <input
      class="overflow-auto text-[0.5625rem] text-black outline-none font-inter md:opacity-0 md:group-hover:opacity-[1]
        transition-opacity lg:text-[0.75rem]"
      type="text"
      placeholder="Szukaj ..."
    >
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue';
</script>
