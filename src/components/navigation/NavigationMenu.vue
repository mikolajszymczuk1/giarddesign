<template>
  <NavigationLink
    v-for="link in navigationLinks"
    :key="link.linkUrl"
    class="relative py-[18px] px-[28px] border-black/20 border-solid border-t-[1px] group md:border-none md:py-0 md:px-[20px]
      lg:px-0"
    :link-url="link.linkUrl"
  >
    <div class="flex items-center justify-between">
      {{ link.linkContent }}
      <DropdownArrowIcon
        v-if="!hasSublinks(link)"
        class="group-hover:rotate-[180deg] md:ml-[5px]"
      />
    </div>

    <template #subMenu>
      <div
        v-if="!hasSublinks(link)"
        class="flex flex-col h-0 transition-all overflow-hidden group-hover:h-[100%] md:absolute md:top-[100%]
          md:group-hover:h-auto md:hidden md:group-hover:flex md:bg-white md:rounded-[8px] md:w-[125px] md:py-[15px]
          md:px-[28px] md:left-[50%] md:translate-x-[-50%] md:shadow-lg"
      >
        <NavigationLink
          v-for="subLink in link.subLinks"
          :key="subLink.linkUrl"
          class="first:mt-[28px] py-[18px] border-black/20 border-solid border-t-[1px] md:border-none md:first:mt-0 md:py-[10px]
            md:text-center"
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
import NavigationLink from '@/components//navigation/NavigationLink.vue';

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

/**
 * Function check if `link` has sublinks
 * @param {Link} link link to check
 * @return {boolean} true if link has sublinks
 */
const hasSublinks = (link: Link): boolean => link.subLinks.length === 0;
</script>
