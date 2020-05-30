require('dotenv').config()

export default {
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: 'icon.png' },
      // PWA primary color
      { name: 'theme-color', content: '#0A0302' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      }
    ]
  },
  // pwa перезатирал заданные в шаблоне
  meta: {
    ogType: false,
    ogTitle: false,
    ogDescription: false,
    ogSiteName: false
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css'
    // '@/assets/css/theme_variables.scss',
    // '@/assets/css/grid.scss',
    // // '@/assets/css/icons.scss',
    // '@/assets/css/fonts.scss',
    // '@/assets/css/main.scss',
    // '@/assets/css/section.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/gtm',
    // '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    ['@nuxtjs/imagemin', {
      enableInDev: false
    }]
  ],
  // Docs: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      './assets/css/*.scss'
    ]
  },
  // Doc: https://github.com/nuxt-community/gtm-module
  gtm: {
    id: 'GTM-543TPGX'
    // dev: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    // '@nuxtjs/pwa',
    '@nuxtjs/amp',
    '@nuxtjs/sentry',
    // '@nuxtjs/feed',
    ['@nuxtjs/yandex-metrika',
      {
        id: '25369376',
        webvisor: true,
        clickmap: true,
        // useCDN:false,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],
  // Docs: https://github.com/nuxt-community/amp-module
  // https://hashinteractive.com/blog/how-to-use-nuxt-amp-module-to-create-accelerated-mobile-pages/
  amp: {
    origin: process.env.ORIGIN_URL || 'http://localhost:3000',
    mode: 'hybrid' // could use `only` or `false` as well
  },
  pwa: {
    manifest: {
      name: 'LIFE2FILM Start Page',
      short_name: 'LIFE2FILM',
      description: 'AI Video Editor',
      lang: 'ru',
      start_url: process.env.ORIGIN_URL
    }
  },
  // Doc: https://github.com/nuxt-community/feed-module
  feed: [
    // A default feed configuration object
    {
      path: '/feed.xml', // The route to your feed.
      async create (feed) {
      }, // The create function (see below)
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'] // Will be passed as 2nd argument to `create` function
    }],
  i18n: {
    seo: true,
    // differentDomains: true,
    baseUrl: process.env.ORIGIN_URL || 'https://life2film.com',
    // Routes generation strategy, can be set to one of the following:
    // - 'no_prefix': routes won't be prefixed
    // - 'prefix_except_default': add locale prefix for every locale except default
    // - 'prefix': add locale prefix for every locale
    // - 'prefix_and_default': add locale prefix for every locale and default
    // strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    locales: [
      {
        code: 'ru',
        name: 'Russian',
        file: 'ru-RU.json',
        iso: 'ru-RU',
        domain: 'lifefilm.ru'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en-US.json',
        iso: 'en-US',
        domain: 'life2film.com'
      },
      {
        code: 'hi',
        name: 'Hindi',
        file: 'hi-IN.json',
        iso: 'hi-IN',
        domain: 'life2film.com'
      }
      // {
      //   code: 'ba',
      //   name: 'Bashkir',
      //   file: 'ba-RU.json',
      //   iso: 'ba-RU',
      //   domain: 'life2film.com'
      // }
    ],
    lazy: true,
    langDir: 'static/lang/',
    defaultLocale: 'ru'
  },
  sitemap: {
    hostname: process.env.ORIGIN_URL,
    i18n: {
      defaultLocale: 'en',
      routesNameSeparator: '___'
    },
    exclude: [
      '**/amp*'
    ]
  },
  // Docs: https://github.com/nuxt-community/sentry-module
  sentry: {
    dsn: 'https://38a090bca6764104965e0c12e239e9fb@o103263.ingest.sentry.io/5253109',
    config: {
      publishRelease: true,
      attachCommits: true
    }
  },
  // Docs: https://github.com/nuxt-community/fontawesome-module
  // fontawesome: {
  //   icons: {
  //     solid: ['robot']
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      preset: {
        browsers: 'cover 99.5%',
        autoprefixer: true
      }
    },
    extend(config, ctx) {
    }
  }
}
