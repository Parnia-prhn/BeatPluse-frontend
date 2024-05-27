import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Avatar, Space } from "antd";

import { Button, ConfigProvider, Segmented, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import image from "../src/assets/pictures/book4.jpg";
import { GoKebabHorizontal } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const albums = [
  {
    id: 1,
    name: "different world",
    artist: "Alan Walker",
    image: "https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg",
  },
  {
    id: 2,
    name: "walkerworld",
    artist: "Alan Walker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBibHyQILzz6ywo65md7ja6oJaRxIoGqZ3_EyZx3w5fRBba0RrEs7BiK1s7xVd0tusfb8&usqp=CAU",
  },
  {
    id: 3,
    name: "walkerverse",
    artist: "Alan Walker",
    image: "https://i.scdn.co/image/ab67616d0000b273ac8c3be850377baae05da4ed",
  },
  {
    id: 4,
    name: "world of walker",
    artist: "Alan Walker",
    image: "https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177",
  },
  {
    id: 5,
    name: "who i am",
    artist: "Alan walker",
    image: "https://i.scdn.co/image/ab67616d0000b273dc3d61d589160ff29b775bc9",
  },
];
export default function NotificationPage() {
  return (
    <div>
      <div className="flex flex-col m-5">
        <p>
          <b> Whats new? </b>
        </p>
        <p> the latest releases </p>
        <div className="flex justify-start m-3">
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
            <Segmented<string> options={["Music", "Podcasts"]} />
          </ConfigProvider>
        </div>
        <p>
          <b>New</b>
        </p>

        <div className="flex flex-col">
          {albums.map((album) => (
            <div className="flex flex-col m-3 " key={album.id}>
              <b>
                --------------------------------------------------------------
              </b>
              <div>
                <img src={album.image} className="w-20" />
              </div>
              <div className="flex flex-col">
                <div className="m-2">{album.name}</div>
              </div>
              <div className="m-2">description</div>
              <div className="m-2">
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
                    className="m-2 text-end"
                    icon={<FaPlay />}
                  />
                </ConfigProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
