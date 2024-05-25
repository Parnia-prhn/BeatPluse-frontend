"use client";
import React, { useState } from "react";
import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Avatar, Space } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button, Checkbox, ConfigProvider, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Input, Form } from "antd";
import image from "../src/assets/pictures/book4.jpg";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Headerw from "@/src/pages/parts/headerwithoutlogin";
import LeftSideBar from "../src/pages/parts/leftsidebar";
import TopSideBar from "@/src/pages/parts/topsidebar";
import Mainhomepagewithoutlogin from "@/src/pages/parts/mainhomepagewithoutlogin";
import { Segmented } from "antd";
import { Modal } from "antd";
import { createStyles, useTheme } from "antd-style";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <div className="flex flex-col bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-40 dark:bg-slate-800 ">
    <div>
      {/* <Layout>
        <Sider width="25%">
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
    </div>
    //{"</div> "}

    // </main>
  );
}
