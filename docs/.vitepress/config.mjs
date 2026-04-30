export default {
  base: "/UniVCon-api-dos/",
  title: "开发框架",
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
          text: '选择你的工作流',
          items: [
            { text: 'Web前端', link: '/Web/web' },
            { text: 'Unity3D', link: '/Unity3D/unity3D' },
            { text: '场景美术', link: '/SceneArt/sceneArt' },
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