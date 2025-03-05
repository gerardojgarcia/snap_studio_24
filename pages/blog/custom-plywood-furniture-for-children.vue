<script setup lang="ts"></script>

<template>
  <div>
    <div class="blog_post_hero"></div>
    <section class="blog_post_introduction pt-16">
      <div class="flex space-x-16">
        <h1 class="text-6xl p-4 bg-white bg-opacity-75 w-2/3">
          Children’s Custom Plywood Furniture Ideas
        </h1>
        <div class="translate-y-8">
          <p class="w-3/4 text-3xl">
            When it comes to decorating children's rooms or play areas, the goals are
            clear: stimulate creativity, ensure safety, and withstand the test of time
            (and play). Custom plywood furniture offers a perfect solution, combining the
            durability of plywood with the potential for imaginative shapes and sizes.
            This guide will walk you through designing furniture that sparks joy, fosters
            learning, and keeps safety in the forefront, making every penny spent on
            customization worth it.
          </p>
        </div>
      </div>
    </section>
    <section class="blog_post_body space-y-6 m-16 py-16 flex flex-col justify-center">
      <h2 class="text-4xl font-bold mb-8">Starting with Safety</h2>

      <section class="py-12 mx-18 flex">
        <div>
          <p class="w-3/4 text-xl m-auto">
            Opt for finishes that are free from harmful chemicals, ensuring a safe
            environment for children to play and sleep.
          </p>
          <p class="w-3/4 text-xl m-auto">
            Design furniture with rounded corners and smooth edges to minimize the risk of
            injuries.
          </p>
        </div>
        <NuxtImg
          src="/images/cost-plywood-1.webp"
          preload
          width="600px"
          class="m-auto py-16"
        />
      </section>

      <strong class="text-4xl font-bold mb-8">Labor and Craftsmanship</strong>
      <div class="flex items-start space-x-6">
        <p class="w-1/2 text-xl">
          Custom furniture making is a labor-intensive process that requires significant
          time and skill, contributing to higher labor costs.
        </p>

        <p class="w-1/2 text-xl">
          Skilled craftsmen with years of experience command higher wages for their
          expertise in turning your visions into reality.
        </p>
      </div>

      <NuxtImg
        src="/images/cost-plywood-2.webp"
        preload
        width="900px"
        class="m-auto py-16"
      />

      <strong>Design Complexity</strong>
      <p class="w-3/4 text-xl m-auto">
        The more complex the design, the higher the cost. Simple modifications to existing
        designs are generally more affordable than fully customized pieces.
      </p>

      <p class="w-3/4 text-xl m-auto">
        Unique designs may require additional engineering and prototyping to ensure
        structural integrity, adding to the overall cost.
      </p>

      <NuxtImg
        src="/images/cost-plywood-3.webp"
        preload
        width="900px"
        class="m-auto py-16"
      />

      <div class="m-8 flex flex-col">
        <p class="text-2xl mt-16">
          Custom plywood furniture costs are influenced by the choice of materials, the
          level of craftsmanship, and the complexity of the design. While the initial
          price tag might be higher compared to off-the-shelf options, the value of a
          custom piece lies in its uniqueness, durability, and the personalization it
          brings to a space. Investing in custom furniture also supports skilled artisans
          and sustainable practices, contributing to a more ethical and environmentally
          friendly industry.
        </p>
      </div>

      <strong class="text-2xl pt-32"
        >By understanding the factors that contribute to the cost, consumers can make
        informed decisions that balance their desires for customization with their budget
        constraints. Whether it's a simple shelf or a complex statement piece, custom
        plywood furniture has the power to transform a space, making it uniquely yours. As
        we look towards a more sustainable and personalized future in home decor, the
        question isn't just about the cost but the value that custom furniture brings to
        our lives and spaces.</strong
      >
    </section>
    <TheSmallProductCarousel />
  </div>
</template>

<style scoped>
.blog_post_hero {
  background-image: url("/images/elegant-plywood-1.webp");
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  text-indent: 2em;
}
</style>
