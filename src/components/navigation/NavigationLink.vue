<template>
  <template v-if="linkUrl !== ''">
    <a
      :class="classes"
      :href="linkUrl"
      data-test="navigation-link"
    >
      <slot></slot>

      <slot name="subMenu"></slot>
    </a>
  </template>

  <template v-else>
    <div
      :class="classes"
      data-test="navigation-container"
    >
      <slot></slot>

      <slot name="subMenu"></slot>
    </div>
  </template>
</template>

<script setup lang="ts">
defineProps({
  linkUrl: {
    type: String,
    default: '',
  },
});

/** Const classes for link styles */
const classes: string = 'font-inter text-[0.75rem] text-black lg:text-[0.875rem]';
</script>
