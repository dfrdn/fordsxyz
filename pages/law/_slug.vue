<template>
  <article class="mx-auto px-4 py-4 lg:py-8 lg:px-0">
    <client-only>
      <vue-scroll-progress-bar
        height="0.25rem"
        background-color="linear-gradient(to right, #4a5568, #2d3748)"
      />
    </client-only>
    <div class="text-center mb-6">
      <h1 class="text-3xl md:text-5xl font-bold">
        {{ article.title }}
      </h1>
      <h2 v-if="article.subtitle" class="text-xl md:text-2xl italic">
        {{ article.subtitle }}
      </h2>
      <!-- <h2>{{ article.createdAt }}</h2>
      <h2>{{ article.author || 'Daniel Fordan' }}</h2> -->
    </div>
    <div
      class="lg:container flex flex-col justify-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10"
    >
      <div class="m-0 lg:mt-2 max-w-xs">
        <table-of-contents id="toc" :toc="article.toc" class="lg:sticky" />
        <hr class="mt-4 block lg:hidden" />
      </div>
      <div class="">
        <nuxt-content
          :document="article"
          class="prose lg:prose-lg xl:prose-xl"
        />
      </div>
    </div>
  </article>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const [article] = await $content('law', params.slug, { deep: true }).fetch()
    return { article }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.nuxt-content {
  p {
    @apply text-justify;
  }
  .footnotes {
    @apply text-sm;
  }
}

#toc {
  top: 20px;
  .is-active {
    @apply underline;
  }
}
</style>
