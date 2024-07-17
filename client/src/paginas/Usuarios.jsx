import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";
import { Breadcrumb, Card } from "antd";
import { UsuariosLista } from "../components/Config/Usuarios/UsuariosLista";
import { BotonUsuarios } from "../components/Config/Usuarios/BotonUsuario";

export const UsuariosConfig = () => {
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
                <SettingFilled />
                <span>Configuracion</span>
              </>
            ),
          },
          {
            title: "Usuarios",
          },
        ]}
      />
      <Card className="ml-4 mt-4"  >
      <UsuariosLista />
      <BotonUsuarios />
      </Card>
    </LayoutPrincipal>
  );
};
