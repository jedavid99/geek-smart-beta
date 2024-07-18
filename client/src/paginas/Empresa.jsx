import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { DatosEmpresa } from "../components/Config/Empresa/DatosEmpresa";
import { BotonConfigEmpres } from "../components/Config/Empresa/BotonConfigEmpres";
import { Breadcrumb, Card } from "antd";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";

export const Empresa = () => {
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
            title: "Empresa",
          },
        ]}
      />
<Card className="ml-4 mt-4">
      <DatosEmpresa />
      </Card>
      <BotonConfigEmpres />
    
    </LayoutPrincipal>
  );
};
