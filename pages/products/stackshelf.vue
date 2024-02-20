<script setup lang="ts">
const product = ref([

{
  id: 'ss-stshf-1',
  name: 'Stack Shelf',
  product_short_descr: 'Chair, Ply',
  date: '2022',
  images: ['/images/stackshelf/IMG_0434_01.png', "/images/stackshelf/IMG_0437_01.png", "/images/stackshelf/IMG_0435_01.png"],
  product_long_descr: [{descr: "pine, walnut dowels"}, {descr: 'L24in D11in H32in'}, {descr: 'handmade'}]
}


])






</script>

<template>
  <div id="product" class="flex flex-col" v-for="item in product" :key="item.id">
    <div class="h-1/2 pb-52"><div class="product-header flex justify-between border-y-4 border-black py-2 px-4"><p class="product-id">[ {{item.id}} ]</p><p class="product-name">{{item.name}}</p><p class="product-short-descr">{{item.product_short_descr}}</p><p class="product-year">
      {{ item.date }}</p>
      </div>
      <div class="product-details flex justify-between pt-2"  v-for="materials in item.product_long_descr" :key="materials.descr">
    <div class="item-materials w-1/2 pl-2 flex flex-col " >

    <p>{{ materials.descr }}</p>
  
  
     </div>
  
  
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