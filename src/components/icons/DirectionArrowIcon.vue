<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path :class="getColorClass" d="M14.4286 6.92446L13.6608 6.15672L8.11694 11.7087L8.11694 0.0713586L7.02594 0.0713586L7.02594 11.7006L1.48204 6.15672L0.714295 6.92446L7.57548 13.7856L14.4286 6.92446Z" fill="#1B5B31"/>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    required: true,
    validator(value: string) {
      return ['green', 'black', 'light'].includes(value);
    },
  },
});

/** Return special color class based on color prop value */
const getColorClass = computed<string>(() => {
  switch(props.color) {
    case 'green': return 'fill-green';
    case 'black': return 'fill-black';
    case 'light': return 'fill-lightCream';
    default: return 'fill-green';
  }
});
</script>
