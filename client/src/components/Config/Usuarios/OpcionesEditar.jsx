import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const items = [
  {
    label: 'Editar',
    key: '0',
  },
  {
    label: 'Eliminar',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Modificar',
    key: '3',
  },
];
export const OpcionesUsuario = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Opciones
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)
