"use client";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Table } from "antd";
import MusicPlayer from "@/src/pages/parts/sidebars/musicPlayer";
import SearchPageWithoutLogin from "@/src/pages/searchPageWithoutLogin";
import SearchPageResultWithoutLogin from "@/src/pages/searchPageResultWithoutLogin";
import HomePageWithoutLogin from "@/src/pages/homePageWithoutLogin";
import HomePageWithLogin from "@/src/pages/homePageWithLogin";
import LoginPage from "@/src/pages/loginpage";
import SignupPage from "@/src/pages/signuppage";
import ArtistPageComplete from "@/src/pages/artistPageComplete";
const { Header, Content, Footer, Sider } = Layout;
// const items1: any["items"] = ["1", "2", "3"].map(key => ({
//       key,
//       label: nav ${key},
//       }));
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <div className="flex flex-col bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-40 dark:bg-slate-800 ">
    <div>
      {/* <SearchPageWithoutLogin /> */}
      {/* <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Headerw />
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
      </Layout> */}
      {/* <Layout>
        <Sider theme="light">
          <TopSideBar />
          <LeftSideBar />
        </Sider>
        <Layout>
          <Header>
            <Headerw />
          </Header>
          <Content>
            <Mainhomepagewithoutlogin />
          </Content>
        </Layout>
      </Layout> */}
      {/* <Headerw /> */}
      {/* <TopSideBar /> */}
      {/* <LeftSideBar /> */}
      {/* <Mainhomepagewithoutlogin /> */}
      {/*---------------------------------------------------------------------*/}
      {/* <SearchPageResultWithoutLogin /> */}
      {/* <SearchPageWithoutLogin /> */}
      {/* <HomePageWithoutLogin /> */}
      {/* <HomePageWithLogin /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      <ArtistPageComplete />
      {/* <MusicPlayer /> */}
      {/* <div>
        <header>
          <Headerw />
        </header>
        <aside>
          <TopSideBar />
          <LeftSideBar />
        </aside>
        <main>
          <Mainhomepagewithoutlogin />
        </main>
      </div> */}
    </div>
    //{"</div> "}

    // </main>
  );
}
