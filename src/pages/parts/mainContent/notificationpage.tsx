import React, { useState } from "react";
import { Button, Segmented } from "antd";
import { FaPlay } from "react-icons/fa";
import { useMusicPlayerStore } from "@/src/store/useMusicPlayerStore";

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
  const setShowMusicPlayer = useMusicPlayerStore(
    (state) => state.setShowMusicPlayer
  );
  const showMusicPlayer = useMusicPlayerStore((state) => state.showMusicPlayer);

  return (
    <div>
      <div className="flex flex-col m-5 dark:text-slate-300">
        <p>
          <b> Whats new? </b>
        </p>
        <p> the latest releases </p>
        <div className="flex justify-start m-3">
          <Segmented<string> options={["Music", "Podcasts"]} />
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
                <img
                  src={album.image}
                  onClick={() => setShowMusicPlayer(true)}
                  className="w-20"
                />
              </div>
              <div className="flex flex-col">
                <div className="m-2" onClick={() => setShowMusicPlayer(true)}>
                  {album.name}
                </div>
              </div>
              <div className="m-2">description</div>
              <div className="m-2">
                <Button
                  shape="circle"
                  className="m-2 text-end"
                  onClick={() => setShowMusicPlayer(true)}
                  icon={<FaPlay />}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
