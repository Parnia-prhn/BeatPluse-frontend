import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Space } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button, ConfigProvider, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Headerwithoutlogin() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <div className="flex flex-col bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-40 dark:bg-slate-800 ">
    <header>
      <div className="bg-slate-300 rounded-lg  box-content  w-auto p-3 m-5 dark:bg-slate-800 ">
        <div className="flex flex-row justify-items-center">
          <div className="flex-row">
            <Space align="start">
              <Button shape="circle" icon={<IoIosArrowBack />} />

              <Button shape="circle" icon={<IoIosArrowForward />} />
            </Space>
          </div>
        </div>
        <div className="flex flex-row justify-items-end justify-end">
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
    </header>
    // </div>
    // </main>
  );
}
