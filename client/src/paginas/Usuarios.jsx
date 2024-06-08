import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';

import { HomeOutlined, UserOutlined ,SettingFilled} from '@ant-design/icons';

import { Breadcrumb } from 'antd';
import { UsuariosLista } from '../components/Config/Usuarios/UsuariosLista';
import { BotonUsuarios } from '../components/Config/Usuarios/BotonUsuario';


export const UsuariosConfig = () => {
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
            <SettingFilled />
            <span>Configuracion</span>
          </>
        ),
      },
      {
        title: 'Usuarios',
      },
    ]}
  />
  <br />
  <UsuariosLista></UsuariosLista>
  <BotonUsuarios></BotonUsuarios>
    </LayoutPrincipal>
    
    </div>
  )
}
