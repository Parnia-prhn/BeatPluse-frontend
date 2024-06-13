"use client";
import React, { useState } from "react";
import HeaderSearch from "./parts/headersearch";
import LeftSideBar from "./parts/leftsidebar";
import TopSideBar from "./parts/topsidebar";
import MainSearchpagewithoutResult from "./parts/searchpagewithoutresult";
import { Breadcrumb, Layout, Menu, theme, Table } from "antd";
const { Header, Content, Footer, Sider } = Layout;
export default function SearchPageWithoutLogin() {
  return (
    <div>
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
    </div>
  );
}
