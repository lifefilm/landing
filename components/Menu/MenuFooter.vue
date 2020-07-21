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
  name: 'Menu',
  data () {
    return {
      items: [
        {
          title: 'MENU.ABOUT',
          link: 'https://blog.life2film.com/about/'
        },
        {
          title: 'MENU.BLOG',
          link: 'https://blog.life2film.com/'
        },
        {
          title: 'MENU.CONTACTS',
          link: 'https://blog.life2film.com/contacts/'
        },
        {
          title: 'MENU.OLD',
          link: 'https://old.life2film.com/'
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
}

</style>
