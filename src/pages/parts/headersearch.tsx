import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Space } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Input } from "antd";
import { Button, ConfigProvider, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Headersearch() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <div className="flex flex-col bg-slate-100 rounded-lg p-6 mt-4 ml-3 w-40 dark:bg-slate-800 ">
    <header>
      <div className="bg-slate-300 rounded-lg  box-content  w-auto p-3 m-5 dark:bg-slate-800 ">
        <div className="flex flex-row justify-items-center">
          <div className="flex-row">
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
              <ConfigProvider
                theme={{
                  components: {
                    Input: {
                      activeShadow: "	0 0 0 2px rgba(5, 145, 255, 0.1)",
                      activeBg: "#F1F5F9",
                      activeBorderColor: "#708090",
                      colorBgContainer: "#00000000",
                      colorBorder: "#334155",
                    },
                  },
                }}
              >
                <Input
                  placeholder="song,artist..."
                  allowClear
                  prefix={<FaSearch />}
                />
              </ConfigProvider>
            </Space>
          </div>
        </div>

        <div className="flex flex-row justify-items-end justify-end">
          <div className="flex flex-row justify-items-end justify-end">
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </header>
    // </div>
    // </main>
  );
}
