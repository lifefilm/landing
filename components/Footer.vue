<template>
  <footer>
    <div class="row menu-top">
      <div class="column col-3 navbar-logo">
        <a href="#" class="">
          <img src="@/assets/svg/logo-life2film.svg" alt="LIFE2FILM">
        </a>
      </div>
      <div class="column col-3">
        <MenuFooter />
      </div>
    </div>
    <div class="line " />
    <div class="row">
      <div class="column col-3">
        <MenuFooterSecond />
      </div>
      <div class="column col-5">
        <LangSwitch />
      </div>
    </div>
  </footer>
</template>

<script>
import MenuFooter from '~/components/Menu/MenuFooter'
import MenuFooterSecond from '~/components/Menu/MenuFooterSecond'
import LangSwitch from '~/components/LangSwitch'

export default {
  name: 'Footer',
  components: {
    MenuFooter,
    MenuFooterSecond,
    LangSwitch
  },
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

<style scoped>

.line {
  background: linear-gradient(#000020, #000000) no-repeat 100%;
  height: 1px;
}

img {
  width: 150px;
}

.row {
  margin: 1rem 0;
}

.menu-top {
  justify-content: left;
}

.column {
  align-self: center;
}
footer {
  margin: 5rem 0;
}

@media screen and (max-width: 960px) {

  .navbar-logo {
    display: none;
  }
}
</style>
