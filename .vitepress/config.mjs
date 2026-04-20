export default {
  title: "你的API文档",
  description: "专业API文档网站",

  themeConfig: {
    nav: [
      { text: "指南", link: "/guide" },
      { text: "API", link: "/api" },
    ],

    sidebar: [
      {
        text: "指南",
        items: [
          { text: "介绍", link: "/guide" },
          { text: "安装", link: "/guide/install" },
        ],
      },
      {
        text: "API",
        items: [
          { text: "IObjectResolver", link: "/api/iobjectresolver" },
          { text: "LifetimeScope", link: "/api/lifetimescope" },
          { text: "Builder", link: "/api/builder" },
        ],
      },
    ],
  },
};