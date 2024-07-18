import React, { useState } from "react";
import { EditFilled} from "@ant-design/icons";
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
     
        {" "}
        <Tooltip placement="leftBottom"    title={window.innerWidth > 576 ? "Actualizar datos " : undefined} color="blue">
          <FloatButton
            onClick={showDrawer}
            type="primary"
            icon={<EditFilled />}
            className="float-btn"
          />
        </Tooltip>
   
      <Space></Space>

      <Drawer title="Actualizar datos" onClose={onClose} open={open}>
        <EditarDatosEmpresa/>
      </Drawer>
    </>
  );
};
