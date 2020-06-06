<template>
  <section class="row section">
    <div class="column col-5 section-body">
      <h1>{{ $t('HERO.HEADER') }}</h1>
      <h2>{{ $t('HERO.SUBHEADER') }}</h2>
      <Button text="BUTTON.CREATE" :gradient="true" :big="true" />
    </div>
    <div class="column col-6 section-image">
      <img src="/img/hero.jpg" :alt="$t('META.TITLE')">
    </div>
  </section>
</template>

<script>
import Button from '~/components/Common/Button'
export default {
  name: 'Hero',
  components: { Button }
}
</script>

<style scoped>

.row {
  margin-bottom: 10rem;
  margin-top: 5rem;
}

h1 {
  font-weight: 800;
  font-size: 4.5rem;
  line-height: 5rem;
  letter-spacing: 1px;
  text-transform: none;
  margin: 1rem 0;
}
h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: none;
  margin-bottom: 2.5rem;
}

.section-body{
  z-index: 1;
}

@media screen and (max-width: 960px) {
  .row {
    margin-bottom: 3rem;
    margin-top: 0rem;
  }
  h1{
    font-size: calc(4vw + 4vh + 0vmin);
    line-height: calc(4vw + 4vh + 0vmin);
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

}

</style>
