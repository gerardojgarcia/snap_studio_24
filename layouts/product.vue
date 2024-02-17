<script setup lang="ts">
const product = ref([

  {
    id: 'ss-ch-1',
    name: 'Chair 1',
    product_short_descr: 'Chair, Ply',
    date: '2022',
    images: ['/images/chair_23_1.png', "/images/chair_23_2.png", "/images/chair_23_3.png"]
  }


])
</script>

<template>
<div id="product" class="flex flex-col" v-for="item in product" :key="item.id">
  <div class="h-1/2 pb-52"><div class="product-header flex justify-between border-y-4 border-black py-2 px-4"><p class="product-id">[ {{item.id}} ]</p><p class="product-name">{{item.name}}</p><p class="product-short-descr">{{item.product_short_descr}}</p><p class="product-year">
    {{ item.date }}</p></div>
    <div class="product-details flex justify-between">
  <div class="item-materials w-1/2 ">


    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis deserunt magnam molestias, nobis vitae.</div>


      <div class="item-descr w-1/2  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur eius eligendi labore neque repellat!</div>


    </div>

  </div>
  <div class="h-1/2">
    <div class="sub-header border-y-4 border-black  ">Product </div>
    <div class="flex">
      <p class="w-1/2 "> Images: {{item.images.length}}</p>

     <div class="flex flex-wrap w-1/2" v-for="image in item.images" :key="image">
       <nuxt-img :src="image" />

     </div>

    </div>


  </div>


</div>
</template>

<style scoped>

</style>