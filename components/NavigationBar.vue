<template>
  <nav class="bg-gray-900">
    <div
      class="flex items-center justify-between flex-wrap lg:container py-6 px-4 lg:px-0"
    >
      <nuxt-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
        <!-- [ }. -->
        <!--logo goes here-->
        <span class="font-semibold text-xl tracking-tight"
          >[ this and that }.</span
        >
      </nuxt-link>
      <div class="block lg:hidden" @click="menuIsActive = !menuIsActive">
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

      <div
        class="w-full flex-grow lg:flex lg:w-auto transform transition-all duration-200 ease-in-out"
        :class="menuIsActive ? 'block' : 'hidden'"
      >
        <div class="text-sm sm:text-base lg:ml-auto lg:space-x-4">
          <nuxt-link
            v-for="link in links"
            :key="link.label"
            :to="link.link"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
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
      menuIsActive: false,
      links: [
        { label: 'dev', link: '/dev' },
        { label: 'law', link: '/law' },
        { label: 'photography', link: '/photography' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
nav {
  transition: all;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}
</style>
