<script setup>
const posts = ref([
  {
    id: 1,
    title: "Minimalism in Furniture History",
    image: "/images/history_of_minimalism/history_of_minimailsim_hero.webp",
    link: "/blog/minimalism-furniture-history",
    content:
      "Explore the evolution of minimalist design in furniture, tracing its historical roots.",
  },
  {
    id: 2,
    title: "Principles of Minimalist Design",
    image: "/images/principles_of_design/blog-post-1.webp",
    link: "/blog/principles-minimalist-design",
    content:
      "A deep dive into the core principles that define minimalist furniture design.",
  },
  {
    id: 3,
    title: "Eco-Friendly Woods for Modern Design",
    image: "/images/plywood_room2.webp",
    link: "/blog/eco-friendly-woods-minimal-design",
    content:
      "Exploring sustainable wood options for minimalist furniture.",
  },
  {
    id: 4,
    title: "Concrete Furniture: Examining the Use of Concrete in Crafting Minimalist Furniture",
    image: "/images/concrete_2.webp",
    link: "/blog/concrete-furniture-minimalist-approach",
    content:
        "Examining the use of concrete in crafting minimalist furniture.",
  },
  {
    id: 5,
    title: "Finding a Cabinetmaker in East Los Angeles",
    image: "/images/plywood_room3.webp",
    link: "/blog/cabinetmaker-east-los-angeles",
    content:
        "A handy guide to help you choose your next cabinetmaker",
  },
]);
</script>
<template>
    
  <div class="">
    <NuxtLink to="/" class="">back to home</NuxtLink>
      <div v-for="post in posts" :key="post.id" >
      
        <div class="blog-post border-black border-2 mx-2 md:mx-32 flex flex-col md:flex-row justify-evenly p-8 my-12">
          <div>
            <h1 class="font-bold text-2xl">{{ post.title }}</h1>
            <img :src="post.image" :alt="post.title" width="500px"  />
          </div>
          <div>
            <p class="mb-8">{{ post.content }}</p>
            <NuxtLink :to="post.link" class="hover:green-200 bg-black text-white p-4">Read more</NuxtLink>
          </div>
        </div>
      </div>
  </div>
</template>
