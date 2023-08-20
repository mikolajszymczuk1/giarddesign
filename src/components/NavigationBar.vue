<template>
  <nav class="flex justify-between items-center px-[28px] py-[24px]">
    <a href="/">
      <LogoIcon />
    </a>

    <div class="flex">
      <div
        class="flex items-center relative w-[112px] h-[23px] mr-[28px] px-[30px] border-solid border-[1px] border-black/10
          rounded-[25px] overflow-hidden"
      >
        <SearchIcon class="absolute left-[10px]" />

        <input
          class="text-[0.4375rem] text-black outline-none font-inter"
          type="text"
          placeholder="Szukaj ..."
        >
      </div>

      <button
        class="w-[22px]"
        name="menu-icon"
        @click="toggleMenu()"
      >
        <FontAwesomeIcon
          class="w-[100%] h-auto"
          :icon="menuIcon"
        />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { menuIcon } from '@/modules/fontawesome/iconsSet';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';

/** Function activate or deactivate menu */
const toggleMenu = () => {
  console.log('Toggle menu');
};
</script>
