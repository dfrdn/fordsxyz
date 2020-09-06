<template>
  <div class="lg:container p-6">
    <dev-card
      v-for="devwork in devworks"
      :key="devwork.dir"
      :heading="devwork.heading"
      :img="devwork.img"
      :details="devwork.details"
      :to="devwork.to"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const devworks = await $content('dev' || 'index', { deep: true }).fetch()
    return { devworks }
  },
  head() {
    return {
      title: 'Dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dev-related posts',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.nuxt-link:hover {
  text-decoration: none;
}
</style>
