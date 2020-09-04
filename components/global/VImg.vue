<template>
  <div class="img">
    <img :src="imgSrc" :alt="alt" class="w-10/12 lg:w-2/3 mx-auto" />
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
        const { article } = this.$parent.$parent
        return require(`~/content${article.dir}/img/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
