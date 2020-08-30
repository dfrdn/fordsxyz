<template>
  <div class="container p-6">
    <article-preview
      v-for="article in articles"
      :key="article.slug"
      :title="article.title"
      :date-created="article.createdAt"
      :description="article.description"
      :to="`/law/${article.slug}`"
      >{{ article }}</article-preview
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('law' || 'index').fetch()
    return { articles }
  },
})
</script>

<style lang="scss" scoped>
.nuxt-link:hover {
  text-decoration: none;
}
</style>
