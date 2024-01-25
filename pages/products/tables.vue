<script setup lang="ts">

</script>

<template>
  <div>

    <div class="product-container overflow-y-auto">
      <div class=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Column 1 -->
        <div class="bg-gray-200 p-4 overflow-hidden ">
          <nuxt-img src="/images/desk_1.webp" class="md:hover:scale-125 duration-300 object-cover h-full w-full " format="webp" height="600px" width="500px" />
        </div>

        <!-- Column 2 -->
        <div class="bg-gray-200 p-4 overflow-hidden">
          <nuxt-img src="/images/big_table_2.webp" class="md:hover:scale-125 duration-300 object-cover h-full w-full" format="webp" height="600px" width="500px"  />
        </div>

        <!-- Column 3 -->
        <div class="bg-gray-200 p-4 overflow-hidden">
          <nuxt-img src="/images/desk_2.webp" class="md:hover:scale-125 duration-300 object-cover h-full w-full" format="webp" height="600px" width="500px"/>
        </div>

        <!-- Column 6 -->
        <div class="bg-gray-200 p-4 overflow-hidden">
          <nuxt-img src="/images/big_table_1.webp" class="md:hover:scale-125 duration-300 object-cover h-full w-full" format="webp" height="600px" width="500px"/>
        </div>
        <!-- Column  4-->
        <div class="bg-gray-200 p-4 overflow-hidden">
          <nuxt-img
              src="/images/table_console.webp"
              class="md:hover:scale-125 duration-300 object-cover h-full w-full"
              format="webp" height="600px" width="500px"
          />
        </div>





      </div>
    </div>
  </div>
</template>

<style scoped>

</style>