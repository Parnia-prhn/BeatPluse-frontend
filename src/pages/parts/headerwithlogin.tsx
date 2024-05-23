import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Space, Avatar } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button, ConfigProvider, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
export default function Headerwithlogin() {
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
                <Button shape="round" className="m-2">
                  Explore premium
                </Button>
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
                <Button
                  shape="circle"
                  className="m-2"
                  icon={<IoIosNotifications />}
                />
              </ConfigProvider>
            </div>
            <div>
              <Avatar className="m-2" icon={<FaUser />} />
            </div>
          </div>
        </div>
      </div>
    </header>
    // </div>
    // </main>
  );
}
