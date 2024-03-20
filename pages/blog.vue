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
  {
    id: 6,
    title: "Minimalist Design for Small Spaces",
    link: "/blog/minimal-design-small-spaces",
  },
  {
    id: 7,
    title: "Softwood in Minimalist Design",
    link: "/blog/softwoods-minimalist-perspective",
  },
  {
    id: 8,
    title: "Custom Plywood Furniture: A Buyer’s Guide",
    link: "/blog/custom-plywood-furniture-buyers-guide",
  },
  {
    id: 9,
    title: "Crafting Custom Plywood Desks",
    link: "/blog/crafting-custom-plywood-desks",
  },
]);
</script>
<template>
  <div class="grid grid-cols-4 h-screen">
    <div class="fixed bg-white w-52 h-full top-0 z-10 col-start-1 col-span-1" >

        <header class="flex flex-col items-center ml-2 justify-evenly">
          <NuxtLink to="/"
            ><img src="/images/snap_logo_3.png" alt="snapstudio logo" width="75px"
          /></NuxtLink>
          <nav v-for="post in posts">
            <NuxtLink :to="post.link" class="hover:text-red-400 focus:text-red-500">{{ post.title }}</NuxtLink>
          </nav>
        </header>
    </div>

    <div class="col-start-2 col-span-3">
      <NuxtPage  />
    </div>

  </div>
</template>
<style>
.router-link-active {
    color: rgb(198, 142, 142) ;
}

</style>
