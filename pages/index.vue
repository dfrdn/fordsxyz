<template>
  <section class="container m-auto p-6">
    <h1 class="text-right">Hi, I'm fords.</h1>
    <h2 class="text-right">
      I'm a
      <span
        ><vue-typer
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
        ></vue-typer></span
      >.
    </h2>
    <p class="text-gray-500 text-center italic">
      This site is under constant construction.
    </p>
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
  background-color: #1e1e1e;
}
.vue-typer .custom.char.selected {
  background-color: #264f78;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #3f51b5;
}
</style>
