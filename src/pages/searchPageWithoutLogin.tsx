import React from "react";
import HeaderSearch from "./parts/headers/headersearch";
import LeftSideBar from "./parts/sidebars/leftsidebar";
import TopSideBar from "./parts/sidebars/topsidebar";
import MainSearchpagewithoutResult from "./parts/mainContent/searchpagewithoutresult";
import { Layout, ConfigProvider } from "antd";
import Theme from "../../themeConfig";

const { Header, Content, Footer, Sider } = Layout;
export default function SearchPageWithoutLogin() {
  return (
    <div>
      <ConfigProvider theme={Theme}>
        <Layout>
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
