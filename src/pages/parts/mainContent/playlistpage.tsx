import React from "react";
import { FaSearch } from "react-icons/fa";
import { Card, Table, TableProps } from "antd";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";

const { Meta } = Card;
interface DataType {
  key: string;
  Title: object;
  album: string;
  dateAdded: string;
  time: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Title",
    dataIndex: "Title",
    key: "Title",
    render: ({ title, image, artist }) => (
      <div className="flex flex-row">
        <img src={image} className="size-11 m-3" />
        <div className="flex flex-col m-3">
          <a>{title}</a>
          <p>{artist}</p>
        </div>
      </div>
    ),
  },
  {
    title: "album",
    dataIndex: "album",
    key: "album",
  },
  {
    title: "dateAdded",
    dataIndex: "dateAdded",
    key: "dateAdded",
  },
  {
    title: "time",
    key: "time",
    dataIndex: "time",
  },
];

const data: DataType[] = [
  {
    key: "1",
    Title: {
      title: "different world",
      artist: "Alan Walker",
      image: "https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg",
    },
    album: "different world",
    dateAdded: "may 2022",
    time: "3:23",
  },
  {
    key: "2",
    Title: {
      title: "walkerworld",
      artist: "Alan Walker",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBibHyQILzz6ywo65md7ja6oJaRxIoGqZ3_EyZx3w5fRBba0RrEs7BiK1s7xVd0tusfb8&usqp=CAU",
    },
    album: "walkerworld",
    dateAdded: "June 2023",
    time: "3:12",
  },
  {
    key: "3",
    Title: {
      title: "walkerverse",
      artist: "Alan Walker",
      image: "https://i.scdn.co/image/ab67616d0000b273ac8c3be850377baae05da4ed",
    },
    album: "walkerverse",
    dateAdded: "2 days ago",
    time: "3:02",
  },
  {
    key: "4",
    Title: {
      title: "world of walker",
      artist: "Alan Walker",
      image: "https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177",
    },
    album: "world of walker",
    dateAdded: "July 2021",
    time: "3:48",
  },
  {
    key: "5",
    Title: {
      title: "who i am",
      artist: "Alan walker",
      image: "https://i.scdn.co/image/ab67616d0000b273dc3d61d589160ff29b775bc9",
    },
    album: "who i am",
    dateAdded: "2 days ago",
    time: "2:58",
  },
];

export default function PlaylistPage() {
  return (
    <div>
      <div className="flex flex-row m-5">
        <img
          src="https://i.scdn.co/image/ab67706f00000002583117b5f326c5759bcd4628"
          className="justify-start w-35"
        />
        <div className="flex flex-col m-5">
          <p>
            <b>sad songs</b>
          </p>
          <div className="flex flex-row m-5">
            <FaUser className="m-3" />
            <p className="m-3">Username</p>
            <p className="m-3">5 songs, 19 min 20 sec</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-3">
        <div className="flex flex-row">
          <FaPlay className="size-9 m-3" />
          <FaShuffle className="size-6 m-3" />
          <MdOutlineDownloadForOffline className="size-6 m-3" />
          <FaUserPlus className="size-6 m-3" />
          <GoKebabHorizontal className="size-6 m-3" />

          <div className="flex flex-row justify-items-end">
            <FaSearch className="size-6 m-3" />
            <p className=" m-3">date added</p>
            <TfiMenuAlt className="size-6 m-3" />
          </div>
        </div>
        <Table columns={columns} dataSource={data} className="bg-transparent" />
      </div>
    </div>
  );
}
