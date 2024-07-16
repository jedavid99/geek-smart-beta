import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { HomeOutlined, SettingFilled ,IdcardFilled } from "@ant-design/icons";
import { Breadcrumb, FloatButton } from "antd";
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
      <BotonUsuarios className=" mt-10" />
      <FloatButton
          className="float-btn  hidden-on-desktop"
          type="primary"
          icon={<IdcardFilled />}
        />
    </LayoutPrincipal>
  );
};
