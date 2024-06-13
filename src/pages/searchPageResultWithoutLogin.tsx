"use client";
import React, { useState } from "react";
import HeaderSearch from "./parts/headersearch";
import LeftSideBar from "./parts/leftsidebar";
import TopSideBar from "./parts/topsidebar";
import SearchResult from "./parts/searchresult";
import { Breadcrumb, Layout, Menu, theme, Table } from "antd";
const { Header, Content, Footer, Sider } = Layout;
export default function SearchPageResultWithoutLogin() {
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
            <SearchResult />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
