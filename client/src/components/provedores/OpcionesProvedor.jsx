import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';






const onMenuClick = (e) => {
    console.log('click', e);
  };


    const items = [
  
        {
          key: '3',
          label: 'Editar',
      
        },
        {
          key: '2',
          label: 'Eliminar',
      
        },
      
      ];
export const OpcionesPro = () => (
    <Dropdown.Button
    icon={<DownOutlined/>}
    menu={{
      items,
      onClick: onMenuClick,
    }}
  >
    opciones
  </Dropdown.Button>
)
