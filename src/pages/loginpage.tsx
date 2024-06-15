import React, { useState } from "react";
import { Button, Checkbox, Form, ConfigProvider, Flex } from "antd";
import Theme from "../../themeConfig";
import { Input } from "antd";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Signuppage() {
  return (
    <div>
      <ConfigProvider theme={Theme}>
        <form className="flex justify-center m-5 p-5">
          <div className="flex flex-col">
            <Form.Item className="flex justify-center ">
              <p>Login with...</p>
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
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
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
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="w-1/2" shape="round">
                submit
              </Button>
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
      </ConfigProvider>
    </div>
  );
}
