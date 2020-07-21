<template>
  <div class="container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  head () {
    const originUrl = process.env.ORIGIN_URL || 'https://life2film.com'
    let canonicalUrl = originUrl
    // todo: надо разобраться с разными доменами в i18
    if (this.$i18n.locale !== 'ru') {
      canonicalUrl = originUrl + '/' + this.$i18n.locale + '/'
    }
    // мета-описание
    const brand = {
      name: 'LIFE2FILM',
      title: this.$t('META.TITLE') || 'Online Video Maker - LIFE2FILM',
      description: this.$t('META.DESCRIPTION'),
      creator: '@life2film',
      url: canonicalUrl,
      img: '/img/hero.jpg',
      icon: 'icon.png',
      logo: 'icon.png'
    }
    return {
      title: this.$t('META.TITLE'),
      meta: [
        { hid: 'main' },
        { hid: 'description', name: 'description', content: brand.description },
        // Facebook
        { property: 'author', content: brand.creator },
        { property: 'fb:app_id', content: '1496810657232438' },
        { property: 'fb:profile_id', content: '1509787979299340' },
        { property: 'og:site_name', content: brand.url },
        { property: 'og:type', content: 'website' },
        // определяем локаль в файле страницы
        // { property: 'og:locale', content: 'en_US' },
        // Twitter
        { property: 'twitter:site', content: brand.url },
        { property: 'twitter:domain', content: brand.url },
        { property: 'twitter:creator', content: brand.creator },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:image:src', content: brand.img },
        { property: 'og:url', content: brand.url },
        { property: 'og:title', content: brand.title },
        { property: 'og:description', content: brand.description },
        { name: 'twitter:site', content: brand.url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: brand.img },
        { property: 'og:image', content: brand.img }
        // { property: 'og:image:width', content: '512' },
        // { property: 'og:image:height', content: '512' }
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ]
    }
  }
}

</script>
