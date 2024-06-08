import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';
import { TablaReport } from '../components/Report/TablaReport';
import { EstadisticaRerpo } from '../components/Report/EstaditicaReport';
import { Timeli } from '../components/home/TimeLine';
import { HomeOutlined, FilePdfFilled } from '@ant-design/icons';
import { Breadcrumb, Flex, Progress, Card, Space, Typography, Tooltip, Col, Row, Statistic } from "antd";
import { ServicioC } from '../components/home/ServicioC';
import { BotonImprimir } from '../components/Report/BotonImprimirReport';



export const Reportes = () => {
  return (
    <div>

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
                  <FilePdfFilled />
                  <span>Reportes</span>
                </>
              ),
            },

          ]}
        />

        <br />

        <Card>
        <Flex style={{ marginTop: 12, marginLeft: 1 }} gap="middle" vertical>

        <BotonImprimir></BotonImprimir>

<Space size={20}>
        <TablaReport></TablaReport>
   
    <EstadisticaRerpo></EstadisticaRerpo>
</Space>
    
    </Flex>
          <Timeli></Timeli>

          <ServicioC></ServicioC>
        </Card>
      </LayoutPrincipal>
    </div>
  )
}
