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
export default function mainhomepagewithoutlogin() {
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className=" row-start-0 col-start-0 p-3 m-3 justify-self-end">
        Popular artists
      </div>
      <div className="row-start-0 col-start-6 p-3 m-3 justify-self-end">
        <Button type="text">show all</Button>
      </div>
      <div className="flex justify-between col-start-1 row-start-2 pl-12">
        <Space direction="horizontal" className="">
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  size={238}
                  src={
                    <img
                      src="https://billgrahamcivic.com/wp-content/uploads/2022/05/AlanWalker_1024-2.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>alan walker</b>
              </p>
              <p>artist</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  size={238}
                  src={
                    <img
                      src="https://billgrahamcivic.com/wp-content/uploads/2022/05/AlanWalker_1024-2.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>alan walker</b>
              </p>
              <p>artist</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  size={238}
                  src={
                    <img
                      src="https://billgrahamcivic.com/wp-content/uploads/2022/05/AlanWalker_1024-2.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>alan walker</b>
              </p>
              <p>artist</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  size={238}
                  src={
                    <img
                      src="https://billgrahamcivic.com/wp-content/uploads/2022/05/AlanWalker_1024-2.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>alan walker</b>
              </p>
              <p>artist</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  size={238}
                  src={
                    <img
                      src="https://billgrahamcivic.com/wp-content/uploads/2022/05/AlanWalker_1024-2.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>alan walker</b>
              </p>
              <p>artist</p>
            </Card>
          </div>
        </Space>
      </div>
      <div className=" row-start-3 col-start-0 p-3 m-3 justify-self-end">
        Popular albums
      </div>
      <div className="row-start-3 col-start-6 p-3 m-3 justify-self-end">
        <Button type="text">show all</Button>
      </div>
      <div className="flex justify-between row-start-4 col-start-1 pl-12">
        <Space direction="horizontal" className="">
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>different world</b>
              </p>
              <p>alan walker</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>different world</b>
              </p>
              <p>alan walker</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>different world</b>
              </p>
              <p>alan walker</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>different world</b>
              </p>
              <p>alan walker</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>different world</b>
              </p>
              <p>alan walker</p>
            </Card>
          </div>
        </Space>
      </div>
      <div className=" row-start-5 col-start-0 p-3 m-3 justify-self-end">
        Popular radio
      </div>
      <div className="row-start-5 col-start-6 p-3 m-3 justify-self-end">
        <Button type="text">show all</Button>
      </div>
      <div className="flex justify-between row-start-6 col-start-1 pl-12">
        <Space direction="horizontal" className="">
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5UUG83KSlqPhrBssrducWV/de"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>radio name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5UUG83KSlqPhrBssrducWV/de"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>radio name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5UUG83KSlqPhrBssrducWV/de"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>radio name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5UUG83KSlqPhrBssrducWV/de"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>radio name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5UUG83KSlqPhrBssrducWV/de"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>radio name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
        </Space>
      </div>
      <div className=" row-start-7 col-start-0 p-3 m-3 justify-self-end">
        BEATplus playlists
      </div>
      <div className="row-start-7 col-start-6 p-3 m-3 justify-self-end">
        <Button type="text">show all</Button>
      </div>
      <div className="flex justify-between row-start-8 col-start-1 pl-12">
        <Space direction="horizontal" className="">
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>playlist name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>playlist name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>playlist name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>playlist name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
          <div className="">
            <Card
              className="bg-transparent border-transparent"
              hoverable
              style={{ width: 240, height: 320 }}
              cover={
                <Avatar
                  shape="square"
                  size={238}
                  src={
                    <img
                      src="https://media1.jpc.de/image/w1600/front/0/0190759240625.jpg"
                      alt="avatar"
                    />
                  }
                />
              }
            >
              {/* <Meta title="alan walker" description="artist" /> */}
              <p>
                <b>playlist name</b>
              </p>
              <p>description</p>
            </Card>
          </div>
        </Space>
      </div>
    </div>
  );
}
