<template>
  <nuxt-link
    :to="to"
    class="flex flex-col transition duration-150 ease-in-out shadow hover:shadow-lg my-10 overflow-hidden rounded group space-y-4 py-6"
  >
    <div class="mx-8">
      <h1 class="text-3xl font-bold text-gray-800 group-hover:underline">
        {{ title }}
      </h1>
      <h2 v-if="subtitle" class="text-xl italic text-gray-700">
        {{ subtitle }}
      </h2>
      <p class="text-gray-500 text-sm mt-2">{{ formattedDate }}</p>
    </div>
    <div class="space-y-2 mx-8">
      <p v-for="desc in formattedDescription" :key="desc">
        {{ desc }}
      </p>
    </div>
    <div
      id="continue-reading"
      class="text-sm mx-8 group-hover:text-gray-600 group-hover:font-semibold"
    >
      <p>
        Continue Reading
        <svg
          id="arrow"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 inline-block transform group-hover:scale-x-125 group-hover:translate-x-1 transition duration-150 ease-in-out"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </p>
    </div>
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
    subtitle: {
      type: String,
      default: '',
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

  computed: {
    formattedDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.dateCreated).toLocaleDateString('en-gb', options)
    },
    formattedDescription() {
      return this.description.split('\n').filter((par) => par)
    },
  },
})
</script>

<style lang="scss"></style>
