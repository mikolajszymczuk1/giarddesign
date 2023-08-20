<template>
  <div
    class="flex items-center relative w-[112px] h-[23px] pl-[30px] pr-[10px] border-solid border-[1px]
      border-black/10 rounded-[25px] overflow-hidden"
  >
    <SearchIcon class="absolute left-[10px]" />

    <input
      class="overflow-auto text-[0.5625rem] text-black outline-none font-inter"
      type="text"
      placeholder="Szukaj ..."
    >
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue';
</script>
