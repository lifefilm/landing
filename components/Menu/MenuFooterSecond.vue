<template>
  <div class="menu">
    <ul>
      <li v-for="item in items" :key="item.index">
        <a :href="item.link" :title="$t(item.title)">{{ $t(item.title) }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MenuSecond',
  data () {
    return {
      items: [
        // {
        //   title: 'MENU.COOKIES',
        //   link: 'https://blog.life2film.com/wpautoterms/privacy-policy/'
        // },
        {
          title: 'MENU.PRIVACY',
          link: 'https://blog.life2film.com/wpautoterms/privacy-policy/'
        },
        {
          title: 'MENU.TERMS',
          link: 'https://blog.life2film.com/wpautoterms/terms-and-conditions/'
        }
      ]
    }
  }
}
</script>

<style scoped>

ul {
    display: flex;
    align-items: stretch; /* Default */
    justify-content: space-around;
    width: 100%;
    margin: 0;
    padding: 0;
}
li {
    display: block;
    flex: 0 1 auto; /* Default */
    list-style-type: none;
    font-size: 0.8rem;
}

</style>
