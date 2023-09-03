<template>
  <button
    class="flex items-center gap-x-[7px] rounded-[25px] font-inter text-[0.875rem] lg:text-[1rem]"
    :class="[
      transparent ? 'bg-none' : bgLight ? 'bg-lightCream' : 'bg-green',
      bordered ? 'border-solid border-[1px]' : underline ? 'pb-[4px] border-b-solid border-b-[1px] rounded-none' : '',
      noPadding ? '' : 'py-[12px] px-[20.5px] lg:px-[24px]',
      getBorderTextColor,
    ]"
    @click="emitClick()"
  >
    <slot></slot>

    <DirectionArrowIcon
      v-if="withIcon"
      class="lg:w-[16px] lg:h-[16px]"
      :class="arrowRight ? 'rotate-[-90deg]' : ''"
      :color="btnColor"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import DirectionArrowIcon from '@/components/icons/DirectionArrowIcon.vue';

const emit = defineEmits<{
  (e: 'onClick'): void,
}>();

const props = defineProps({
  transparent: { type: Boolean, default: false },
  withIcon: { type: Boolean, default: false },
  bordered: { type: Boolean, default: false },
  noPadding: { type: Boolean, default: false },
  arrowRight: { type: Boolean, default: false },
  bgLight: { type: Boolean, default: false },
  underline: { type: Boolean, default: false },
  btnColor: {
    type: String,
    default: 'green',
    validator(value: string) {
      return ['green', 'black', 'light'].includes(value);
    },
  },
});

/** Emit click event */
const emitClick = () => emit('onClick');

/** Return button text color based on `btnColor` prop value */
const getBorderTextColor = computed<string>(() => {
  switch(props.btnColor) {
    case 'green': return 'border-green text-green';
    case 'black': return 'border-black text-black';
    case 'light': return 'border-lightCream text-lightCream';
    default: return 'text-green';
  }
});
</script>
