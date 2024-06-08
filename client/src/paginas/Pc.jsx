import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaPC } from '../components/Service/servicioPc/TablaPC';
import '../App.css';
import { Breadcrumb, Card } from 'antd';
import { HomeOutlined, UserOutlined ,ToolFilled} from '@ant-design/icons';
import { BotonCliente } from '../components/Service/nuevocliente/BotonCliente';




export const PC = () => {
  return (

    <LayoutPrincipal >
 <Breadcrumb
    items={[
      {
        href: '/home',
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
        title: 'Pc',
      },
    ]}
  /><br/>
  <Card>
<TablaPC></TablaPC>
</Card>
<BotonCliente></BotonCliente>

    </LayoutPrincipal>
  )
}
