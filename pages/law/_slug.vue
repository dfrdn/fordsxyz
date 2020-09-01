<template>
  <article
    class="container prose lg:prose-lg xl:prose-xl px-4 py-4 lg:py-8 lg:px-0"
  >
    <h1>{{ article.title }}</h1>
    <li
      v-for="link of article.toc"
      :key="link.id"
      class="block"
      :class="{
        'font-semibold': link.depth === 2,
        'ml-2 font-light lg:text-lg no-underline': link.depth === 3,
      }"
    >
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
    <nuxt-content :document="article" />
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
</style>
