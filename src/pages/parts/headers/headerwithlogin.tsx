import React from "react";
import { Space, Avatar, Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
export default function Headerwithlogin() {
  return (
    <div className="bg-slate-300 rounded-lg  box-content  w-auto p-3 m-5 dark:bg-slate-800 ">
      <div className="flex flex-col  md:flex-row space-x-20 justify-items-center">
        <div className="flex flex-col md:flex-row">
          {/* <Space align="start"> */}
          <Button shape="circle" icon={<IoIosArrowBack />} />

          <Button shape="circle" icon={<IoIosArrowForward />} />
          {/* </Space> */}
        </div>

        <div className="flex flex-col md:flex-row justify-items-start md:justify-items-end md:justify-end">
          <div>
            <Button shape="round" className="m-2">
              Explore premium
            </Button>
          </div>
          <div>
            <Link href="/notifications">
              <Button
                shape="circle"
                className="m-2"
                icon={<IoIosNotifications />}
              />
            </Link>
          </div>
          <div>
            <Link href="/profilePage">
              <Avatar className="m-2" icon={<FaUser />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
