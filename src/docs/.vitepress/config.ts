import { DefaultTheme, defineConfig } from "vitepress";

function link(zh: boolean, _link: string): string {
  return (zh ? "/zh" : "") + _link;
}

function nav(zh: boolean): DefaultTheme.NavItem[] {
  return [
    {
      text: zh ? "首页" : "Home",
      link: link(zh, "/index"),
    },
    {
      text: "Cheerz",
      items: [
        { text: zh ? "配列布局" : "Layouts", link: link(zh, "/cheerz/layouts") },
        { text: zh ? "包装清单" : "Contents", link: link(zh, "/cheerz/contents") },
        { text: zh ? "安装指南" : "Assembly", link: link(zh, "/cheerz/assembly") },
        { text: zh ? "键位配置" : "Configuration", link: link(zh, "/cheerz/configuration") },
        { text: zh ? "下载支持" : "Downloads", link: link(zh, "/cheerz/downloads") },
        { text: zh ? "致谢" : "Credits", link: link(zh, "/cheerz/credits") },
      ],
    },
    {
      text: zh ? "关于" : "About",
      items: [
        { text: zh ? "团队" : "Team", link: link(zh, "/team") },
      ],
    },
  ];
}

export const en = defineConfig({
  lang: "en-US",
  themeConfig: {
    nav: nav(false),
    notFound: {
      code: "404",
      title: "P A G E N O T F O U N D",
      quote: "",
      linkLabel: "",
      linkText: "home",
    },
  },
});

export const zh = defineConfig({
  lang: "zh-Hans",
  themeConfig: {
    nav: nav(true),
    notFound: {
      code: "404",
      title: "这 页 面 谁 啊 我 把 它 踢 了",
      quote: "",
      linkLabel: "",
      linkText: "首页",
    },
  },
});

const shared = defineConfig({
  title: "pretendancers",
  description: "bake keebs with luv",
  // appearance: true,
  lastUpdated: true,
  // metaChunk: true,
  themeConfig: {
    siteTitle: false,
    logo: {
      light: "/about/ptdc.png",
      dark: "/about/ptdc_off.png",
    },
    // search: {
    //   provider: "local",
    // },
    footer: {
      message: "pretendancers 2025",
      copyright: "powered by VitePress",
    },
  },
  outDir: "../../docs",
});

export default defineConfig({
  ...shared,
  locales: {
    root: { label: "English", ...en },
    zh: { label: "简体中文", ...zh },
  },
});
