import React, { useState } from 'react'
import { NavLink, } from "react-router-dom"

import Logo from '../assets/img/geeksmart.jpg'

import { SettingFilled, ShopFilled, DashboardFilled, SketchCircleFilled, WindowsFilled,ReconciliationFilled, IdcardFilled ,PoweroffOutlined, ToolFilled, FilePdfFilled,MobileFilled } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme, Col, Row } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children,) {
  return {
    key,
    icon,
    children,
    label,
  };
}


export const LayoutPrincipal = ({children}) => {
  
  
  const [collapsed, setCollapsed] = useState(false);



  function cerrarSesion() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }
  
  



 
  return (


    <>
      <Layout id="menu" className='bg-indigo-600' style={{ minHeight: '100vh', }}>

        <Sider className='bg-indigo-600' style={{ height: "500px", background: "#4f46e5", }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="flex flex-shrink-0 p-4 px-4 bg-indigo-600">
            <a href="#" className="flex-shrink-0 block w-full group">
              <div className="flex items-center">
                <div>
                  <img className="h-10 w-10 rounded-full mx-auto h-23 w-auto space-y-6" src={Logo}></img>
                </div>
                <div className="ml-1">
                  <p className="text-sm font-medium text-white">GEEK SMART</p>
                </div>
              </div>
            </a>
          </div>





          <Menu className='bg-indigo-600' 

            mode="inline" items={[

              {
                label: <NavLink to='/home'>Dasboard</NavLink>,
                icon: <DashboardFilled />,
              },
              {
                label: "Servicio",
                icon: <ToolFilled />,
                children: [
                  {
                    label: <NavLink to='/telefonos'>telefonos</NavLink>,
                    key: "/servciotelefono",
                    icon:<MobileFilled />,
                  },
                  {
                    label:<NavLink to='/PC'>PC</NavLink>,
                    key: "/servciopc",
                    icon:<WindowsFilled />,
                  },
                  {
                    label:<NavLink to='/Otros'>Otros</NavLink>,
                    key: "/serviciotros",
                    icon:<SketchCircleFilled />,
                  },
                ]
              },
             
              {
                label: <NavLink to='/Reportes'>Reporte</NavLink>,
                icon: <FilePdfFilled />,
                key: "/reportes"
              },
              {
                label:  <NavLink to='/proveedores'>Proveedores</NavLink>,
                icon: <ShopFilled />,
                key: "/proveedores"
              },
              {
                label:'Configuracion',
                icon: <SettingFilled />,
                children:[
                  {
                    label:<NavLink to='/empresa'>Empresa</NavLink>,
                   icon:<ReconciliationFilled />,
                  },
                  {
                    label:<NavLink to='/usuarios'>Usuarios</NavLink>,
                    icon:<IdcardFilled />,
                  }
                ]
              },
              {
                label: <NavLink to='/' >Cerrar seccion</NavLink>,
                icon: <PoweroffOutlined />,
                key: "salir"
              },
            ]}></Menu>








         
        </Sider>

        <Layout>
          <Header style={{ padding: 0, }} />
          <Content style={{ margin: '0 16px', }}>
          <Breadcrumb style={{ margin: '10px 0', }} >

</Breadcrumb>
          {children}
          </Content>
          <Footer style={{ textAlign: 'center', }}>
            Geek smart ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
