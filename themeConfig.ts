import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    wireframe: false,
  },
  components: {
    Button: {
      defaultBg: "rgb(30, 41, 59)",
      defaultActiveColor: "rgb(114, 46, 209)",
      defaultBorderColor: "rgb(248, 250, 252)",
      defaultColor: "rgb(241, 245, 249)",
      defaultHoverBg: "rgb(136, 19, 55)",
      defaultHoverBorderColor: "rgb(248, 250, 252)",
      defaultHoverColor: "rgb(241, 245, 249)",
      defaultActiveBorderColor: "rgb(114, 46, 209)",
      colorLink: "rgb(114, 46, 209)",
      colorLinkHover: "rgb(114, 46, 209)",
      colorLinkActive: "rgb(136, 19, 55)",
      colorPrimary: "rgb(30, 41, 59)",
      colorPrimaryActive: "rgb(238, 237, 239)",
      colorPrimaryHover: "rgb(136, 19, 55)",
      colorPrimaryBorder: "rgb(114, 46, 209)",
      colorText: "rgb(114, 46, 209)",
      colorBgTextActive: "rgba(114, 46, 209, 0.08)",
    },
    Layout: {
      bodyBg: "rgba(245, 245, 245, 0)",
      footerBg: "rgba(245, 245, 245, 0)",
      headerBg: "rgba(0, 21, 41, 0)",
      headerColor: "rgba(0, 0, 0, 0)",
      lightSiderBg: "rgba(255, 255, 255, 0)",
      lightTriggerBg: "rgba(255, 255, 255, 0)",
      lightTriggerColor: "rgba(0, 0, 0, 0)",
      siderBg: "rgba(0, 21, 41, 0)",
      triggerBg: "rgba(0, 33, 64, 0)",
      triggerColor: "rgba(255, 255, 255, 0)",
    },
    Input: {
      activeBg: "rgb(241, 245, 249)",
      activeBorderColor: "rgb(112, 128, 144)",
      colorBgContainer: "rgba(0, 0, 0, 0)",
      colorBorder: "rgb(51, 65, 85)",
    },
    Segmented: {
      itemActiveBg: "rgb(100, 116, 139)",
      itemColor: "rgb(241, 245, 249)",
      itemSelectedBg: "rgb(241, 245, 249)",
      itemSelectedColor: "rgb(30, 41, 59)",
      trackBg: "rgb(71, 85, 105)",
      itemHoverColor: "rgb(194, 157, 245)",
    },
    Modal: {
      contentBg: "rgb(203, 213, 225)",
      footerBg: "rgb(203, 213, 225)",
      headerBg: "rgb(203, 213, 225)",
      titleColor: "rgb(15, 23, 42)",
    },
  },
};
export default theme;
