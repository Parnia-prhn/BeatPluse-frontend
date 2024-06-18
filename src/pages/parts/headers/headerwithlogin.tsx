import React from "react";
import { Space, Avatar, Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
export default function Headerwithlogin() {
  return (
    <div className="bg-slate-300 rounded-lg  box-content  w-auto p-3 m-5 dark:bg-slate-800 ">
      <div className="flex flex-row space-x-20 justify-items-center">
        <div className="flex-row">
          <Space align="start">
            <Button shape="circle" icon={<IoIosArrowBack />} />

            <Button shape="circle" icon={<IoIosArrowForward />} />
          </Space>
        </div>

        <div className="flex flex-row justify-items-end justify-end">
          <div>
            <Button shape="round" className="m-2">
              Explore premium
            </Button>
          </div>
          <div>
            <Button
              shape="circle"
              className="m-2"
              icon={<IoIosNotifications />}
            />
          </div>
          <div>
            <Avatar className="m-2" icon={<FaUser />} />
          </div>
        </div>
      </div>
    </div>
  );
}
