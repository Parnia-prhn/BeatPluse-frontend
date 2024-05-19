import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Avatar, Space } from "antd";

import { Button, ConfigProvider, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import image from "../src/assets/pictures/book4.jpg";
const { Meta } = Card;
const artists = [
  {
    id: 1,
    name: "Alan Walker",
    image:
      "https://billgrahamcivic.com/wp-content/uploads/2022/05/AlanWalker_1024-2.jpg",
  },
  {
    id: 2,
    name: "Hans Zimmer",
    image: "https://i.scdn.co/image/ab6761610000e5eb371632043a8c12bb7eeeaf9d",
  },
  {
    id: 3,
    name: "Marshmello",
    image:
      "https://d3vhc53cl8e8km.cloudfront.net/artists/1759/6f26d496-f114-11ed-b991-0ee6b8365494.jpg",
  },
  {
    id: 4,
    name: "Punch",
    image: "https://i.scdn.co/image/ab67616100005174065608c797a38d142082fc8a",
  },
  {
    id: 5,
    name: "Taylor Swift",
    image: "https://i.scdn.co/image/ab67616d00001e02318443aab3531a0558e79a4d",
  },
];
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
const radio = [
  {
    id: 1,
    name: "Alan Walker",
    image:
      "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/0aAF6lF1w8zSb8rIC6YbNw/en",
  },
  {
    id: 2,
    name: "Alan Walker",
    image:
      "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/7vk5e3vY1uw9plTHJAMwjN/en",
  },
  {
    id: 3,
    name: "Marshmello",
    image:
      "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/64KEffDW9EtZ1y2vBYgq8T/de",
  },
  {
    id: 4,
    name: "Hans Zimmer",
    image:
      "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/0YC192cP3KPCRWx8zr8MfZ/de",
  },
  {
    id: 5,
    name: "Taylor Swift",
    image:
      "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/06HL4z0CvFAxyc27GXpf02/de",
  },
];
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
export default function Mainhomepagewithoutlogin() {
  return (
    <div className="">
      <Space direction="horizontal" className="">
        <div className="  p-3 m-3 justify-self-end">Popular artists</div>
        <div className=" p-3 m-3 justify-self-end place-items-end justify-items-end align-items-end">
          <Button
            className="justify-self-end place-self-end align-end"
            type="text"
          >
            show all
          </Button>
        </div>
      </Space>

      <div className="flex flex-row justify-between  pl-12">
        <Space direction="horizontal" className="">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  size={238}
                  src={<img src={artist.image} alt="avatar" />}
                />
              }
            >
              <p>
                <b>{artist.name}</b>
              </p>
              <p>artist</p>
            </Card>
          ))}
        </Space>
      </div>
      <Space direction="horizontal" className="flex-row">
        <div className=" p-3 m-3 justify-self-end">Popular albums</div>
        <div className=" p-3 m-3 justify-self-end">
          <Button type="text">show all</Button>
        </div>
      </Space>
      <div className="flex justify-between  pl-12">
        <Space direction="horizontal" className="">
          {albums.map((album) => (
            <Card
              key={album.id}
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={<img src={album.image} alt="avatar" />}
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>{album.name}</b>
              </p>
              <p>{album.artist}</p>
            </Card>
          ))}
        </Space>
      </div>
      <Space direction="horizontal" className="flex-row">
        <div className="  p-3 m-3 justify-self-end">Popular radio</div>
        <div className=" p-3 m-3 justify-self-end">
          <Button type="text">show all</Button>
        </div>
      </Space>
      <div className="flex justify-between pl-12">
        <Space direction="horizontal" className="">
          {radio.map((radio) => (
            <Card
              key={radio.id}
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={<img src={radio.image} alt="avatar" />}
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>{radio.name}</b>
              </p>
            </Card>
          ))}
        </Space>
      </div>
      <Space direction="horizontal" className="flex-row">
        <div className=" p-3 m-3 justify-self-end">BEATplus playlists</div>
        <div className=" p-3 m-3 justify-self-end">
          <Button type="text">show all</Button>
        </div>
      </Space>
      <div className="flex justify-between pl-12">
        <Space direction="horizontal" className="">
          {playlists.map((playlist) => (
            <Card
              key={playlist.id}
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={<img src={playlist.image} alt="avatar" />}
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>{playlist.name}</b>
              </p>
            </Card>
          ))}
        </Space>
      </div>
    </div>
  );
}
