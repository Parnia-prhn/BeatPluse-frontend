import React, { useState } from "react";
import { Button, Form, ConfigProvider, Flex } from "antd";
import { Input } from "antd";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Theme from "../../themeConfig";

export default function Signuppage() {
  return (
    <div>
      <ConfigProvider theme={Theme}>
        <form className="flex justify-center m-5 p-5">
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
              <p>Do you have an account? login</p>
            </Form.Item>
          </div>
        </form>
      </ConfigProvider>
    </div>
  );
}
