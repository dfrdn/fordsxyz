<template>
  <a :href="to" class="bg-white rounded shadow hover:shadow-md">
    <div class="object-fill overflow-hidden">
      <img :src="img" alt="" />
    </div>
    <div class="text-xl">
      <h1>{{ heading }}</h1>
    </div>
    <div class="">
      <p>{{ details }}</p>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    img: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    details: {
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
