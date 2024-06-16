"use client";
import React, { useState } from "react";
import Headerwithlogin from "./parts/headerwithlogin";
import LeftSideBarWithLogin from "./parts/leftsidebarwithlogin";
import TopSideBar from "./parts/topsidebar";
import Mainhomepagewithlogin from "./parts/mainhomepagewithlogin";
import { Breadcrumb, Layout, ConfigProvider, Menu, theme, Table } from "antd";
import Theme from "../../themeConfig";
const { Header, Content, Footer, Sider } = Layout;
export default function HomePageWithLogin() {
  return (
    <div>
      <ConfigProvider theme={Theme}>
        <Layout>
          <Header style={{ display: "flex", alignItems: "center" }}>
            <Headerwithlogin />
          </Header>

          <Layout>
            <Sider width={300}>
              <TopSideBar />
              <LeftSideBarWithLogin />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Mainhomepagewithlogin />
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
