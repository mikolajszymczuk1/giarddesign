<template>
  <div>
    <p
      class="mb-[12px] font-inter text-[0.75rem] xlg:mb-[16px]"
      :class="light ? 'text-lightCream' : 'text-green'"
      data-test="small-heading"
    >
      <slot name="section-name"></slot>
    </p>

    <h2
      class="font-montserrat text-[1.5rem] leading-[115%] xlg:text-[3rem]"
      :class="light ? 'text-lightCream' : 'text-black'"
      data-test="text-heading"
    >
      <slot name="section-title-first-part"></slot>

      <span class="font-inter font-medium italic">
        <slot name="section-title-second-part"></slot>
      </span>
    </h2>

    <p
      v-if="!noContent"
      class="mt-[16px] font-inter text-[0.75rem] xlg:text-[1rem] xlg:mt-[32px]"
      :class="light ? 'text-lightCream' : 'text-black'"
      data-test="content"
    >
      <slot name="section-content"></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  light: {
    type: Boolean,
    default: false,
  },
  noContent: {
    type: Boolean,
    default: false,
  }
});
</script>
