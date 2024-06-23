import React from "react";
import { Button, Checkbox, Form, ConfigProvider, Flex } from "antd";
import Theme from "../../themeConfig";
import theme from "../../darkTheme";
import { useDarkModeStore } from "@/src/store/useDarkModeStore";
import { useEffect } from "react";
import { Input } from "antd";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="dark:bg-slate-700">
      <ConfigProvider theme={darkMode ? theme : Theme}>
        <form className="flex justify-center m-5 p-5 dark:text-slate-300">
          <div className="flex flex-col">
            <Form.Item className="flex justify-center ">
              <p className="dark:text-slate-300">Login with...</p>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 7, span: 20 }}>
              <Button className="w-1/2" shape="round" icon={<FaGoogle />}>
                Google
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 7, span: 20 }}>
              <Button className="w-1/2" shape="round" icon={<FaFacebook />}>
                Facebook
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 7, span: 20 }}>
              <Button className="w-1/2" shape="round" icon={<FaApple />}>
                apple
              </Button>
            </Form.Item>
            <Form.Item>
              <p className="dark:text-slate-300">
                ---------------------------------------------------
              </p>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="dark:text-slate-300"
            >
              <Input className="bg-transparent border-black" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="bg-transparent border-black" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox className="dark:text-slate-300">Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Link href="/HomePage/withLogin">
                <Button className="w-1/2" shape="round">
                  submit
                </Button>
              </Link>
            </Form.Item>
            <Form.Item>
              <p className="dark:text-slate-300">Forgot your password?</p>
            </Form.Item>
            <Form.Item>
              <p className="dark:text-slate-300">
                ---------------------------------------------------
              </p>
            </Form.Item>
            <Form.Item>
              <Link href="/auth/signup">
                <p className="dark:text-slate-300">
                  Don't have an account? signup
                </p>
              </Link>
            </Form.Item>
          </div>
        </form>
      </ConfigProvider>
    </div>
  );
}
