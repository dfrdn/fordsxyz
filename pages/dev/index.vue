<template>
  <div class="container p-6 flex flex-wrap space-4">
    <dev-card
      v-for="devwork in devworks"
      :key="devwork.dir"
      :heading="devwork.heading"
      :imgurl="`${devwork.dir}/img/${devwork.img}`"
      :details="devwork.details"
      :link="devwork.to"
      class="w-full md:w-1/2 lg:w-1/3"
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
