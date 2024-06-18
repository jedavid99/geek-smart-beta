import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaTelefonos } from '../components/Service/servicioTelefonos/TablasTelefono';
import '../App.css';
import { Breadcrumb, Card } from 'antd';
import { HomeOutlined, UserOutlined ,ToolFilled} from '@ant-design/icons';
import { BotonCliente } from '../components/Service/nuevocliente/BotonCliente';
import { EditClient } from '../components/Service/editCliente';


export const EditarC = () => {
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
        title: 'Editar',
      },
    ]}
  /><br/>
  <Card>
  <EditClient></EditClient>

</Card>

    </LayoutPrincipal>
  )
}

