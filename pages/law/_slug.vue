<template>
  <article class="container p-6">
    <h1>{{ article.title }}</h1>
    {{ article.updatedAt }}
    <nuxt-content :document="article" class="container p-6" />
  </article>
</template>

<script lang="ts">
export default {
  async asyncData({ $content, params }) {
    const article = await $content('law', params.slug).fetch()

    return { article }
  },
}
</script>

<style scoped></style>
