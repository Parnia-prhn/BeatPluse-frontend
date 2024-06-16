import React from "react";
import HeaderSearch from "./parts/headers/headersearch";
import LeftSideBar from "./parts/sidebars/leftsidebar";
import TopSideBar from "./parts/sidebars/topsidebar";
import SearchResult from "./parts/mainContent/searchresult";
import { Layout, ConfigProvider } from "antd";
import Theme from "../../themeConfig";

const { Header, Content, Footer, Sider } = Layout;
export default function SearchPageResultWithoutLogin() {
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
              <SearchResult />
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
