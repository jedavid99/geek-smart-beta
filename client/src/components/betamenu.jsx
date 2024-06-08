import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { Registrar } from "./Registrar"
import { Listar } from "./Listar"
import { Estadistica } from "./Estadistica"
import { Charp } from './home/charp'
import { Charpclien } from './home/charp-clien'
import Logo from '../assets/img/geeksmart.jpg'
import { Timeli } from './home/time-line'
import { Provelist } from './provedores/provedore-list'
import { Flobott } from './provedores/provedor-agre'
import { SettingFilled, ShopFilled, DashboardFilled, SmileFilled, UserOutlined, PoweroffOutlined, ToolFilled, FilePdfFilled } from '@ant-design/icons'
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


export const Sailbar = (props) => {
  const [flobtp, setFlobp] = useState("");

  const [prov, setProv] = useState("");

  const [Timl, setTeml] = useState("");
  const [reg, setReg] = useState("");
  const [lis, setLis] = useState("");
  const [est, setEst] = useState("");
  const [chap, setChap] = useState("");
  const [chapcl, setChapcli] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();


  function cerrarSesion() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }
  function op_registrar() {
    setReg("1");
    setLis("0");
    setEst("0");
  }
  function op_listar() {
    setReg("0");
    setLis("1");
    setEst("0");
  }
  function op_estadistica() {
    setReg("0");
    setLis("0");
    setEst("1");
  }
  function op_Dashboard() {
    setReg("0");
    setLis("1");
    setEst("0");
    setChap("1");
    setChapcli("1");
    setTeml("1");
    setFlobp("0");
    setProv("0");


  }

  function op_provedores() {
    setProv("1");
    setReg("0");
    setLis("0");
    setEst("0");
    setChap("0");
    setChapcli("0");
    setTeml("0")
    setFlobp("1")


  }

  const items = [

    getItem('Servicio', 'Servicio', <ToolFilled />, [
      getItem('Servicio Telefonos', '3'),
      getItem('Servicio PC', '4'),
      getItem('Servicio de Otros Equipo', '5'),
    ]),
    getItem('Clientes', 'sub2', <SmileFilled />, [getItem('Nuevo Cliente', '6'), getItem('Tabla de clientes', '8')]),
    getItem('Reportes', 'sub3', <FilePdfFilled />, [getItem('Informes de Servicio ', '10'), getItem('Informes de ganancias', '12'), getItem('Informes de Cliente', '11')]),
    getItem('Provedores', '9', <ShopFilled />),
    getItem('Configuracion', '2', <SettingFilled />,)

  ];

  const items3 = [
    getItem('Dashboard', '1', <DashboardFilled />),


  ];

  const itemspr = [
    getItem('Provedores', '9', <ShopFilled />),


  ];
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



<Menu items={items3} onClick={op_Dashboard}></Menu>

          <Menu className='bg-indigo-600' 

            mode="inline" items={[

              {
                label: <NavLink to='/charp'>home</NavLink>,
                icon: <DashboardFilled />,
                key: "/dasboard"
              },
              {
                label: "Servicio",
                icon: <ToolFilled />,
                children: [
                  {
                    label: 'Servicio Telefonos',
                    key: "/servciotelefono"
                  },
                  {
                    label: 'Servicio pc',
                    key: "/servciopc"
                  },
                  {
                    label: 'Servicio otros',
                    key: "/serviciotros"
                  },
                ]
              },
              {
                label: "Clientes",
                icon: <SmileFilled />,
                children: [
                  {
                    label: 'Mis clientes',
                    key: "/clientes"
                  }]
              },
              {
                label: "Reportes",
                icon: <FilePdfFilled />,
                key: "/reportes"
              },
              {
                label: "Provedores",
                icon: <ShopFilled />,
                key: "/provedores"
              },
              {
                label: "Configuracion",
                icon: <SettingFilled />,
                key: "/configuuracion"
              },
              {
                label: "salir",
                icon: <PoweroffOutlined />,
                key: "salir"
              },
            ]}></Menu>








          <nav className="flex-1 space-y-4 bg-indigo-700">
            <ul >
              <li>
                <a className="inline-flex items-center w-full px-4 py-2 mt-0 text-black transition duration-500 ease-in-out transform border-indigo-600 rounded-lg hover:border-indigo-600 focus:shadow-outline hover:bg-indigo-500" white="" href="#" onClick={cerrarSesion} >

                  <span className="ml-2"><PoweroffOutlined /></span>
                </a>
              </li>

            </ul>
          </nav>
        </Sider>

        <Layout>
          <Header style={{ padding: 0, }} />
          <Content style={{ margin: '0 16px', }}>
            <Breadcrumb style={{ margin: '16px 0', }} >

            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, }}>




              <Row className='flex px-1  w-full max-w-100' >
                <Col span={9}><div  >{chap === "1" && <Charp />} </div></Col>


              </Row>

              <center> <Row className='flex px-1  w-full max-w-100' >
                <Col span={9}>
                  {Timl === "1" && <Timeli />}


                </Col>
                <Col></Col>

              </Row>
              </center>

              {flobtp === "1" && <Flobott />}
              {prov === "1" && <Provelist />}
              {lis === "1" && <Listar />}
              {est === "1" && <Estadistica />}
              {reg === "1" && <Registrar />}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', }}>
            Geek smart ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Sailbar;