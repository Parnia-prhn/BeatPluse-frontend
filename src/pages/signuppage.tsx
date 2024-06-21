import React from "react";
import { Button, Form, ConfigProvider } from "antd";
import { Input } from "antd";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Theme from "../../themeConfig";
import theme from "../../darkTheme";
import { useDarkModeStore } from "@/src/store/useDarkModeStore";
import { useEffect } from "react";
import Link from "next/link";

export default function SignupPage() {
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
            <Form.Item className="w-1/1 " label="Email address">
              <Input
                className="bg-transparent border-black"
                placeholder="name@domain.com"
              />
            </Form.Item>
            <Form.Item>
              <Button className="w-1/2" shape="round">
                next
              </Button>
            </Form.Item>
            <Form.Item>
              <p>------------------------or-------------------------</p>
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
              <p>---------------------------------------------------</p>
            </Form.Item>
            <Form.Item>
              <Link href="/auth/login">
                <p>Do you have an account? login</p>
              </Link>
            </Form.Item>
          </div>
        </form>
      </ConfigProvider>
    </div>
  );
}
