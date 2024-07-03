import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Tooltip, theme } from "antd";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Gasto 24-06-2024",
    children: <p> compra pasta termica</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "mercancia  10-06-2024 ",
    children: <p>enviar modulo</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
  {
    key: "4",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
  {
    key: "5",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
  {
    key: "6",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
  {
    key: "7",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
  {
    key: "8",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
  {
    key: "9",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
  {
    key: "10",
    label: "  insumo 10-06-2024",
    children: <p>reparar estacion de calor</p>,
  },
];
export const LineaRecordatorio = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 10,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Tooltip placement="top" title="tareas pendite" color="blue">
      <span>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="bg-yellow-100 p-4 rounded-md shadow-md overflow-y-auto h-screen md:h-96 lg:h-128 xl:h-160"
          items={getItems()}
        />
      </span>
    </Tooltip>
  );
};
