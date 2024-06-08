import React, { useState } from 'react';
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { HomeOutlined, UserOutlined ,ShopFilled} from '@ant-design/icons';
import { TablaPoveedores } from '../components/provedores/TablaProveedores';


import { Breadcrumb, Divider, Radio, Table } from 'antd';
import { Flobott } from '../components/provedores/provedor-agre';






export const Proveedores = () => {
  return (

    <LayoutPrincipal>

<Breadcrumb
    items={[
      {
        href: '/home',
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
      <br />

      <TablaPoveedores></TablaPoveedores>
<Flobott/>
    </LayoutPrincipal>
  )
}
