import React, { useState } from "react";
import Headerwithlogin from "./parts/headers/headerwithlogin";
import LeftSideBarWithLogin from "./parts/sidebars/leftsidebarwithlogin";
import TopSideBar from "./parts/sidebars/topsidebar";
import ArtistPage from "./parts/mainContent/artistpage";
import { Layout, ConfigProvider } from "antd";
import Theme from "../../themeConfig";
import theme from "../../darkTheme";
import { useDarkModeStore } from "@/src/store/useDarkModeStore";
import { useEffect } from "react";
import { TiThMenu } from "react-icons/ti";

const { Header, Content, Footer, Sider } = Layout;
export default function ArtistPageComplete() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      <button className="block sm:hidden p-4" onClick={toggleMenu}>
        <TiThMenu style={{ fontSize: "24px" }} className="fixed" />
      </button>
      <ConfigProvider theme={darkMode ? theme : Theme}>
        <Layout className="dark:bg-slate-700">
          <Sider
            width={300}
            style={{ position: "fixed", overflow: "auto" }}
            className={`sm:flex ${
              isMenuOpen ? "block" : "hidden"
            } absolute sm:static top-0 left-0 w-full sm:w-auto`}
          >
            <button className="block sm:hidden p-4" onClick={toggleMenu}>
              <TiThMenu style={{ fontSize: "24px" }} />
            </button>
            <TopSideBar />
            <LeftSideBarWithLogin />
          </Sider>

          <Layout style={{ marginLeft: 250, overflow: "initial" }}>
            <Header style={{ display: "", alignItems: "center" }}>
              <Headerwithlogin />
            </Header>
            <Content style={{ padding: "24px 24px 24px" }}>
              <ArtistPage />
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
