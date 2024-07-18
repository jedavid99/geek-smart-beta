import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { TablaServicio } from "../components/Service/TablaServicio";
import { Breadcrumb, Card } from "antd";
import { HomeOutlined, ToolFilled } from "@ant-design/icons";
import { BotonCliente } from "../components/Service/nuevocliente/BotonCliente";

export const Servicio = () => {
  return (
    <LayoutPrincipal>
      <Breadcrumb className="ml-4"
        items={[
          {
            href: "/home",
            title: <HomeOutlined />,
          },
          {
            title: (
              <>
                <ToolFilled />
                <span>Servicio</span>
              </>
            ),
          },
          {
            title: "Clientes",
          },
        ]}
      />
     
      <Card className="ml-4 mt-4">
        <TablaServicio />
      </Card>

      <BotonCliente />
    </LayoutPrincipal>
  );
};
