<template>
  <article class="mx-auto px-4 py-4 lg:py-8 lg:px-0">
    <div class="text-center mb-6">
      <h1 class="text-4xl md:text-6xl font-bold">
        {{ article.title }}
      </h1>
      <!-- <h2>{{ article.createdAt }}</h2>
      <h2>{{ article.author || 'Daniel Fordan' }}</h2> -->
    </div>
    <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
      <div class="m-0 lg:mt-2">
        <table-of-contents id="toc" :toc="article.toc" class="lg:sticky" />
        <hr class="mt-4 block lg:hidden" />
      </div>
      <nuxt-content :document="article" class="prose lg:prose-lg xl:prose-xl" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('law', params.slug).fetch()
    return { article }
  },
})
</script>

<style lang="scss">
.nuxt-content {
  h2 {
    @apply text-2xl my-4 py-2;
  }
  h3 {
    @apply text-xl my-4 py-2;
  }
  p {
    @apply my-4 text-justify;
  }
}

#toc {
  top: 20px;
  .is-active {
    @apply underline;
  }
}
</style>
