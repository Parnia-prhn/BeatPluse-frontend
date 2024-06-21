"use client";
import React from "react";
import Headerwithlogin from "./parts/headers/headerwithlogin";
import LeftSideBarWithLogin from "./parts/sidebars/leftsidebarwithlogin";
import TopSideBar from "./parts/sidebars/topsidebar";
import PlayListPage from "./parts/mainContent/playlistpage";
import { Layout, ConfigProvider } from "antd";
import Theme from "../../themeConfig";
const { Header, Content, Footer, Sider } = Layout;
export default function PlayListPageComplete() {
  return (
    <div>
      <ConfigProvider theme={Theme}>
        <Layout className="dark:bg-slate-700">
          <Sider width={300} style={{ position: "fixed", overflow: "auto" }}>
            <TopSideBar />
            <LeftSideBarWithLogin />
          </Sider>

          <Layout style={{ marginLeft: 250, overflow: "initial" }}>
            <Header style={{ display: "", alignItems: "center" }}>
              <Headerwithlogin />
            </Header>
            <Content style={{ padding: "24px 24px 24px" }}>
              <PlayListPage />
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
