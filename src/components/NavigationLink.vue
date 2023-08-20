<template>
  <template v-if="linkUrl !== ''">
    <a
      :class="classes"
      :href="linkUrl"
    >
      <slot></slot>

      <slot name="subMenu"></slot>
    </a>
  </template>

  <template v-else>
    <div
      :class="classes"
      :href="linkUrl"
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
    required: true,
  },
});

/** Const classes for link styles */
const classes: string = 'font-inter text-[0.75rem] text-black';
</script>
