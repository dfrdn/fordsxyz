<template>
  <nav class="bg-gray-900">
    <div class="flex items-center justify-between flex-wrap lg:container py-6">
      <nuxt-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
        <!-- [ }. -->
        <!--logo goes here-->
        <span class="font-semibold text-xl tracking-tight">this and that.</span>
      </nuxt-link>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:w-auto">
        <div class="text-sm lg:ml-auto">
          <nuxt-link
            v-for="link in links"
            :key="link.label"
            :to="link.link"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4"
          >
            {{ link.label }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      links: [
        { label: 'dev', link: '/dev' },
        { label: 'law', link: '/law' },
        { label: 'photography', link: '/photography' },
      ],
    }
  },
})
</script>

<style scoped></style>
