import React, { useState } from 'react';
import { ServicioC } from './ServicioC'; 
import { Flex, Progress, Card, Space,  Tooltip, } from 'antd';

export const ServicioTotal = () => {
  return (
    <>
  <Flex style={{ marginTop: 12, marginLeft: 1 }} gap="middle" vertical>
    <Space size={20}>
      <Card className='flex px-1  w-full max-w-100'>      
      <Tooltip color="#40A2E3" title="Servcios nuevos">
          <Progress className='px-2 ' strokeColor="#40A2E3" size={[80, 20]} strokeWidth={12} type="dashboard" percent={50} status="active" />
        </Tooltip>
      </Card>
      <Card className='flex px-1  w-full max-w-100'>
        <Tooltip color="#87A922" title="Equipos por presupuesto" >
          <Progress className='px-2  ' strokeColor="#87A922" size={[80, 20]} strokeWidth={12} type="dashboard" percent={20} status="active" />
        </Tooltip>
      </Card>
      <Card className='flex px-1  w-full max-w-100'>
        <Tooltip color="#B80000" title="Garantias">
          <Progress className='px-2 ' strokeColor="#B80000" size={[80, 20]} strokeWidth={12} type="dashboard" percent={60} status="active" />
        </Tooltip>
      </Card>
      <Card className='flex px-1  w-full max-w-100'>
        <Tooltip color="#151515" title="telefonos">
          <Progress className='px-2 ' strokeColor="#151515" size={[80, 20]} strokeWidth={12} type="dashboard" percent={90} status="active" />
        </Tooltip>
      </Card>
      <Card className='flex px-1  w-full max-w-100'>
        <Tooltip color="#F97300" title="Pc">
          <Progress className='px-2 ' strokeColor="#F97300" size={[80, 20]} strokeWidth={12} type="dashboard" percent={30} status="active" />
        </Tooltip>
      </Card>
      <Card className='flex px-1  w-full max-w-100'>
        <Tooltip color="#0E46A3" title="Otros equipos">
          <Progress className='px-2 ' strokeColor="#0E46A3" size={[80, 20]} strokeWidth={12} type="dashboard" percent={10} status="active" />
        </Tooltip>
      </Card>
    </Space>
    <br />
    <ServicioC></ServicioC>
     </Flex>
</>
)
}
