import React, { useState } from "react";
import { Card, Avatar, Space } from "antd";
import { GoKebabHorizontal } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
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
];
export default function NotificationPage() {
  return (
    <div>
      <div className="flex flex-col m-5">
        <div className="flex flex-row dark:text-slate-300">
          <Avatar size={92} icon={<FaUser />} className="m-6" />
          <div className="flex flex-col m-6 dark:text-slate-300">
            <p>
              <b>Username</b>
            </p>
            <p>2 follower</p>
            <p>10 following</p>
          </div>
        </div>
        <div>
          <GoKebabHorizontal className="m-6 dark:text-slate-300" />
        </div>
        <p className="m-3 dark:text-slate-300">
          <b>Top Artist of this month</b>
        </p>
        <div className="flex flex-row justify-between  pl-12 m-4">
          <Space direction="horizontal" className="">
            {artists.map((artist) => (
              <Link href="/artistPage">
                <Card
                  key={artist.id}
                  className="bg-transparent border-transparent dark:text-slate-300"
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
              </Link>
            ))}
          </Space>
        </div>
        <p className="m-3 dark:text-slate-300">
          <b>your playlists</b>
        </p>
        <div className="flex justify-between  pl-12 m-3">
          <Space direction="horizontal" className="">
            {albums.map((album) => (
              <Link href="/playListPage">
                <Card
                  key={album.id}
                  className="bg-transparent border-transparent dark:text-slate-300"
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
                  <p>
                    <b>{album.name}</b>
                  </p>
                  <p>{album.artist}</p>
                </Card>
              </Link>
            ))}
          </Space>
        </div>
        <p className="m-3 dark:text-slate-300">
          <b>following</b>
        </p>
        <div className="flex flex-row justify-between  pl-12 m-3">
          <Space direction="horizontal" className="">
            {artists.map((artist) => (
              <Link href="/artistPage">
                <Card
                  key={artist.id}
                  className="bg-transparent border-transparent dark:text-slate-300"
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
              </Link>
            ))}
          </Space>
        </div>
        <p className="m-3 dark:text-slate-300">
          <b>follower</b>
        </p>
        <div className="flex flex-row justify-between  pl-12">
          <Space direction="horizontal" className="">
            {artists.map((artist) => (
              <Link href="/artistPage">
                <Card
                  key={artist.id}
                  className="bg-transparent border-transparent dark:text-slate-300"
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
              </Link>
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
}
