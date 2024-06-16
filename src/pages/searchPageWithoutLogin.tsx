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
          <Header style={{ display: "flex", alignItems: "center" }}>
            <HeaderSearch />
          </Header>

          <Layout>
            <Sider width={300}>
              <TopSideBar />
              <LeftSideBar />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <MainSearchpagewithoutResult />
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
