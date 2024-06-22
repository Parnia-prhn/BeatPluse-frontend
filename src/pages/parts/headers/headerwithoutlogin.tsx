import React, { useState } from "react";
import { Space, Button, ConfigProvider, Form } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
export default function Headerwithoutlogin() {
  return (
    <div className="bg-slate-300 rounded-lg  box-content  w-auto p-3 m-5 dark:bg-slate-800 ">
      <div className="flex flex-col  md:flex-row space-x-20 justify-items-center">
        <div className="flex flex-col md:flex-row">
          {/* <Space align="start"> */}
          <Button shape="circle" icon={<IoIosArrowBack />} className="m-2" />

          <Button shape="circle" icon={<IoIosArrowForward />} className="m-2" />
          {/* </Space> */}
        </div>

        {/* <div className="flex flex-row justify-items-end justify-end"> */}
        <div className="flex flex-col md:flex-row justify-items-end justify-end">
          <div>
            <Link href="/auth/signup/">
              <Button shape="round">signup</Button>
            </Link>
          </div>
          <div>
            <Link href="/auth/login">
              <Button shape="round">login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
