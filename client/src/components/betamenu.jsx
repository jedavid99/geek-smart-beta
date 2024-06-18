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

    import React, { useState, useEffect, useRef } from "react";
    import { Space, Table, Input, Button } from "antd";
    import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
    import Highlighter from "react-highlight-words";
    import { OpcionesServicio } from "../OpcionesServicio";
    import Axios from "axios";
    import { EditClient } from "../editCliente";
    
    
    export const TablaTelefonos = () => {
      const [listasTelefonos, setListaTelefonos] = useState([]);
      const [loading, setLoading] = useState(false);
      const loadingTimeout = null;
    
      useEffect(() => {
        getTelefonosLista();
      }, []);
    
      const getTelefonosLista = () => {
        setLoading(true);
    
        Axios.get("http://localhost:3001/producto/", {}).then((response) => {
          const listaTelefonosWithKeys = response.data.map((item, index) => {
            return { ...item, key: index };
          });
          setListaTelefonos(listaTelefonosWithKeys);
          setLoading(false);
        });
      };
     const handleReload = () => {
      setLoading(true);
      clearTimeout(loadingTimeout);
    
      return setTimeout(() => {
        getTelefonosLista();
        setLoading(false);
      }, 2000);
    };
    
    const [editar, setEditar] = useState("");
    const [tablat, setTablaT] = useState("");
    
    function formEditar() {
      setEditar("1");
      setTablaT("0");
    }
    function tabla() {
      setEditar("0");
      setTablaT("1");
    }
    
    
      const [searchText, setSearchText] = useState("");
      const [searchedColumn, setSearchedColumn] = useState("");
      const searchInput = useRef(null);
      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };
      const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
      };
      const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Buscar por ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: "block",
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Buscar
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Limpiar
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? "#1677ff" : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: "#ffc069",
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ""}
            />
          ) : (
            text
          ),
      });
      const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
      }) => {
        
      const columns = [
        {
          key: 1,
          title: "codigo",
          dataIndex: "codigo",
          render: (text) => <a>{text}</a>,
          ...getColumnSearchProps("codigo"),
          defaultSortCodigo: "descend",
          sorter: (a, b) => b.codigo,
        },
        {
          key: 7,
          title: "DNI",
          dataIndex: "DNI",
          render: (text) => <a>{text}</a>,
          ...getColumnSearchProps("DNI"),
        },
    
        {
          key: 2,
          title: "Nombre",
          dataIndex: "nombre",
          render: (text) => <a>{text}</a>,
        },
        {
          key: 9,
          title: "Fecha de ingreso",
          dataIndex: "fecha registro",
          render: (text) => <a>{text}</a>,
        },
        {
          key: 3,
          title: "Categoria",
          dataIndex: "categoria",
          render: (text) => <a>{text}</a>,
        },
    
        {
          key: 4,
          title: "Tipo de servio",
          dataIndex: "servicio",
          render: (text) => <a>{text}</a>,
        },
    
        {
          key: 6,
          title: "Modelo",
          dataIndex: "dispositivo",
          render: (text) => <a>{text}</a>,
        },
    
        {
          key: 10,
          title: "Estatus",
          dataIndex: "estatus",
          render: (text) => <a>{text}</a>,
        },
    
        {
          key: 5,
          title: "Precio",
          dataIndex: "precio",
          render: (text) => <a>{text}</a>,
        },
        {
          key: 11,
          title: "Opciones",
          render: (record) => {
            return <OpcionesServicio codigo={record.codigo} />;
          },
        
        },
        // ...
      ];
    
      return (
        <div>
          
           <div/>
            <Space style={{
                    margin: 9,
                  }}>
          <Button 
                
            type="primary"
            shape="circle"
            icon={<UndoOutlined spin={loading} />}
            onClick={handleReload}
            loading={loading}
          ></Button>
         </Space>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p
                  style={{
                    margin: 2,
                  }}
                >
                  <div>
                    <h2>Descriccion</h2>
                  </div>
                  {record.descripcion}
                  <div>
                    <h2 />
                    Numero de telefono
                  </div>
                  {record.telefono_Cliente}
                  <div>
                    <h2>Imei</h2>
                  </div>
                  <div> {record.emei_codigo}</div>
                </p>
              ),
    
              rowExpandable: (record) => record.name !== "Not Expandable",
            }}
            dataSource={listasTelefonos}
            pagination={{
              pageSize: 5,
            }}
            scroll={{ x: 1300 }}
          />
          <Button onClick={formEditar}> ssdsf</Button>
          <Button onClick={tabla}> rre</Button>
                  {editar === "1" && <EditClient />}
    
    
    
        </div>
    
        
      );
    };
    
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