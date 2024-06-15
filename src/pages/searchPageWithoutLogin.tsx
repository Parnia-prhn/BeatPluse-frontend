"use client";
import React, { useState } from "react";
import HeaderSearch from "./parts/headersearch";
import LeftSideBar from "./parts/leftsidebar";
import TopSideBar from "./parts/topsidebar";
import MainSearchpagewithoutResult from "./parts/searchpagewithoutresult";
import { Breadcrumb, Layout, Menu, theme, Table, ConfigProvider } from "antd";
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
