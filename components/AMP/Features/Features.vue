<template>
  <div class="landing-features">
    <FeaturesRow
      v-for="feature in features"
      :key="feature.id"
      :feature="feature"
    />
  </div>
</template>

<script>
import FeaturesRow from '~/components/AMP/Features/FeaturesRow'

export default {
  name: 'Features',
  components: { FeaturesRow },
  data () {
    return {
      features: [
        {
          id: 1,
          header: 'FEATURES.1.HEADER',
          text: 'FEATURES.1.TEXT',
          button: 'BUTTON.MORE',
          link: '',
          image: '/img/features1.jpg'
        },
        {
          id: 2,
          header: 'FEATURES.2.HEADER',
          text: 'FEATURES.2.TEXT',
          button: 'BUTTON.MORE',
          link: '',
          image: '/img/features3.jpg'
        },
        {
          id: 3,
          header: 'FEATURES.3.HEADER',
          text: 'FEATURES.3.TEXT',
          button: 'BUTTON.MORE',
          link: '',
          image: '/img/features2.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
