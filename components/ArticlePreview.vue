<template>
  <nuxt-link
    :to="to"
    class="flex flex-col transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md p-4"
  >
    <h1 class="text-2xl">{{ title }}</h1>
    <p>{{ dateCreated }}</p>
    <p>{{ description }}</p>
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
      type: Date,
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
})
</script>

<style scoped></style>
