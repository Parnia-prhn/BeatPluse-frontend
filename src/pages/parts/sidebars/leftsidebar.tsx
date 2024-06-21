import * as React from "react";
import { Button, Space, Switch } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useDarkModeStore } from "@/src/store/useDarkModeStore";
import { useEffect } from "react";
export default function LeftSideBar() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <Space
      direction="vertical"
      className="bg-slate-100 rounded-lg box-content h-80 w-60 p-3 mt-4 ml-3  dark:bg-slate-800 dark:text-slate-300"
    >
      <div className="flex flex-row justify-left space-x-2  text-slate-800 dark:text-slate-300">
        <div>
          <MdLibraryMusic className="w-5 h-6" />
        </div>
        <div>Your Library</div>
        <div>
          <FaPlus className="w-4 h-5 ml-12 mt-1  transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300" />
        </div>
      </div>
      <div className="overflow-y-scroll  w-60 h-40 mt-7 bg-slate-300 dark:bg-slate-600">
        <Space
          direction="vertical"
          className="bg-slate-300 rounded-lg box-content h-50 w-50 p-3 mt-4 ml-3   dark:text-slate-300 dark:bg-slate-600"
        >
          <div>creat your first playlist</div>
          <div>it's easy! we'll help you </div>

          <Button shape="round">create playlist</Button>
        </Space>
        <Space
          direction="vertical"
          className="bg-slate-300 rounded-lg box-content h-50 w-50 p-3 mt-4 ml-3   dark:text-slate-300 dark:bg-slate-600"
        >
          <div>creat your first playlist</div>
          <div>it's easy! we'll help you </div>

          <Button shape="round">create playlist</Button>
        </Space>
      </div>
      <div className="flex justify-center flex-row mt-4">
        <Button shape="round">fa/en</Button>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          className="m-2 p-2 place-content-center"
        />
      </div>
    </Space>
  );
}
