import * as React from "react";
import { useState, useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Space, theme } from "antd";
import Link from "next/link";

export default function TopSideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [width, setWidth] = useState(250); // Initial sidebar width
  const sidebarRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove as EventListener);
    document.addEventListener("mouseup", handleMouseUp as EventListener);
  };

  const handleMouseMove: EventListener = (e: Event) => {
    if (sidebarRef.current && resizerRef.current && e instanceof MouseEvent) {
      const newWidth =
        e.clientX - sidebarRef.current.getBoundingClientRect().left;
      if (newWidth >= 150 && newWidth <= 400) {
        setWidth(newWidth);
      }
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove as EventListener);
    document.removeEventListener("mouseup", handleMouseUp as EventListener);
  };

  return (
    <div
      ref={sidebarRef}
      className="transition-width duration-150 ease-in-out"
      style={{ width: `${width}px` }}
    >
      <Space
        direction="vertical"
        className="bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-auto dark:bg-slate-800  transition-width duration-150 ease-in-out"
        ref={sidebarRef}
        style={{ width: `${width}px` }}
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
          <div className="">Home</div>
        </div>
        <div className="flex flex-row justify-center space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
          <div>
            <FaSearch className="" />
          </div>
          <div className="">Search</div>
        </div>
      </Space>
      <div
        ref={resizerRef}
        className="w-2 bg-gray-600 cursor-col-resize"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}