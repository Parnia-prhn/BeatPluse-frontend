import React from "react";
import { Space } from "antd";

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
      <div className="flex flex-row justify-between  pl-12">
        <Space direction="horizontal" wrap className="">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="text-white w-40 h-40 p-5 font-bold rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
            >
              {genre.name}
            </div>
          ))}
        </Space>
      </div>
    </div>
  );
}
