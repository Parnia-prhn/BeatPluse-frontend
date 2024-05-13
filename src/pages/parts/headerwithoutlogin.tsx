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
export default function headerwithoutlogin() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <div className="flex flex-col bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-40 dark:bg-slate-800 ">
    <header>
      <div className="bg-slate-300 rounded-lg  box-content h-15 w-full p-3 mt-4 mr-5 ml-5  dark:bg-slate-800 ">
        <div>
          <Space direction="horizontal" className="">
            <div className="flex justify-start">
              <Space align="start">
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBg: "#1E293B",
                        defaultActiveColor: "#F1F5F9",
                        defaultActiveBg: "#F1F5F9",
                        defaultBorderColor: "#F8FAFC",
                        defaultColor: "#F1F5F9",
                        defaultHoverBg: "#881337",
                        defaultHoverBorderColor: "#F8FAFC",
                        defaultHoverColor: "#F1F5F9",
                      },
                    },
                  }}
                >
                  <Button shape="circle" icon={<IoIosArrowBack />} />
                </ConfigProvider>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBg: "#1E293B",
                        defaultActiveColor: "#F1F5F9",
                        defaultActiveBg: "#F1F5F9",
                        defaultBorderColor: "#F8FAFC",
                        defaultColor: "#F1F5F9",
                        defaultHoverBg: "#881337",
                        defaultHoverBorderColor: "#F8FAFC",
                        defaultHoverColor: "#F1F5F9",
                      },
                    },
                  }}
                >
                  <Button shape="circle" icon={<IoIosArrowForward />} />
                </ConfigProvider>
              </Space>
            </div>
            <div className="flex justify-end">
              <Space align="start">
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBg: "#1E293B",
                        defaultActiveColor: "#F1F5F9",
                        defaultActiveBg: "#F1F5F9",
                        defaultBorderColor: "#F8FAFC",
                        defaultColor: "#F1F5F9",
                        defaultHoverBg: "#881337",
                        defaultHoverBorderColor: "#F8FAFC",
                        defaultHoverColor: "#F1F5F9",
                      },
                    },
                  }}
                >
                  <Button shape="round">signup</Button>
                </ConfigProvider>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBg: "#1E293B",
                        defaultActiveColor: "#F1F5F9",
                        defaultActiveBg: "#F1F5F9",
                        defaultBorderColor: "#F8FAFC",
                        defaultColor: "#F1F5F9",
                        defaultHoverBg: "#881337",
                        defaultHoverBorderColor: "#F8FAFC",
                        defaultHoverColor: "#F1F5F9",
                      },
                    },
                  }}
                >
                  <Button shape="round">login</Button>
                </ConfigProvider>
              </Space>
            </div>
          </Space>
        </div>
      </div>
    </header>
    // </div>
    // </main>
  );
}
