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
  {
    id: 4,
    title: "Concrete Furniture: Examining the Use of Concrete",
    link: "/blog/concrete-furniture-minimalist-approach",
  },
  {
    id: 5,
    title: "Cabinetmaker in East Los Angeles",
    link: "/blog/cabinetmaker-east-los-angeles",
  },
  
]);
</script>
<template>
  <div class="grid grid-cols-4 h-screen">

    <div class="fixed bg-white w-full h-full top-0 z-10 col-span-1" >
        <h1 class="text-6xl">Perspectives</h1>
        <header class="flex flex-col items-center justify-evenly">
          <NuxtLink to="/"
            ><img src="/images/snap_logo_3.png" alt="snapstudio logo" width="75px"
          /></NuxtLink>
          <nav v-for="post in posts">
            <NuxtLink :to="post.link" class="hover:text-red-400">{{ post.title }}</NuxtLink>
          </nav>
        </header>
    </div>

    <div class="col-start-2 col-span-3">
      <NuxtPage class="h-3/4 mt-10" />
    </div>

  </div>
</template>
