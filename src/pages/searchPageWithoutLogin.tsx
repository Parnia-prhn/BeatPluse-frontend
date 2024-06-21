import React from "react";
import HeaderSearch from "./parts/headers/headersearch";
import LeftSideBar from "./parts/sidebars/leftsidebar";
import TopSideBar from "./parts/sidebars/topsidebar";
import MainSearchpagewithoutResult from "./parts/mainContent/searchpagewithoutresult";
import { Layout, ConfigProvider } from "antd";
import Theme from "../../themeConfig";
import theme from "../../darkTheme";
import { useDarkModeStore } from "@/src/store/useDarkModeStore";
import { useEffect } from "react";

const { Header, Content, Footer, Sider } = Layout;
export default function SearchPageWithoutLogin() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      <ConfigProvider theme={darkMode ? theme : Theme}>
        <Layout className="dark:bg-slate-700">
          <Sider width={300} style={{ position: "fixed", overflow: "auto" }}>
            <TopSideBar />
            <LeftSideBar />
          </Sider>

          <Layout style={{ marginLeft: 250, overflow: "initial" }}>
            <Header style={{ display: "", alignItems: "center" }}>
              <HeaderSearch />
            </Header>
            <Content style={{ padding: "24px 24px 24px" }}>
              <MainSearchpagewithoutResult />
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
