<template>
  <div>
    <Hero />
    <Features />
  </div>
</template>

<script>
import Hero from '~/components/AMP/Hero.vue'
import Features from '~/components/AMP/Features/Features.vue'

export default {
  components: {
    Hero,
    Features
  },
  layout: 'amp',
  amp: 'only',
  ampLayout: 'amp',

  head () {
    // const originUrl = process.env.ORIGIN_URL || 'http://localhost:3000'
    // let localeISO = 'en_US'
    // let localeCODE = '/en/amp/'
    // if (this.$i18n.locale === 'ru') {
    //   localeISO = 'ru_RU'
    //   localeCODE = '/amp/'
    // }
    return {
      title: this.$t('META.TITLE') + ' - LIFE2FILM',
      meta: [
        {
          hid: 'main'
        },
        {
          hid: '',
          name: '',
          content: this.$t('META.TITLE')
        },
        { name: 'amp-google-client-id-api', content: 'googleanalytics' }
      ]
    }
  }
}
</script>

<style>

</style>
