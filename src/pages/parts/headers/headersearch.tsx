import React from "react";
import { FaSearch } from "react-icons/fa";
import { Space, Input, Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
export default function Headersearch() {
  return (
    <div className="bg-slate-300 rounded-lg  box-content  w-auto h-auto p-3 m-5 dark:bg-slate-800 ">
      <div className="flex flex-col  md:flex-row space-x-20 justify-items-center">
        <div className="flex-col md:flex-row">
          {/* <Space align="start"> */}
          <Button shape="circle" icon={<IoIosArrowBack />} className="m-2" />

          <Button shape="circle" icon={<IoIosArrowForward />} className="m-1" />

          <Link href="/Search/searchPageResultWithoutLogin">
            <Input
              style={{ width: "45%" }}
              placeholder="song,artist..."
              allowClear
              prefix={<FaSearch />}
            />
          </Link>

          {/* </Space> */}
        </div>

        <div className="flex flex-col md:flex-row justify-items-end justify-end">
          <div>
            <Link href="/auth/signup">
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
  );
}
