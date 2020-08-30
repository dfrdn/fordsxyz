<template>
  <nuxt-link
    :to="to"
    class="flex flex-col transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md p-8 my-10"
  >
    <h1 class="text-2xl py-2">{{ title }}</h1>
    <p class="text-gray-500 text-sm">{{ formatDate(dateCreated) }}</p>
    <p v-for="desc in formatDescription(description)" :key="desc" class="py-2">
      {{ desc }}
    </p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: 'Daniel Fordan',
    },
    description: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatDate(date: string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-gb', options)
    },
    formatDescription(desc: string) {
      return desc.split('\n')
    },
  },
})
</script>

<style scoped></style>
