<script setup>
</script>
<template>
  <div class="flex flex-col">
    <nav class="md:space-x-4 h-10">
      <NuxtLink to="/" class=" hover:text-red-200 cursor-pointer">back to home</NuxtLink>

      <NuxtLink to="/products/chairs" class="hover:text-red-200  cursor-pointer">Chairs</NuxtLink>
      <NuxtLink to="/products/tables" class="hover:text-red-200  cursor-pointer">Tables</NuxtLink>
      <NuxtLink class="hover:text-red-200  cursor-pointer">Consoles</NuxtLink>
      <NuxtLink class="hover:text-red-200  cursor-pointer">Bookcases</NuxtLink>
      <NuxtLink class="hover:text-red-200  cursor-pointer">Built-ins</NuxtLink>
    </nav>
    <div>

      <NuxtPage/>


    </div>
  </div>
</template>

<style >

.router-link-active {
  color: rgb(198, 142, 142);

}


</style>
