import React from "react";
import {Tooltip,FloatButton} from "antd";
import { PrinterOutlined} from "@ant-design/icons";

export const BotonImprimir = () => {
  return (
    <>
 
 
      <FloatButton.Group
       className="mb-4"
        icon={<PrinterOutlined />}
        trigger="click"
        type="primary"
        style={{ right: 24 }}
      >
        <Tooltip placement="leftBottom"   title={window.innerWidth > 576 ? "Ingresados" : undefined}  usuario color="blue">
          <FloatButton
            icon={<PrinterOutlined />}
            href="/Todos_Los_Equipos.pdf"
            type="primary"
          />
        </Tooltip>
        <Tooltip placement="leftBottom"   title={window.innerWidth > 576 ? "Reparados " : undefined}  color="blue">
          <FloatButton
            icon={<PrinterOutlined />}
            href="Equipos_Reparados.pdf"
            type="primary"
          />
        </Tooltip>
        <Tooltip placement="leftBottom"  title={window.innerWidth > 576 ? "Garantia " : undefined}  color="blue">
          <FloatButton
            icon={<PrinterOutlined />}
            href="Garantias.pdf"
            type="primary"
          />
        </Tooltip>
      </FloatButton.Group>
      
    </>
  );
};
