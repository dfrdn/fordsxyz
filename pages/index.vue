<template>
  <section class="flex flex-col container m-auto flex-auto">
    <div class="flex-grow flex flex-col justify-center">
      <h1 class="text-right">Hi, I'm fords.</h1>
      <h2 class="text-right">
        I'm a
        <span class="font-mono"
          >[
          <vue-typer
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
          ></vue-typer>
          }.</span
        >
      </h2>
    </div>
    <div class="m-4 text-gray-500 text-center italic flex-shrink">
      <p>
        <span class="font-serif text-xl">“</span>All grown-ups were once
        children... but only few of them remember it.<span
          class="font-serif text-xl"
          >”</span
        >
      </p>
      <p>― Antoine de Saint-Exupéry, The Little Prince</p>
      <p class="my-4">This site is under constant construction.</p>
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
})
</script>

<style>
.vue-typer {
  font-family: monospace;
}

.vue-typer .custom.char {
  color: #d4d4bd;
  @apply text-gray-800
  /* background-color: #1e1e1e; */;
}
.vue-typer .custom.char.selected {
  /* background-color: #264f78; */
}

.vue-typer .custom.caret {
  /* width: 10px; */
  /* background-color: #3f51b5; */
}
</style>
