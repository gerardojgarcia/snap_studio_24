// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image',
  'nuxt-gtag'],

  app: {
    head: {

                    charset: 'utf-16',
                    viewport: 'width=device-width, initial-scale=1',
                    title: 'snapstudio!! - Handmade furnishings. Based in East Los Angeles',
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
                    meta: [
                    // <meta name="description" content="My amazing site">
                    { name: 'description', content: 'Handmade home goods. Based in East Los Angeles' }
                        ],
                        htmlAttrs: {
                                    lang: 'en',
                            },
    },
    pageTransition: {name: 'slide-right',
    mode: 'out-in'},
},

  nitro: {
    compressPublicAssets: true,
    prerender: {
                    crawlLinks: true,
    }
},
    gtag: {
        id: 'G-923HZRL5MF'
    }


})
