export default {
  title: "我的框架 API",
  description: "我的游戏框架文档",

  themeConfig: {
    // 顶部导航
    nav: [
      { text: "首页", link: "/" },
      { text: "API 文档", link: "/api/" },
      { text: "指南", link: "/guide/" },
    ],

    // 左侧自动菜单
    sidebar: {
      "/api/": [
        {
          text: "API 参考",
          items: [
            { text: "IObjectResolver", link: "/api/resolver" },
            { text: "LifetimeScope", link: "/api/scope" },
            { text: "EventStack", link: "/api/event-stack" },
          ],
        },
      ],

      "/guide/": [
        {
          text: "使用指南",
          items: [
            { text: "快速开始", link: "/guide/" },
            { text: "安装", link: "/guide/install" },
          ],
        },
      ],
    },
  },
};