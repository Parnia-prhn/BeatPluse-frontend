import Link from "next/link";
import * as React from "react";

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
export default function RightSideBarSongInformation() {
  return (
    <div className="bg-slate-100 rounded-lg box-content h-80 w-60 p-3 mt-4 ml-3  dark:bg-slate-800">
      <div className="flex flex-col">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273dc3d61d589160ff29b775bc9"
          className="size-15 m-3"
        />
        <p className=" m-2">
          <b>who i am</b>
        </p>
        <img
          src="https://billgrahamcivic.com/wp-content/uploads/2022/05/AlanWalker_1024-2.jpg"
          className="size-15 m-3"
        />
        <p className=" m-2">
          <Link href="/artistPage">
            <b>Alan Walker</b>
          </Link>
        </p>
      </div>
    </div>
  );
}
