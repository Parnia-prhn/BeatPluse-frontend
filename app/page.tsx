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
import { Breadcrumb, Layout, Menu, theme, Table } from "antd";
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
import type { TableProps } from "antd";
import { FaShuffle } from "react-icons/fa6";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const playlists = [
    {
      id: 1,
      name: "top 50",
      image:
        "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
    },
    {
      id: 2,
      name: "pop music",
      image: "https://i.scdn.co/image/ab67706c0000da8481b02b2a589b6fd6284c1054",
    },
    {
      id: 3,
      name: "top gaming tracks",
      image: "https://i.scdn.co/image/ab67706f0000000321a2087747d946f16704b8af",
    },
    {
      id: 4,
      name: "sad songs",
      image: "https://i.scdn.co/image/ab67706f00000002583117b5f326c5759bcd4628",
    },
    {
      id: 5,
      name: "night pop",
      image: "https://i.scdn.co/image/ab67616d0000b273caa64494cc66af431a9fcc8a",
    },
  ];
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
      <div className="bg-slate-100 rounded-lg box-content h-80 w-60 p-3 mt-4 ml-3  dark:bg-slate-800">
        <div className="flex flex-col overflow-y-scroll  w-60 h-60 mt-7 bg-slate-300">
          <div className="flex justify-center m-1">
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    itemActiveBg: "#64748B",
                    itemColor: "#F1F5F9",
                    itemSelectedBg: "#F1F5F9",
                    itemSelectedColor: "#1E293B",
                    trackBg: "#475569",
                  },
                },
              }}
            >
              <Segmented<string> options={["Queue", "Recently Played"]} />
            </ConfigProvider>
          </div>

          {playlists.map((playlist) => (
            <div className="flex flex-row m-3" key={playlist.id}>
              <div>
                <img src={playlist.image} className="w-10" />
              </div>
              <div className="flex flex-col">
                <div className="ml-2">{playlist.name}</div>

                <p className="text-sm ml-2">.playlist</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    //{"</div> "}

    // </main>
  );
}
