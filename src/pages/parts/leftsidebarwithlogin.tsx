import * as React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Space, Segmented } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button, ConfigProvider, Flex } from "antd";
import { IoFilter } from "react-icons/io5";
const playlists = [
  {
    id: 1,
    name: "top 50",
    image:
      "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
  },
  {
    id: 2,
    name: "pop music",
    image: "https://i.scdn.co/image/ab67706c0000da8481b02b2a589b6fd6284c1054",
  },
  {
    id: 3,
    name: "top gaming tracks",
    image: "https://i.scdn.co/image/ab67706f0000000321a2087747d946f16704b8af",
  },
  {
    id: 4,
    name: "sad songs",
    image: "https://i.scdn.co/image/ab67706f00000002583117b5f326c5759bcd4628",
  },
  {
    id: 5,
    name: "night pop",
    image: "https://i.scdn.co/image/ab67616d0000b273caa64494cc66af431a9fcc8a",
  },
];
export default function LeftSideBarwithlogin() {
  return (
    <div>
      <Space
        direction="vertical"
        className="bg-slate-100 rounded-lg box-content h-80 w-60 p-3 mt-4 ml-3  dark:bg-slate-800"
      >
        <div className="flex flex-row justify-left space-x-2  text-slate-800 dark:text-slate-100">
          <div>
            <MdLibraryMusic className="w-5 h-6" />
          </div>
          <div>Your Library</div>
          <div>
            <FaPlus className="w-4 h-5 ml-12 mt-1  transition ease-in-out delay-50 hover:text-rose-900 hover:-translate-y-1 hover:scale-110 duration-300" />
          </div>
        </div>

        <div className="flex flex-col overflow-y-scroll  w-60 h-40 mt-7 bg-slate-300">
          <div className="flex justify-center m-1">
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    itemActiveBg: "#64748B",
                    itemColor: "#F1F5F9",
                    itemSelectedBg: "#F1F5F9",
                    itemSelectedColor: "#1E293B",
                    trackBg: "#475569",
                  },
                },
              }}
            >
              <Segmented<string> options={["Albums", "Artists", "Playlists"]} />
            </ConfigProvider>
          </div>
          <div className="flex flex-row m-1">
            <FaSearch />
            <IoFilter className="ml-3" />
          </div>
          {playlists.map((playlist) => (
            <div className="flex flex-row m-3" key={playlist.id}>
              <div>
                <img src={playlist.image} className="w-10" />
              </div>
              <div className="flex flex-col">
                <div className="ml-2">{playlist.name}</div>

                <p className="text-sm ml-2">.playlist</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
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
            <Button shape="round">fa/en</Button>
          </ConfigProvider>
        </div>
      </Space>
    </div>
  );
}
