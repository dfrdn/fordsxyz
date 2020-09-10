<template>
  <a
    :href="link"
    class="flex flex-col bg-white rounded shadow hover:shadow-lg overflow-hidden transition duration-150 ease-in-out"
    target="_blank"
  >
    <div class="object-fill overflow-hidden w-full">
      <img :src="imgurl" loading="lazy" :alt="`${heading} screenshot`" />
    </div>
    <div class="p-6">
      <div class="text-2xl lg:text-3xl font-semibold">
        <h1>{{ heading }}</h1>
      </div>
      <div class="">
        <ul class="text-sm lg:text-base list-disc list-inside">
          <li v-for="detail in formattedDetails" :key="detail">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </a>
</template>

<script lang>
import Vue from 'vue'

export default Vue.extend({
  props: {
    heading: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    try {
      const res = await fetch(
        `https://thisandthat.life/api/getScreenshot?link=${this.link}`
      )
      const { message: imgurl } = await res.json()
      this.imgurl = imgurl
    } catch (error) {
      console.log(error)
    }
  },
  data() {
    return {
      imgurl: '',
    }
  },
  computed: {
    formattedDetails() {
      return this.details.split('\n').filter((line) => line)
    },
  },
})
</script>

<style scoped></style>
