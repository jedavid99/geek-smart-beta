import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { HomeOutlined,  ShopFilled } from "@ant-design/icons";
import { TablaPoveedores } from "../components/provedores/TablaProveedores";

import { Breadcrumb, Card, Divider, Radio, Table } from "antd";
import { Flobott } from "../components/provedores/provedor-agre";

export const Proveedores = () => {
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
                <ShopFilled />
                <span>Proveedores</span>
              </>
            ),
          },
        ]}
      />
      <div className=" ">
        <Card>
          <TablaPoveedores />
        </Card>
      </div>

      <Flobott />
    </LayoutPrincipal>
  );
};
