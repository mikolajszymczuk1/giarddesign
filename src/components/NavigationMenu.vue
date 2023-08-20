<template>
  <NavigationLink
    v-for="link in navigationLinks"
    :key="link.linkUrl"
    class="py-[18px] px-[28px] border-black/20 border-solid border-t-[1px] group"
    :link-url="link.linkUrl"
  >
    <div class="flex items-center justify-between">
      {{ link.linkContent }}
      <DropdownArrowIcon
        v-if="link.subLinks.length !== 0"
        class="group-hover:rotate-[180deg]"
      />
    </div>

    <template #subMenu>
      <div class="flex flex-col h-0 transition-all overflow-hidden group-hover:h-[100%]">
        <NavigationLink
          v-for="subLink in link.subLinks"
          :key="subLink.linkUrl"
          class="first:mt-[28px] py-[18px] border-black/20 border-solid border-t-[1px]"
          :link-url="subLink.linkUrl"
        >
          {{ subLink.linkContent }}
        </NavigationLink>
      </div>
    </template>
  </NavigationLink>
</template>

<script setup lang="ts">
import type { Link } from '@/types/commonTypes';

import DropdownArrowIcon from '@/components/icons/DropdownArrowIcon.vue';
import NavigationLink from '@/components/NavigationLink.vue';

/** Navigation links structure to render */
const navigationLinks: Link[] = [
  {
    linkUrl: '',
    linkContent: 'Oferta',
    subLinks: [
      { linkUrl: '#oferta-a', linkContent: 'Oferta A', subLinks: [] },
      { linkUrl: '#oferta-b', linkContent: 'Oferta B', subLinks: [] },
      { linkUrl: '#oferta-c', linkContent: 'Oferta C', subLinks: [] },
      { linkUrl: '#oferta-d', linkContent: 'Oferta D', subLinks: [] },
    ],
  },

  { linkUrl: '#o-firmie', linkContent: 'O firmie', subLinks: [] },
  { linkUrl: '#realizacje', linkContent: 'Realizacje', subLinks: [] },
  { linkUrl: '#kontakt', linkContent: 'Kontakt', subLinks: [] },
];
</script>
