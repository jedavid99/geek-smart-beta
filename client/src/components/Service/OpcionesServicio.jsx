import React from 'react';
import { DownOutlined } from '@ant-design/icons';

import { Dropdown, Space } from 'antd';
import { ModalEstaudtel } from '../modal/ModalEstatud';
const onMenuClick = (e) => {
    console.log('click', e);
  };


  const items = [
    {
      key: '1',
      label: 'Editar',
      children: [
       
        {
          label: <ModalEstaudtel />,
          key: "estatutd",
  
  
  
        },
        {
          label: 'Datos',
          key: "datos"
        },
      ]
    },
    {
      key: '3',
      label: 'Imprimir orden',
  
    },
    {
      key: '2',
      label: 'Eliminar',
  
    },
  
  ];
export const OpcionesServicio = () => (
    <Dropdown.Button
    menu={{
      items,
      onClick: onMenuClick,
    }}
  >
    opciones
  </Dropdown.Button>
)
