<template>
  <div ref="gallery">
    <img src="/gallery/GalleryItem1.png" alt="" title="">
    <img src="/gallery/GalleryItem2.png" alt="" title="">
    <img src="/gallery/GalleryItem3.png" alt="" title="">
    <img src="/gallery/GalleryItem5.png" alt="" title="">
    <img src="/gallery/GalleryItem6.png" alt="" title="">
    <img src="/gallery/GalleryItem4.png" alt="" title="">
    <img src="/gallery/GalleryItem8.png" alt="" title="">
    <img src="/gallery/GalleryItem7.png" alt="" title="">
    <img src="/gallery/GalleryItem9.png" alt="" title="">
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import Macy from 'macy';

/** Gallery element */
const gallery = ref(null) as Ref<HTMLElement | null>;

onMounted(() => {
  Macy({
    container: gallery.value,
    trueOrder: false,
    waitForImages: false,
    margin: 43,
    columns: 3,
    breakAt: {
      1024: 2,
      400: {
        margin: {
          x: 29,
          y: 29,
        },
        columns: 1,
      },
    },
  });
});
</script>
