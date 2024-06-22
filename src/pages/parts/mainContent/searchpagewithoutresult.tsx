import React from "react";
import { Space } from "antd";
import Link from "next/link";

const genres = [
  { id: 1, name: "Podcasts" },
  { id: 2, name: "Live Events" },
  { id: 3, name: "Made for you" },
  { id: 4, name: "New Releases" },
  { id: 5, name: "Hip-Hop" },
  { id: 6, name: "pop" },
  { id: 7, name: "Mood" },
  { id: 8, name: "Dance/Electronic" },
  { id: 9, name: "Podcast Charts" },
  { id: 10, name: "Podcast Releases" },
];
export default function Searchpagewithoutresult() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between  pl-12 m-4 p-3">
        <Space direction="horizontal" wrap className="">
          {genres.map((genre) => (
            <Link href="/playListPage">
              <div
                key={genre.id}
                className="text-white w-25 h-25 text-lg md:w-40 md:h-40 md:text-base p-5 font-bold rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
              >
                {genre.name}
              </div>
            </Link>
          ))}
        </Space>
      </div>
    </div>
  );
}
