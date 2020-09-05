<template>
  <div class="img">
    <svg
      v-if="!imgSrc"
      class="animate-spin h-5 w-5 fill-current bg-gray-600 m-auto"
      viewBox="0 0 24 24"
    >
      <!-- ... -->
    </svg>
    <img :src="imgSrc" :alt="alt" class="w-10/12 lg:w-2/3 m-auto" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      try {
        const article =
          this.$parent._data.article ?? this.$parent.$parent.article
        return require(`~/content${article.dir}/img/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
