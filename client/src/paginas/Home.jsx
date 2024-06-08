import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { Timeli } from '../components/home/TimeLine'
import { TablaClientHome } from '../components/home/TablaClientHome'
import { Card, Space } from 'antd';
import { ServicioTotal } from '../components/home/ServicioTotal';
import { TablaReport } from '../components/Report/TablaReport';

export const Home = () => {
  return (

    <LayoutPrincipal id="menu" >
      <br /> 
      <Card>
      <ServicioTotal></ServicioTotal>

        <Space align="center" className="mt-9 pr-10 flex flex-row-reverse space-x-4 space-x-reverse" >
          <TablaReport ></TablaReport>

          <Timeli ></Timeli></Space>


      </Card>

    </LayoutPrincipal>
  )
}
