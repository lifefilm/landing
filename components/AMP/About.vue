<template>
  <section class="row section">
    <div class="column col-10 section-body">
      <h4>{{ $t('ABOUT.HEADER') }}</h4>
      <Button text="BUTTON.FREE" :gradient="true" :big="true" />
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

h4 {
  font-weight: 800;
  font-size: 4.5rem;
  line-height: 5rem;
  letter-spacing: 1px;
  text-transform: none;
  margin: 3rem 0;
}
.section-body{
  z-index: 1;
  text-align: center;
}

@media screen and (max-width: 960px) {
  .row {
    margin-bottom: 3rem;
    margin-top: 0rem;
  }
}

</style>
