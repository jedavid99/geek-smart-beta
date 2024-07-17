import {
  PlusCircleFilled,
  SignatureFilled,
  UpCircleFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Drawer, FloatButton, Tooltip } from "antd";
import { FormAgreUser } from "./FormAgreUsua";
import { FormTareas } from "./tareas/Tareas";

export const BotonUsuarios = () => {
  const [open, setOpen] = useState(false);
  const [openchat, setChat] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const showChat = () => {
    setChat(true);
  };
  const onCloseChat = () => {
    setChat(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FloatButton.Group
        className="float-btn sm:center-btn"
        icon={<UpCircleFilled />}
        trigger="click"
        type="primary"
        style={{ right: 24 }}
      >
        <Tooltip placement="leftBottom" title="Agragar usuario" color="blue">
          <FloatButton
            icon={<PlusCircleFilled />}
            onClick={showDrawer}
            type="primary"
          />
        </Tooltip>
        <Tooltip placement="leftBottom" title="Tareas" color="blue">
          <FloatButton
            icon={<SignatureFilled />}
            onClick={showChat}
            type="primary"
          />
        </Tooltip>
      </FloatButton.Group>
      <Drawer
        title="Agregar Usuario"
        width={400}
        onClose={onClose}
        open={open}
        styles={{ body: { paddingBottom: 80 } }}
      >
        <FormAgreUser></FormAgreUser>
      </Drawer>
      <Drawer width={650} onClose={onCloseChat} open={openchat}>
        <FormTareas></FormTareas>
      </Drawer>
    </>
  );
};
