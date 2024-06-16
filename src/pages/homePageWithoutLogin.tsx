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
        <Layout>
          <Header style={{ display: "flex", alignItems: "center" }}>
            <Headerwithoutlogin />
          </Header>

          <Layout>
            <Sider width={300}>
              <TopSideBar />
              <LeftSideBar />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Mainhomepagewithoutlogin />
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
