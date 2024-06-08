import React, { useState } from 'react';
import { HomeOutlined, UserOutlined ,ShopFilled} from '@ant-design/icons';
import { Breadcrumb, Card, Divider, Radio, Table } from 'antd';
import { OpcionesPro } from './OpcionesProvedor';
const columns = [
  {
    title: 'Provedores',
    dataIndex: 'provedores',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'categoria',
  },
  {
    title: 'Numero de telefono',
    dataIndex: 'NumeroDtelefono',
  },
  {
    title: 'dirrecion',
    dataIndex: 'dirrecion',
  },
  {
    title: 'opciones',
    dataIndex: 'Opciones',
  },
];
const data = [
  {
    key: '1',
    provedores: 'John Brown',
    categoria: 'telefono',
    NumeroDtelefono: 1151747883,
    dirrecion: 'capital 34 av',
    Opciones: <OpcionesPro/>,
  },
  {
    key: '2',
    provedores: 'Jim Green',
    categoria: 'pc',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
    Opciones: <OpcionesPro/>,

  },
  {
    key: '3',
    provedores: 'Joe Black',
    categoria: 'pc',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
    Opciones: <OpcionesPro/>,

  },
  {
    key: '4',
    provedores: 'Disabled User',
    categoria: 'varios',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
    Opciones: <OpcionesPro/>,

  },
  {
    key: '4',
    provedores: 'Disabled User',
    categoria: 'telefono',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
    Opciones: <OpcionesPro/>,

  },
  
];

// rowSelection object indicates the need for row selection

export const TablaPoveedores = () => {
  return (

 <>
 <Card>

      <br />

     <Table
        
        columns={columns}
        dataSource={data}
      />
      </Card>
</>
  )
}
