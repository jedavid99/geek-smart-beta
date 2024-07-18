import {
  PlusCircleFilled,
  SignatureFilled,
  UpCircleFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Drawer, FloatButton,Button,  Tooltip } from "antd";
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
    <div  className="float-btn ">

   
      <FloatButton.Group
       className="mb-4"
        icon={<UpCircleFilled />}
        trigger="click"
        type="primary"
        style={{ right: 24 }}
      >
        <Tooltip placement="leftBottom"  title={window.innerWidth > 576 ? "Agragar usuario " : undefined}  color="blue">
          <FloatButton className="float-btn"
            icon={<PlusCircleFilled />}
            onClick={showDrawer}
            type="primary"
          />
        </Tooltip>
        <Tooltip placement="leftBottom" title={window.innerWidth > 576 ? "Agregar tarea " : undefined}  color="blue">
          <FloatButton className="float-btn"
            icon={<SignatureFilled />}
            onClick={showChat}
            type="primary"
          />
        </Tooltip>
      </FloatButton.Group>
      </div>
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
