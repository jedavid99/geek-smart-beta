import React, { useState } from "react";
import { EditFilled, ShopFilled } from "@ant-design/icons";
import { Drawer, FloatButton, Space, Tooltip } from "antd";
import { EditarDatosEmpresa } from "./EditarDatosEmpresa";

export const BotonConfigEmpres = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          right: 24,
        }}
        icon={<EditFilled />}
        className="float-btn sm:center-btn"
      >
        {" "}
        <Tooltip placement="leftBottom" title="Actualizar datos" color="blue">
          <FloatButton
            onClick={showDrawer}
            type="primary"
            icon={<ShopFilled />}
          />
        </Tooltip>
      </FloatButton.Group>
      <Space></Space>

      <Drawer title="Actualizar datos" onClose={onClose} open={open}>
        <EditarDatosEmpresa/>
      </Drawer>
    </>
  );
};
