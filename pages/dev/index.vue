<template>
  <div
    class="container p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4"
  >
    <dev-card
      v-for="devwork in devworks"
      :key="devwork.dir"
      :heading="devwork.heading"
      :details="devwork.details"
      :link="devwork.to"
      class="w-full"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const devworks = await $content('dev' || 'index', {
      deep: true,
    }).fetch()

    return { devworks }
  },
  head() {
    return {
      title: 'Dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Some of my dev works',
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
