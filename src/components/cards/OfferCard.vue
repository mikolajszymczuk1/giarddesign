<template>
  <div class="px-[34px] py-[41px] max-w-[420px] bg-white rounded-[24px] xlg:w-[378px]">
    <component
      :is="getIcon"
      class="mb-[29px] xlg:w-[40px] xlg:mb-[34px]"
    ></component>

    <h3 class="mb-[11px] font-montserrat text-[1.5rem] text-black xlg:text-[1.75rem] xlg:mb-[12px]">
      <slot name="card-title"></slot>
    </h3>

    <p class="mb-[54px] font-inter text-[0.75rem] xlg:mb-[63px] xlg:text-[0.875rem]">
      <slot name="card-content"></slot>
    </p>

    <RoundedButton
      transparent
      with-icon
      arrow-right
      no-padding
      underline
    >
      Dowiedz się więcej
    </RoundedButton>
  </div>
</template>

<script setup lang="ts">
import { type Component, computed } from 'vue';

import RoundedButton from '@/components/buttons/RoundedButton.vue';
import PencilIcon from '@/components/icons/PencilIcon.vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';
import StarsIcon from '@/components/icons/StarsIcon.vue';

const props = defineProps({
  icon: {
    type: String,
    default: 'pencil',
    validator(value: string) {
      return ['pencil', 'eye', 'stars'].includes(value);
    }
  },
});

/** Return icon component based on `icon` prop */
const getIcon = computed<Component>(() => {
  switch(props.icon) {
    case 'pencil': return PencilIcon;
    case 'eye': return EyeIcon;
    case 'stars': return StarsIcon;
    default: return PencilIcon;
  }
});
</script>
