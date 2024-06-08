import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaOtros } from '../components/Service/otrosServicios/TablasOtros'
import { BotonCliente } from '../components/Service/nuevocliente/BotonCliente'
import { Breadcrumb, Card } from 'antd'
import { HomeOutlined, UserOutlined, ToolFilled } from '@ant-design/icons';



export const Otros = () => {
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
            title: 'Otros servicio',
          },
        ]}
      />
      <br />
      <Card>
        <TablaOtros>

        </TablaOtros>
      </Card>
      <BotonCliente></BotonCliente>
      
    </LayoutPrincipal>
  )
}
