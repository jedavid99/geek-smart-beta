import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const onMenuClick = (e) => {
    console.log('click', e);
  };


    const items = [
      {
        key: '1',
        label: 'Imprimir orden',
    
      },
        {
          key: '2',
          label: 'Editar',
      
        },
        {
          key: '3',
          label: 'Eliminar',
      
        },
       
      
      ];
export const OpcionesReport = () => (
    <Dropdown.Button
    menu={{
      items,
      onClick: onMenuClick,
    }}
  >
    opciones
  </Dropdown.Button>
)
