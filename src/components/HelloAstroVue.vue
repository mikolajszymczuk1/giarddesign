<template>
  <h1 class="text-orange-400 text-[25px]">{{ msg }}</h1>
</template>

<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: 'Example message',
  },
});
</script>
