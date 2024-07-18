import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { HomeOutlined,  ShopFilled } from "@ant-design/icons";
import { TablaPoveedores } from "../components/provedores/TablaProveedores";

import { Breadcrumb, Card } from "antd";
import { Flobott } from "../components/provedores/provedor-agre";

export const Proveedores = () => {
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
                <ShopFilled />
                <span>Proveedores</span>
              </>
            ),
          },
        ]}
      />
     
        <Card className="ml-4 mt-4">
          <TablaPoveedores />
        </Card>
    

      <Flobott />
    </LayoutPrincipal>
  );
};
