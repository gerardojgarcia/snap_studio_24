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
        ><nuxt-img src="favicon.png" width="75px"
      /></NuxtLink>

      
      <div
        class="absolute flex flex-col bg-white w-52 p-8 -translate-y-24 -translate-x-96 duration-300"
        v-if="visible"
      >
      
        <NuxtLink class="hover:text-red-200" to="/">Chairs</NuxtLink>
        <NuxtLink class="hover:text-red-200" to="/">Tables</NuxtLink>
        <NuxtLink class="hover:text-red-200" to="/">Built-ins</NuxtLink>
        
      </div>
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
