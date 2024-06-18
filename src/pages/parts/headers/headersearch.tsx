import React from "react";
import { FaSearch } from "react-icons/fa";
import { Space, Input, Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Headersearch() {
  return (
    <div className="bg-slate-300 rounded-lg  box-content  w-auto p-3 m-5 dark:bg-slate-800 ">
      <div className="flex flex-row space-x-20 justify-items-center">
        <div className="flex-row">
          <Space align="start">
            <Button shape="circle" icon={<IoIosArrowBack />} />

            <Button shape="circle" icon={<IoIosArrowForward />} />

            <Input
              placeholder="song,artist..."
              allowClear
              prefix={<FaSearch />}
            />
          </Space>
        </div>

        <div className="flex flex-row justify-items-end justify-end">
          <div>
            <Button shape="round">signup</Button>
          </div>
          <div>
            <Button shape="round">login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
