<template>
  <section class="flex flex-col container flex-auto m-auto">
    <div class="flex-grow flex flex-col justify-center mx-4 md:mx-0">
      <h1 class="text-right">Hi, I'm fords.</h1>
      <h2 class="text-right">
        I'm a
        <span class="font-mono">[</span>
        <client-only>
          <vue-typer
            class="inline"
            :text="roles"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="700"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="smooth"
          ></vue-typer
        ></client-only>
        <span class="font-mono">}.</span>
      </h2>
    </div>
    <div class="m-4 text-gray-500 text-center italic flex-shrink">
      <div class="text-sm md:text-base space-y-2 md:space-y-0">
        <p class="leading-tight">
          <span class="font-serif text-xl leading-none">“</span>All grown-ups
          were once children... but only few of them remember it.<span
            class="font-serif text-xl leading-none"
            >”</span
          >
        </p>
        <p>― Antoine de Saint-Exupéry, The Little Prince</p>
      </div>
      <p class="my-2 md:my-4 text-xs md:text-sm">
        This site is under constant construction.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      roles: ['developer', 'photographer', 'lawyer', 'learner'],
    }
  },
  head() {
    return {
      title: '[ this and that }.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'dev, law, photog, and everything in between',
        },
      ],
    }
  },
})
</script>

<style>
.vue-typer {
  font-family: monospace;
}

.vue-typer .custom.char {
  @apply text-gray-800;
}
.vue-typer .custom.char.selected {
  /* background-color: #264f78; */
}

.vue-typer .custom.caret {
  /* width: 10px; */
  /* background-color: #3f51b5; */
}
</style>
