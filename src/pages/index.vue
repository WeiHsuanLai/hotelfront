<template>
  <div class="page-background">
    <!-- 輪播圖 -->
    <v-col>
      <!-- <Carousel></Carousel> -->
      <Carousel2></Carousel2>
    </v-col>

    <!-- 地圖 -->
    <div class="bg-black">
      <Map></Map>
    </div>

    <v-container>
      <v-row>
        <!-- 遍歷產品列表並顯示每個產品的卡片 -->
        <v-col cols="12" md="6" lg="3"
               v-for="product in products" :key="product._id"
        >
          <RoomCard v-bind="product"></RoomCard>
        </v-col>
      </v-row>
    </v-container>

    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { definePage } from 'vue-router/auto'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

// 輪播圖
import Carousel from './index/carousel.vue'
// 輪播圖2
import Carousel2 from './index/carousel2.vue'

import Map from './index/map.vue'
import Footer from './index/footer.vue'
import RoomCard from '../components/RoomCard.vue'

definePage({
  meta: {
    title: '未來飯店首頁',
    login: false,
    admin: false
  }
})

const { api } = useApi()
const products = ref([])
const loadProducts = async () => {
  try {
    const { data } = await api.get('/product', {
      params: {
        itemsPerPage: 100 // 假設你想一次取出所有產品
      }
    })
    products.value = data.result.data // 直接賦值所有產品
  } catch (error) {
    console.error(error)
  }
}

loadProducts()

// 新增每15分鐘自動發送請求的函數
const sendRequestInterval = () => {
  const intervalId = setInterval(async () => {
    try {
      const { data } = await api.get('/product', {
        params: {
          itemsPerPage: 100
        }
      })
      products.value = data.result.data
      console.log('成功更新產品列表')
    } catch (error) {
      console.error('更新產品列表失敗:', error)
    }
  }, 900000) // 每15分鐘（900000毫秒）執行一次

  return intervalId
}

// 啟動間隔請求
const intervalId = sendRequestInterval()

// 在組件銷毀時停止間隔請求
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style>
.page-background {
  background-color: #c1b5b5;
}
</style>
