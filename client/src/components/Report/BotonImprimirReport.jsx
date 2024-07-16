import React from "react";
import {Tooltip,FloatButton} from "antd";
import { PrinterOutlined} from "@ant-design/icons";

export const BotonImprimir = () => {
  return (
    <>
 
 
      <FloatButton.Group
       
        icon={<PrinterOutlined />}
        trigger="click"
        type="primary"
        style={{ right: 24 }}
      >
        <Tooltip placement="leftBottom" title="Ingresados" color="blue">
          <FloatButton
            icon={<PrinterOutlined />}
            href="/Todos_Los_Equipos.pdf"
            type="primary"
          />
        </Tooltip>
        <Tooltip placement="leftBottom" title="Reparados" color="blue">
          <FloatButton
            icon={<PrinterOutlined />}
            href="Equipos_Reparados.pdf"
            type="primary"
          />
        </Tooltip>
        <Tooltip placement="leftBottom" title="Garantia" color="blue">
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
