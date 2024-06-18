"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaBackwardStep } from "react-icons/fa6";
import { ImNext2 } from "react-icons/im";
import { TfiLoop } from "react-icons/tfi";
import type { InputNumberProps } from "antd";
import { Col, InputNumber, Row, Slider, Drawer } from "antd";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { LuMic2 } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";
import { FaComputer } from "react-icons/fa6";
import { RxSpeakerLoud } from "react-icons/rx";
import { AiOutlineFullscreen } from "react-icons/ai";
import RightSideBarQueue from "./rightsidebarQueue";
import RightSideBarSongInformation from "./rightsidebarSongInformation";
export default function MusicPlayer() {
  const [inputValue, setInputValue] = useState(0);

  const onChange: InputNumberProps["onChange"] = (value) => {
    if (isNaN(value as number)) {
      return;
    }
    setInputValue(value as number);
  };
  const [inputValue2, setInputValue2] = useState(0);

  const onChange2: InputNumberProps["onChange"] = (value) => {
    if (isNaN(value as number)) {
      return;
    }
    setInputValue2(value as number);
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [openInfo, setOpenInfo] = useState(false);

  const showDrawerInfo = () => {
    setOpenInfo(true);
  };

  const onCloseInfo = () => {
    setOpenInfo(false);
  };
  return (
    <div className="w-full bg-slate-300 dark:bg-slate-900 rounded-lg">
      <div className="flex flex-row m-3 p-3 ">
        <div className="flex justify-start basis-1/4">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273dc3d61d589160ff29b775bc9"
            className="size-11 m-3"
            onClick={showDrawer}
          />
          <div className="flex flex-col">
            <p className="p-2">
              <b>Who i am</b>
            </p>
            <p className="p-2">Alan Walker</p>
          </div>
          <CiCirclePlus className="size-6 m-2" />
        </div>
        <div className="flex flex-col p-3 m-3 basis-1/2 justify-center">
          <div className="flex flex-row justify-center">
            <FaShuffle className="m-2" />
            <FaBackwardStep className="m-2" />
            <FaPlay className="m-2 size-6" />
            <ImNext2 className="m-2" />
            <TfiLoop className="m-2" />
          </div>
          <Row className="flex justify-center basis-8/12">
            <Col span={2}>
              <InputNumber
                min={0}
                max={1}
                style={{ margin: "0 16px" }}
                step={0.01}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
            <Col span={5}>
              <Slider
                min={0}
                max={3.23}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
                step={0.01}
              />
            </Col>
          </Row>
        </div>
        <div className="flex flex-row p-3 m-3 basis-1/4 justify-end">
          <AiOutlinePlaySquare className="m-2" />
          <LuMic2 className="m-2" />
          <TiThMenu className="m-2" onClick={showDrawer} />
          <FaComputer className="m-2" />
          <RxSpeakerLoud className="m-2" />
          <Col span={2}>
            <Slider
              min={0}
              max={100}
              onChange={onChange2}
              value={typeof inputValue2 === "number" ? inputValue2 : 0}
              step={5}
            />
          </Col>
          <AiOutlineFullscreen className="m-2" />
        </div>
      </div>
      <Drawer title="songs queue" onClose={onClose} open={open}>
        <RightSideBarQueue />
      </Drawer>
      <Drawer title="songs Information" onClose={onCloseInfo} open={openInfo}>
        <RightSideBarSongInformation />
      </Drawer>
    </div>
  );
}
