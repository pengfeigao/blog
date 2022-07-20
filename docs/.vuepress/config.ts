import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "技术笔记",
  description: "技术笔记",
  base: "/",
  theme,
});
