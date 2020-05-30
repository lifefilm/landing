<template>
  <section class="row section" :class="{'row-reverse': feature.id % 2 === 0 }">
    <div class="column col-5">
      <h3 class="section-header">
        {{ $t(feature.header) }}
      </h3>
      <span class="section-text">{{ $t(feature.text) }}</span>
    </div>
    <div class="column col-5 section-image">
      <img :src="feature.image" :alt="$t(feature.header)" loading="lazy">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  props: {
    feature: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
