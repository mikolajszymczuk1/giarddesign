<template>
  <button
    class="flex items-center gap-x-[7px] py-[12px] px-[20.5px] rounded-[25px] font-inter text-[0.875rem] lg:px-[24px] lg:text-[1rem]"
    :class="[
      transparent ? 'bg-none border-solid border-[1px] border-green text-green' : 'bg-green text-lightCream',
    ]"
    @click="emitClick()"
  >
    <slot></slot>

    <DirectionArrowIcon
      v-if="withIcon"
      class="lg:w-[16px] lg:h-[16px]"
      :color="iconColor"
    />
  </button>
</template>

<script setup lang="ts">
import DirectionArrowIcon from '@/components/icons/DirectionArrowIcon.vue';

const emit = defineEmits<{
  (e: 'onClick'): void,
}>();

defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  withIcon: {
    type: Boolean,
    default: false,
  },
  iconColor: {
    type: String,
    default: 'green',
    validator(value: string) {
      return ['green', 'black', 'light'].includes(value);
    },
  },
});

/** Emit click event */
const emitClick = () => emit('onClick');
</script>
