<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="(image, index) in images" :key="index">
      <v-img :src="image" alt="Carousel Image" class="carousel__item" />
    </Slide>

    <template #addons>
      <Pagination class="custom-pagination" />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import image1 from '@/assets/images/image1.jpg'
import image2 from '@/assets/images/image2.jpg'
import image3 from '@/assets/images/image3.jpg'
import image4 from '@/assets/images/image4.jpg'

const images = [image1, image2, image3, image4]
</script>

<style scoped>
.carousel__item {
  width: 100%;
  height: auto;
  object-fit: cover; /* 確保圖片填滿容器 */
}

/* 自訂 Pagination 位置 */
.custom-pagination {
  position: absolute; /* 絕對定位 */
  bottom: 10px; /* 調整進度條距離底部的距離 */
  left: 50%; /* 水平置中 */
  transform: translateX(-50%); /* 調整水平居中的方式 */
}
</style>
