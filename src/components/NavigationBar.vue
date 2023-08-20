<template>
  <nav class="flex justify-between items-center gap-x-[28px] relative px-[28px] py-[24px] bg-white">
    <a
      class="flex-1"
      href="/"
    >
      <LogoIcon />
    </a>

    <NavigationSearch />

    <button
      class="flex justify-center items-center w-[22px] h-[19px]"
      name="menu-icon"
      @click="toggleMenu()"
    >
      <FontAwesomeIcon
        class="w-[100%] h-auto"
        :icon="navActive ? exitIcon : menuIcon"
      />
    </button>

    <!-- Menu with links -->
    <div
      class="flex flex-col absolute left-0 top-[100%] w-[100%] bg-white overflow-auto transition-all delay-150 duration-300"
      :class="navActive ? 'h-[calc(100vh-71px)]' : 'h-0'"
    >
      <NavigationMenu />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { menuIcon, exitIcon } from '@/modules/fontawesome/iconsSet';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import NavigationSearch from '@/components/NavigationSearch.vue';

/** Navigation active status */
const navActive: Ref<boolean> = ref(false);

/** Function activate or deactivate menu */
const toggleMenu = () => {
  navActive.value = !navActive.value;
};
</script>
