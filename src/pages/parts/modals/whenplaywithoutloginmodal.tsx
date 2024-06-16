import React, { useState } from "react";
import { Button, Modal } from "antd";
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

            <Button shape="round" className="m-3">
              signup free
            </Button>

            <Button shape="round" className="m-3">
              login
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
