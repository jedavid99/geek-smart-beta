import { PlusCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { Drawer, Space, FloatButton, Tooltip } from "antd";
import { FormProve } from "./FormProveedores";

export const Flobott = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip
        title={window.innerWidth > 576 ? "Agregar proveedor" : undefined}
        color="blue"
      >
        <FloatButton
          className="float-btn sm:center-btn"
          type="primary"
          icon={<PlusCircleFilled />}
          onClick={showDrawer}
        />
      </Tooltip>
      <Drawer
        title="Agregar provedor"
        width={400}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={<Space></Space>}
      >
        <FormProve></FormProve>
      </Drawer>
    </>
  );
};
