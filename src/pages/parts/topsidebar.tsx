import * as React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Space } from "antd";

export default function TopSideBar() {
  return (
    // <div className="flex flex-col bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-40 dark:bg-slate-800 ">
    <Space
      direction="vertical"
      className="bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-40 dark:bg-slate-800"
    >
      <div className="flex flex-row justify-left space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
        <div className="">
          <SiBigbluebutton className="" />
        </div>
        <div className="">BEAT +</div>
      </div>
      <div className="flex flex-row justify-center space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
        <div>
          <AiFillHome className="" />
        </div>
        <div className="">Home</div>
      </div>
      <div className="flex flex-row justify-center space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
        <div>
          <FaSearch className="" />
        </div>
        <div className="">Search</div>
      </div>
    </Space>
    // </div>
  );
}
