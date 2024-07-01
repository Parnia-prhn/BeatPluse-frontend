import * as React from "react";
import { useState, useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Space, theme } from "antd";
import Link from "next/link";

export default async function TopSideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Space
        direction="vertical"
        className="bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-60 dark:bg-slate-800  transition-width duration-150 ease-in-out"
      >
        <div className="flex flex-row justify-left space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
          <div className="">
            <SiBigbluebutton className="" />
          </div>
          <Link href="/HomePage/withLogin">
            <div className="">BEAT +</div>
          </Link>
        </div>
        <div className="flex flex-row justify-center space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
          <div>
            <AiFillHome className="" />
          </div>
          <Link href="/HomePage/withoutLogin">
            <div className="">Home</div>
          </Link>
        </div>
        <div className="flex flex-row justify-center space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
          <div>
            <FaSearch className="" />
          </div>
          <Link href="Search/searchPageWithoutLogin">
            <div className="">Search</div>
          </Link>
        </div>
      </Space>
    </div>
  );
}
