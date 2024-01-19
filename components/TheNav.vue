<script setup>
const visible = ref(false);

function toggleDropdown() {
  visible.value = !visible.value;
}
</script>
<template>
  <header class="flex w-full">
    <nav class="flex justify-evenly items-center w-full relative">
      <NuxtLink to="/" class="hover:text-red-200"
        ><nuxt-img src="favicon.png" width="50px" height="50px" alt="snapstudio logo"
      /></NuxtLink>

      
      <NuxtLink to="/products" class="hover:text-red-200">Products</NuxtLink>
      <NuxtLink class="hover:text-red-200" to="/perspectives">Perspectives</NuxtLink> 
      
      <NuxtLink to="/" class="hover:text-red-200">info</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  min-height: 5vh;
}
</style>
