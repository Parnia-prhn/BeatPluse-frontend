import React from "react";
import Headerwithoutlogin from "./parts/headers/headerwithoutlogin";
import LeftSideBar from "./parts/sidebars/leftsidebar";
import TopSideBar from "./parts/sidebars/topsidebar";
import Mainhomepagewithoutlogin from "./parts/mainContent/mainhomepagewithoutlogin";
import { Layout, ConfigProvider } from "antd";
import Theme from "../../themeConfig";
const { Header, Content, Footer, Sider } = Layout;
export default function HomePageWithoutLogin() {
  return (
    <div>
      <ConfigProvider theme={Theme}>
        <Layout className="dark:bg-slate-700">
          <Sider width={300} style={{ position: "fixed", overflow: "auto" }}>
            <TopSideBar />
            <LeftSideBar />
          </Sider>

          <Layout style={{ marginLeft: 250, overflow: "initial" }}>
            <Header style={{ display: "", alignItems: "center" }}>
              <Headerwithoutlogin />
            </Header>
            <Content style={{ padding: "24px 24px 24px" }}>
              <Mainhomepagewithoutlogin />
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
