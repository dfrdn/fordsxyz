<template>
  <div
    class="container p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4"
  >
    <dev-card
      v-for="devwork in devworks"
      :key="devwork.dir"
      :heading="devwork.heading"
      :imgurl="devwork.imgurl"
      :details="devwork.details"
      :link="devwork.to"
      class="w-full"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Work {
  heading: string
  to: string
  details: string
  imgurl?: string
}

export default Vue.extend({
  async asyncData({ $content, $http }) {
    const worksData: Work[] = await $content('dev' || 'index', {
      deep: true,
    }).fetch()

    const devworks = await Promise.all(
      worksData.map(async (devwork: Work) => {
        const res = await $http.get(`/api/getScreenshot?link=${devwork.to}`)
        const imgurl = await res.text()
        devwork.imgurl = imgurl
        return devwork
      })
    )
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
