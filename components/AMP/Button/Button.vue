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
      default: 'https://new.life2film.com/editor',
      type: String
    }
  }
}
</script>

<style lang="scss" >
@import './button.scss';
</style>
