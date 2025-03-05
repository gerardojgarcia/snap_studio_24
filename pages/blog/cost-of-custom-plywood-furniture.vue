<script setup lang="ts"></script>

<template>
  <div>
    <div class="blog_post_hero"></div>
    <section class="blog_post_introduction pt-16">
      <div class="flex space-x-16">
        <h1 class="text-6xl p-4 bg-white bg-opacity-75 w-2/3">
          The Cost of Customization
        </h1>
        <div class="translate-y-8">
          <p class="w-3/4 text-3xl">
            The allure of custom plywood furniture stands out for its uniqueness,
            sustainability, and the sheer joy of owning something tailored specifically to
            your taste and space. But with customization comes questions, especially about
            cost. What makes custom plywood furniture a pricier option, and are the
            additional expenses worth it? This post breaks down the factors that
            contribute to the cost of custom plywood furniture, offering insights into the
            craftsmanship behind each piece.
          </p>
        </div>
      </div>
    </section>
    <section class="blog_post_body space-y-6 m-16 py-16 flex flex-col justify-center">
      <h2 class="text-4xl font-bold mb-8">Material Quality</h2>

      <section class="py-12 mx-18 flex">
        <div>
          <strong class="text-4xl font-bold mb-8">Material Quality</strong>
          <p class="w-3/4 text-xl m-auto">
            Not all plywood is created equal. The price can vary significantly based on
            the type (e.g., softwood, hardwood, marine) and the quality of the veneers.
          </p>
          <p class="w-3/4 text-xl m-auto">
            Eco-friendly plywood options, such as those certified by the Forest
            Stewardship Council (FSC), may come with a premium but are worth considering
            for their environmental benefits.
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
