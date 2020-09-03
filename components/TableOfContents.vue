<template>
  <client-only>
    <scrollactive class="space-y-2">
      <a
        v-for="link in toc"
        :key="link.id"
        class="block scrollactive-item"
        :class="{
          'font-semibold lg:text-xl': link.depth === 2,
          'pl-2 font-light lg:text-lg no-underline': link.depth === 3,
        }"
        :href="`#${link.id}`"
      >
        {{ link.text }}
      </a>
    </scrollactive>
  </client-only>
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
