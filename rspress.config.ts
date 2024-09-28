import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  base: "/docs/",
  root: path.join(__dirname, "docs"),
  title: "GoravelAdmin",
  description: "GoravelAdmin",
  icon: "/goravel-logo.png",
  logo: {
    light: "/goravel-logo.png",
    dark: "/goravel-logo.png",
  },
  themeConfig: {
    lastUpdated: true,
    lastUpdatedText: "更新于",
    enableScrollToTop: true,
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/wcz0/goravel-admin",
      },
      {
        icon: "qq",
        mode: "link",
        content: "https://jq.qq.com/?_wv=1027&k=5La4Ir6c",
      },
    ],
    editLink: {
      docRepoBaseUrl: "https://github.com/goravel-admin/docs/tree/master/docs",
      text: "📝 在 GitHub 上编辑此页",
    },
    prevPageText: "上一篇",
    nextPageText: "下一篇",
    outlineTitle: "目录",
    searchPlaceholderText: "搜索",
    searchNoResultsText: "未搜索到相关结果",
    searchSuggestedQueryText: "可更换不同的关键字后重试",
  },
});
