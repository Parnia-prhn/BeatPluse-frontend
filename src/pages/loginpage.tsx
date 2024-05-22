import React, { useState } from "react";
import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Avatar, Space } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button, Checkbox, Form, ConfigProvider, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Input } from "antd";
import image from "../src/assets/pictures/book4.jpg";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Headerw from "@/src/pages/parts/headerwithoutlogin";
import TopSideBar from "@/src/pages/parts/topsidebar";
import Mainhomepagewithoutlogin from "@/src/pages/parts/mainhomepagewithoutlogin";
import { Segmented } from "antd";
import { Modal } from "antd";
import { createStyles, useTheme } from "antd-style";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Signuppage() {
  return (
    <div>
      <form className="flex justify-center m-5 p-5">
        <div className="flex flex-col">
          <Form.Item className="flex justify-center ">
            <p>Login with...</p>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7, span: 20 }}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: "#1E293B",
                    defaultActiveColor: "#F1F5F9",
                    defaultActiveBg: "#F1F5F9",
                    defaultBorderColor: "#F8FAFC",
                    defaultColor: "#F1F5F9",
                    defaultHoverBg: "#881337",
                    defaultHoverBorderColor: "#F8FAFC",
                    defaultHoverColor: "#F1F5F9",
                  },
                },
              }}
            >
              <Button className="w-1/2" shape="round" icon={<FaGoogle />}>
                Google
              </Button>
            </ConfigProvider>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7, span: 20 }}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: "#1E293B",
                    defaultActiveColor: "#F1F5F9",
                    defaultActiveBg: "#F1F5F9",
                    defaultBorderColor: "#F8FAFC",
                    defaultColor: "#F1F5F9",
                    defaultHoverBg: "#881337",
                    defaultHoverBorderColor: "#F8FAFC",
                    defaultHoverColor: "#F1F5F9",
                  },
                },
              }}
            >
              <Button className="w-1/2" shape="round" icon={<FaFacebook />}>
                Facebook
              </Button>
            </ConfigProvider>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7, span: 20 }}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: "#1E293B",
                    defaultActiveColor: "#F1F5F9",
                    defaultActiveBg: "#F1F5F9",
                    defaultBorderColor: "#F8FAFC",
                    defaultColor: "#F1F5F9",
                    defaultHoverBg: "#881337",
                    defaultHoverBorderColor: "#F8FAFC",
                    defaultHoverColor: "#F1F5F9",
                  },
                },
              }}
            >
              <Button className="w-1/2" shape="round" icon={<FaApple />}>
                apple
              </Button>
            </ConfigProvider>
          </Form.Item>
          <Form.Item>
            <p>---------------------------------------------------</p>
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="bg-transparent border-black" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="bg-transparent border-black" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: "#1E293B",
                    defaultActiveColor: "#F1F5F9",
                    defaultActiveBg: "#F1F5F9",
                    defaultBorderColor: "#F8FAFC",
                    defaultColor: "#F1F5F9",
                    defaultHoverBg: "#881337",
                    defaultHoverBorderColor: "#F8FAFC",
                    defaultHoverColor: "#F1F5F9",
                  },
                },
              }}
            >
              <Button className="w-1/2" shape="round">
                submit
              </Button>
            </ConfigProvider>
          </Form.Item>
          <Form.Item>
            <p>Forgot your password?</p>
          </Form.Item>
          <Form.Item>
            <p>---------------------------------------------------</p>
          </Form.Item>
          <Form.Item>
            <p>Don't have an account? signup</p>
          </Form.Item>
        </div>
      </form>
    </div>
  );
}
