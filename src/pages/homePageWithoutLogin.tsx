"use client";
import React, { useState } from "react";
import Headerwithoutlogin from "./parts/headerwithoutlogin";
import LeftSideBar from "./parts/leftsidebar";
import TopSideBar from "./parts/topsidebar";
import Mainhomepagewithoutlogin from "./parts/mainhomepagewithoutlogin";
import { Breadcrumb, Layout, ConfigProvider, Menu, theme, Table } from "antd";
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
