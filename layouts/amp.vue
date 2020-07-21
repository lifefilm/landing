<template>
  <amp-body>
    <Nuxt />
  </amp-body>
</template>

<script>
export default {
  nuxtI18n: false,
  head () {
    // мета-описание
    const brand = {
      name: 'LIFE2FILM',
      title: this.$t('META.TITLE') || 'Online Video Maker - LIFE2FILM',
      description: this.$t('META.DESCRIPTION'),
      creator: '@life2film',
      url: process.env.ORIGIN_URL || 'https://life2film.com',
      img: '/img/hero.jpg',
      icon: 'icon.png',
      logo: 'icon.png'
    }
    // const originUrl = process.env.ORIGIN_URL || 'http://localhost:3000'
    // const canonicalUrl = originUrl + '/' + this.$i18n.locale
    // if (this.$i18n.locale === 'ru') {
    //   canonicalUrl = 'lifefilm.ru'
    // }
    // TODO: сделать только 1 ссылку canonical https://github.com/nuxt-community/amp-module/issues/144
    // const i18nSeo = this.$nuxtI18nSeo()
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
        // { rel: 'canonical', href: canonicalUrl }
      ]
    }
  }
}

</script>

<style lang="scss" >
  @import '~/assets/css/amp.scss';
</style>
