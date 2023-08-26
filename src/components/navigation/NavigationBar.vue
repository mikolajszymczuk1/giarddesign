<template>
  <nav
    class="flex justify-between items-center gap-x-[28px] relative px-[28px] py-[24px] bg-white md:gap-x-0 lg:px-[89px]
      lg:py-[15px]"
  >
    <a
      class="flex-1 md:flex-none"
      href="/"
    >
      <LogoIcon class="lg:w-[114px] lg:h-auto" />
    </a>

    <!-- Menu with links -->
    <div
      class="flex flex-col absolute left-0 top-[100%] w-[100%] bg-white overflow-auto transition-all duration-300
        md:flex-row md:static md:h-auto md:w-auto md:overflow-visible md:flex-1 md:justify-end lg:gap-[48px] lg:mr-[38px]"
      :class="navActive ? 'h-[calc(100vh-71px)]' : 'h-0'"
    >
      <NavigationMenu />
    </div>

    <NavigationSearch />

    <button
      class="flex justify-center items-center w-[22px] h-[19px] md:hidden"
      name="menu-icon"
      @click="toggleMenu()"
    >
      <FontAwesomeIcon
        class="w-[100%] h-auto"
        :icon="navActive ? exitIcon : menuIcon"
      />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { menuIcon, exitIcon } from '@/modules/fontawesome/iconsSet';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import NavigationMenu from '@/components/navigation/NavigationMenu.vue';
import NavigationSearch from '@/components/navigation/NavigationSearch.vue';

/** Navigation active status */
const navActive: Ref<boolean> = ref(false);

/** Function activate or deactivate menu */
const toggleMenu = () => {
  navActive.value = !navActive.value;
};
</script>
