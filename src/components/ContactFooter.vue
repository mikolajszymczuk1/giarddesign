<template>
  <footer class="px-[22px] py-[40px] bg-black lg:px-[150px] lg:py-[80px] xlg:px-[200px]">
    <section
      class="flex flex-col gap-y-[60px] pb-[31px] mb-[31px] border-solid border-b-[1px] border-b-lightCream
        md:flex-row md:items-center md:justify-between xlg:pb-[62px] xlg:mb-[62px]"
    >
      <LogoIcon
        light
        class="lg:w-[114px] lg:h-auto"
      />

      <div class="flex flex-col items-start gap-y-[24px] md:flex-row md:items-center md:gap-x-[24px]">
        <p class="font-inter text-lightCream text-[0.75rem] lg:text-[1rem]">
          Daj znać, co możemy dla Ciebie zrobić!
        </p>

        <RoundedButton btn-color="light">
          Skontaktuj się z nami
        </RoundedButton>
      </div>
    </section>

    <section class="flex flex-col gap-y-[50px] mb-[60px] md:flex-row md:justify-between">
      <div class="flex flex-col gap-y-[24px] md:flex-row md:gap-x-[48px] xlg:mb-[120px]">
        <NavigationLink
          v-for="link in links"
          :key="link.linkUrl"
          :link-url="link.linkUrl"
          light
        >
          {{ link.linkContent }}
        </NavigationLink>
      </div>

      <div class="flex flex-col gap-y-[24px] font-inter text-[0.75rem] text-lightCream md:flex-row md:gap-x-[48px] lg:text-[0.875rem]">
        <p>000-000-000</p>
        <p>giarddesign@kontakt.pl</p>
      </div>
    </section>

    <section class="flex justify-between font-inter text-[0.75rem] text-lightCream lg:text-[1rem]">
      <p>Prawa zastrzeżone &copy; 2022</p>
      <div class="flex gap-x-[12px]">
        made by
        <FooterLogoIcon class="xlg:w-[113px] xlg:h-auto" />
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import type { Link } from '@/types/commonTypes';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import FooterLogoIcon from '@/components/icons/FooterLogoIcon.vue'
import RoundedButton from '@/components/buttons/RoundedButton.vue';
import NavigationLink from '@/components/navigation/NavigationLink.vue';

/** Footer links data */
const links: Link[] = [
  { linkUrl: '#Kontakt', linkContent: 'Kontakt' },
  { linkUrl: '#Instagram', linkContent: 'Instagram' },
  { linkUrl: '#Facebook', linkContent: 'Facebook' },
  { linkUrl: '#Linkeding', linkContent: 'Linkedin' },
];
</script>
