<template>
  <div class="lang_switcher">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'LangSwitcher',
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted () {
    this.lang = this.$i18n.locale
  }
}
</script>

<style>

  .lang_switcher {
    text-align: center;
  }
  .lang_switcher a {
    margin:0 10px;
  }
  /*.lang_switcher a {*/
  /*    border: 1px solid green;*/
  /*    padding: 10px;*/
  /*}*/

</style>
