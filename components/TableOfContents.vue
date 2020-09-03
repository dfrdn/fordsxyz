<template>
  <div class="space-y-2">
    <nuxt-link
      v-for="link in toc"
      :key="link.id"
      class="block"
      :class="{
        'font-semibold lg:text-xl': link.depth === 2,
        'pl-2 font-light lg:text-lg no-underline': link.depth === 3,
      }"
      :to="`#${link.id}`"
    >
      {{ link.text }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style scoped></style>
