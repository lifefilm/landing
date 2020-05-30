<template>
  <a
    :href="link"
    class="btn"
    :class="{'btn-gradient': gradient===true, 'btn-big': big===true}"
  >
    {{ $t(text) }}
  </a>
</template>

<script>
const actionUrl = process.env.BUTTON_ACTION_URL || 'https://life2film.com/editor/'
export default {
  name: 'Button',
  props: {
    icon: {
      default: null,
      type: String
    },
    gradient: {
      default: false,
      type: Boolean
    },
    big: {
      default: false,
      type: Boolean
    },
    text: {
      default: 'BUTTON.CREATE',
      type: String
    },
    link: {
      default: actionUrl,
      type: String
    }
  }
}
</script>

<style lang="scss" >
@import './button.scss';
</style>
