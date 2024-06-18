import React from 'react';
import { DownOutlined } from '@ant-design/icons';

import { Button, Dropdown, Space, notification } from 'antd';
import { ModalEstaudtel } from '../modal/ModalEstatud';
import Axios from 'axios';
import { EditClient } from './editCliente';
import { NavLink } from 'react-router-dom';

export const OpcionesServicio = ({ codigo }) => {
  const eliminarRegistro = async (codigo) => {
    try {
      const response = await Axios.delete(`http://localhost:3001/producto/${codigo}`);
      if (response.status === 200) {
        notification.info({
          message: 'Servicio eliminado correctamente',
          duration: 3,
          placement: 'top' 
        });
      } else {
        notification.error({
          message: 'ocurrior un error al eliminar el servicio',
          duration: 3 });
      }
    } catch (error) {
      console.error('Error al eliminar registro:', error);
    }
  };const handleEliminarRegistro = () => eliminarRegistro(codigo);





  
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
          label: <NavLink to='/editar_datos'>Editar</NavLink>,
          key: '/editar_datos',
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
      onClick: handleEliminarRegistro,
    },
  ];
  return (
    <>
    <Dropdown.Button
      menu={{
        items,
        onClick: (e) => console.log('click', e),
      }}
    >
      opciones
    </Dropdown.Button>
    <Button >sss</Button>
    </>
    
  );
};