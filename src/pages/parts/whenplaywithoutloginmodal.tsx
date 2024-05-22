import React, { useState } from "react";
import Image from "next/image";
import head from "next/head";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { SiBigbluebutton } from "react-icons/si";
import { Card, Avatar, Space } from "antd";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button, ConfigProvider, Flex } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Input } from "antd";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Segmented } from "antd";
import { Modal } from "antd";
import { createStyles, useTheme } from "antd-style";

const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    background: token.blue1,
    padding: token.paddingSM,
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  "my-modal-footer": {
    color: token.colorPrimary,
  },
  "my-modal-content": {
    border: "1px solid #333",
  },
}));

export default function Whenplaysongwithoutlogin() {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();
  const toggleModal = (idx: number, target: boolean) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  const classNames = {
    body: styles["my-modal-body"],
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
  };

  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: "inset 0 0 5px #999",
      borderRadius: 5,
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      borderTop: "1px solid #333",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };
  return (
    <>
      <Button type="primary" onClick={() => toggleModal(1, true)}>
        play song
      </Button>

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#CBD5E1",
              footerBg: "#CBD5E1",
              headerBg: "#CBD5E1",
              titleColor: "#0F172A",
            },
          },
        }}
      >
        <Modal
          open={isModalOpen[1]}
          onOk={() => toggleModal(1, false)}
          onCancel={() => toggleModal(1, false)}
        >
          <div className="flex flex-row">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/c6/Diamond_Heart_Alan_Walker.jpg"
              className="m-3 flex justify-start rounded-lg w-27 h-27"
            />
            <div className="flex flex-col justify-center m-3">
              <p className="text-slate-900 font-bold">
                start listening with a free BEAT+ account
              </p>
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
                <Button shape="round" className="m-3">
                  signup free
                </Button>
              </ConfigProvider>
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
                <Button shape="round" className="m-3">
                  login
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
}
