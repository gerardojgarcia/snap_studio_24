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
    content: "Exploring sustainable wood options for minimalist furniture.",
  },
  {
    id: 4,
    title:
      "Concrete Furniture: Examining the Use of Concrete in Crafting Minimalist Furniture",
    image: "/images/concrete_2.webp",
    link: "/blog/concrete-furniture-minimalist-approach",
    content: "Examining the use of concrete in crafting minimalist furniture.",
  },
  {
    id: 5,
    title: "Finding a Cabinetmaker in East Los Angeles",
    image: "/images/plywood_room3.webp",
    link: "/blog/cabinetmaker-east-los-angeles",
    content: "A handy guide to help you choose your next cabinetmaker",
  },
  {
    id: 6,
    title: "Minimalist Design for Small Spaces",
    image: "/images/plywood_room_1.webp",
    link: "/blog/minimal-design-small-spaces",
    content:
      "Tips for selecting and arranging minimalist furniture in small living spaces.",
  },
  {
    id: 7,
    title: "Softwoods: A Minimalist's Perspective",
    image: "/images/softwood_1.webp",
    link: "/blog/softwoods-minimalist-perspective",
    content: "Analyzing the use of softwoods in creating minimalist furniture pieces.",
  },
  {
    id: 8,
    title: "Custom Plywood Furniture: A Buyer’s Guide",
    image: "/images/workshop-1.webp",
    link: "/blog/custom-plywood-furniture-buyers-guide",
    content:
      "Explore the benefits, process, and what to look for in custom plywood furniture, offering a starting point for potential customers.",
  },
  {
    id: 9,
    title: "Crafting Custom Plywood Desks",
    image: "/images/plywood-desk-1.webp",
    link: "/blog/crafting-custom-plywood-desks",
    content:
      "Offer design ideas for custom plywood desks that enhance productivity and fit perfectly into any workspace.",
  },
  {
    id: 10,
    title: "The Cost of Customization",
    image: "/images/elegant-plywood-1.webp",
    link: "/blog/cost-of-custom-plywood-furniture",
    content:
      "Offer design ideas for custom plywood desks that enhance productivity and fit perfectly into any workspace.",
  },
]);
</script>
<template>
  <div class="">
    <NuxtLink to="/" class="">back to home</NuxtLink>
    <div v-for="post in posts" :key="post.id">
      <div
        class="blog-post border-black border-2 mx-2 md:mx-32 flex flex-col md:flex-row justify-evenly p-8 my-12"
      >
        <div>
          <h1 class="font-bold text-2xl w-96">{{ post.title }}</h1>
          <img :src="post.image" :alt="post.title" width="600px" height="500px" />
        </div>
        <div class="mx-16">
          <p class="mb-8">{{ post.content }}</p>
          <NuxtLink :to="post.link" class="hover:green-200 bg-black text-white p-4"
            >Read more</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  max-width: 600px;
  max-height: 500px;
}
</style>
