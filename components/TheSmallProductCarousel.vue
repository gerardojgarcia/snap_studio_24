<script setup>
// Your code here
</script>
<template>
  
    <div class="m-auto p-4">
      <strong>You May Like...</strong>
      <div class="small-product-carousel flex space-x-8 m-auto">
          <div class="bg-gray-200 p-4 overflow-hidden ">
          <nuxt-img src="/images/wall_unit.webp" class="hover:scale-125 duration-300 " />
        </div>
        <!-- Column 2 -->
        <div class="bg-gray-200 p-4 overflow-hidden">
          <nuxt-img src="/images/home_goods.webp" class="hover:scale-125 duration-300" />
        </div>
        <!-- Column 3 -->
        <div class="bg-gray-200 p-4 overflow-hidden">
          <nuxt-img src="/images/shelf_system.webp" class="hover:scale-125 duration-300" />
        </div>
      
      </div>
    </div>
</template>