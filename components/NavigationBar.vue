<template>
  <nav class="bg-gray-900">
    <div
      class="flex items-center justify-between flex-wrap lg:container py-6 px-4 lg:px-0"
    >
      <nuxt-link
        to="/"
        class="logo flex items-center flex-shrink-0 text-white mr-6 transition-colors duration-500 ease-in-out hover:text-teal-600"
      >
        <!-- [ }. -->
        <!--logo goes here-->
        <span class="font-semibold text-2xl tracking-tight"
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
        class="w-full flex-grow lg:flex lg:w-auto"
        :class="menuIsActive ? 'block' : 'hidden'"
      >
        <div class="text-sm sm:text-base lg:ml-auto lg:space-x-4">
          <nuxt-link
            v-for="link in links"
            :key="link.label"
            :to="link.link"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white transition-colors duration-500 ease-in-out"
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
.nuxt-link-exact-active:not(.logo) {
  @apply border-b-2 text-white font-semibold;
}
.nuxt-link-exact-active:is(.logo) {
  @apply text-teal-500;
}
</style>
