<template>
  <div>
    <Hero />
    <Features />
    <About />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Features from '~/components/Features/Features.vue'
import About from '~/components/About.vue'

export default {

  components: {
    Hero,
    Features,
    About
  },
  layout: 'default',
  amp: 'false',
  ampLayout: 'amp',
  head () {
    // todo: в модуле nuxt amp не работали нормально пути ,пока костыль
    const originUrl = process.env.ORIGIN_URL || 'https://life2film.com'
    let pathAmp = originUrl + '/amp/'
    if (this.$route.path !== '/') {
      pathAmp = originUrl + this.$route.path + 'amp/'
    }
    return {
      link: [
        { rel: 'amphtml', href: pathAmp }
      ]
    }
  }
}
</script>

<style>

</style>
