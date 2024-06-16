"use client";
import React, { useState } from "react";
import Headerwithlogin from "./parts/headerwithlogin";
import LeftSideBarWithLogin from "./parts/leftsidebarwithlogin";
import TopSideBar from "./parts/topsidebar";
import NotificationPage from "./parts/notificationpage";
import { Breadcrumb, Layout, ConfigProvider, Menu, theme, Table } from "antd";
import Theme from "../../themeConfig";
const { Header, Content, Footer, Sider } = Layout;
export default function NotificationPageComplete() {
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
              <NotificationPage />
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
