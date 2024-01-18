<script setup>
const posts = ref([
  {
    id: 1,
    title: "Principles of Minimalist Design",
    link: "/blog/principles-minimalist-design",
  },
  {
    id: 2,
    title: "Minimalism in Furniture",
    link: "/blog/minimalism-furniture-history",
  },
  {
    id: 3,
    title: "Eco-Friendly Woods for Modern Design",
    link: "/blog/eco-friendly-woods-minimal-design",
  },
  
]);
</script>
<template>
  <div class="relative bg-white">

    <div class="fixed bg-white w-full top-0 z-10" >
        <h1 class="text-6xl">Perspectives</h1>
        <header class="flex items-center justify-evenly">
          <NuxtLink to="/"
            ><img src="/images/snap_logo_3.png" alt="snapstudio logo" width="75px"
          /></NuxtLink>
          <nav v-for="post in posts">
            <NuxtLink :to="post.link" class="hover:text-red-400">{{ post.title }}</NuxtLink>
          </nav>
        </header>
    </div>

    <NuxtPage class="h-3/4 mt-10" />
  </div>
</template>
