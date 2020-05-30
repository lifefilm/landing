<template>
  <header class="row">
    <div class="column navbar-logo">
      <a href="/">
        <img src="@/assets/svg/logo-life2film.svg" alt="LIFE2FILM">
      </a>
    </div>
    <div class="column col-4 lang_switcher-header">
      <LangSwitch />
    </div>
    <div class="navbar-btn">
      <Button text="BUTTON.LOGIN" :link="link" />
    </div>
  </header>
</template>

<script>
import Button from '~/components/Common/Button'
import LangSwitch from '~/components/LangSwitch'
const loginUrl = process.env.BUTTON_LOGIN_URL || 'https://life2film.com/editor/'
export default {
  name: 'Header',
  components: {
    Button,
    LangSwitch
  },
  props: {
    link: {
      default: loginUrl,
      type: String
    }
  }
}
</script>

<style scoped>

img {
  width: 178px;
}

.row {
  justify-content: space-between;
  margin: 1.5rem;
}

.navbar-btn, .navbar-logo, .lang_switcher-header {
  align-self: center
}

@media screen and (max-width: 960px) {
  .row {
    /*margin: 1.5rem 0;*/
  }
  .navbar-logo{
    text-align: center;
  }
  .lang_switcher-header, .navbar-btn {
    display: none;
  }
}

</style>
