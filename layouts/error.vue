<template>
  <div class="container">
    <div class="row">
      <div class="column col-5">
        <h1 v-if="error.statusCode === 404">
          404: Page not found
        </h1>
        <h1 v-else>
          An error occurred
        </h1>
        <nuxt-link to="/">
          Go to: home page
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'simple',
  head () {
    return {
      title: '400 ERROR'
    }
  }
}
</script>
