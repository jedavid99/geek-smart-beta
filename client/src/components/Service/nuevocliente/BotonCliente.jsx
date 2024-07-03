import {PlusCircleFilled,} from "@ant-design/icons";
import React, { useState } from "react";
import {
  Col,
  Drawer,
  Space,
  FloatButton,
  Tooltip,
} from "antd";
import { FormCient } from "./FormClient";

export const BotonCliente = () => {
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
        title={window.innerWidth > 576 ? "Agregar Cliente" : undefined}
        color="blue"
      >
        <FloatButton
          className="float-btn sm:center-btn"
          icon={<PlusCircleFilled />}
          type="primary"
          onClick={showDrawer}
        />
      </Tooltip>
      <Drawer
        width={600}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <FormCient></FormCient>

        <Col span={12}>
          <Space></Space>
        </Col>
      </Drawer>
    </>
  );
};
