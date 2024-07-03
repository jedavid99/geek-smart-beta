import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { DatosEmpresa } from "../components/Config/Empresa/DatosEmpresa";
import { BotonConfigEmpres } from "../components/Config/Empresa/BotonConfigEmpres";
import { Breadcrumb } from "antd";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";

export const Empresa = () => {
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
            title: "Empresa",
          },
        ]}
      />

      <DatosEmpresa />
      <BotonConfigEmpres />
    </LayoutPrincipal>
  );
};
