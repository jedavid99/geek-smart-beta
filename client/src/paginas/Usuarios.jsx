import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { UsuariosLista } from "../components/Config/Usuarios/UsuariosLista";
import { BotonUsuarios } from "../components/Config/Usuarios/BotonUsuario";

export const UsuariosConfig = () => {
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
      <br />
      <UsuariosLista />
      <BotonUsuarios />
    </LayoutPrincipal>
  );
};
