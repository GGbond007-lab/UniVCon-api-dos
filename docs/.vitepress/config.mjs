export default {
  base: "/UniVCon-api-dos/",
  title: "VContainer",
  description: "The extra fast DI (Dependency Injection) library for Unity Game Engine",
  
  head: [
    ['link', { rel: 'icon', href: 'https://vcontainer.hadashikick.jp/favicon.ico' }],
  ],

  themeConfig: {
    logo: 'https://vcontainer.hadashikick.jp/images/logo.svg',
    
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/' },
            { text: 'Installation', link: '/guide/install' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'IObjectResolver', link: '/api/resolver' },
            { text: 'LifetimeScope', link: '/api/scope' },
            { text: 'EventStack', link: '/api/event-stack' },
          ],
        },
      ],
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 hadashiA',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hadashiA/VContainer' },
    ],

    search: {
      provider: 'local',
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    
    lineNumbers: true,
  },

  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
}