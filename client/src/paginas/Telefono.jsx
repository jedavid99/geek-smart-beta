import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { TablaTelefonos } from "../components/Service/servicioTelefonos/TablasTelefono";
import "../App.css";
import { Breadcrumb, Card } from "antd";
import { HomeOutlined, UserOutlined, ToolFilled } from "@ant-design/icons";
import { BotonCliente } from "../components/Service/nuevocliente/BotonCliente";

export const Telefono = () => {
  return (
    <LayoutPrincipal>
      <Breadcrumb
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
      <br />
      <Card>
        <TablaTelefonos></TablaTelefonos>
      </Card>

      <BotonCliente></BotonCliente>
    </LayoutPrincipal>
  );
};
