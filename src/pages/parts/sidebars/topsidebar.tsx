import * as React from "react";
import { useState, useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Space, theme } from "antd";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function TopSideBar() {
  // const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  // const [width, setWidth] = useState(250); // Initial sidebar width
  // const sidebarRef = useRef<HTMLDivElement>(null);
  // const resizerRef = useRef<HTMLDivElement>(null);

  // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   document.addEventListener("mousemove", handleMouseMove as EventListener);
  //   document.addEventListener("mouseup", handleMouseUp as EventListener);
  // };

  // const handleMouseMove: EventListener = (e: Event) => {
  //   if (sidebarRef.current && resizerRef.current && e instanceof MouseEvent) {
  //     const newWidth =
  //       e.clientX - sidebarRef.current.getBoundingClientRect().left;
  //     if (newWidth >= 150 && newWidth <= 400) {
  //       setWidth(newWidth);
  //     }
  //   }
  // };

  // const handleMouseUp = () => {
  //   document.removeEventListener("mousemove", handleMouseMove as EventListener);
  //   document.removeEventListener("mouseup", handleMouseUp as EventListener);
  // };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const t = await getTranslations("topsidebar");
  return (
    // <div className="relative">
    //   <button className="block sm:hidden p-4" onClick={toggleMenu}>
    //     <SiBigbluebutton style={{ fontSize: "24px" }} />
    //   </button>

    <div
    // ref={sidebarRef}
    // className={`sm:flex ${
    //   isMenuOpen ? "block" : "hidden"
    // } absolute sm:static top-0 left-0 w-full sm:w-auto`}
    // style={{ width: `${width}px` }}
    >
      <Space
        direction="vertical"
        className="bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-60 dark:bg-slate-800  transition-width duration-150 ease-in-out"
        // ref={sidebarRef}
        // style={{ width: `${width}px` }}
      >
        <div className="flex flex-row justify-left space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
          <div className="">
            <SiBigbluebutton className="" />
          </div>
          <Link href="/HomePage/withLogin">
            <div className="">{t("BEAT +")}</div>
          </Link>
        </div>
        <div className="flex flex-row justify-center space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
          <div>
            <AiFillHome className="" />
          </div>
          <Link href="/HomePage/withoutLogin">
            <div className="">{t("Home")}</div>
          </Link>
        </div>
        <div className="flex flex-row justify-center space-x-2 transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300 text-slate-800 dark:text-slate-100">
          <div>
            <FaSearch className="" />
          </div>
          <Link href="Search/searchPageWithoutLogin">
            <div className="">{t("Search")}</div>
          </Link>
        </div>
      </Space>
      {/* </div> */}
    </div>
  );
}
