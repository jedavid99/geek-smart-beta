import React, { useState, useEffect ,useRef } from "react";
import {
  Space,
  Table,
  Tag,
  Form,
  Input,
  Select,
  Button,
  Dropdown,
  Tooltip,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { OpcionesServicio } from "../OpcionesServicio";
import Axios from "axios";

export const TablaTelefonos = () => {
  const [listasTelefonos, setListaTelefonos] = useState([]);


  useEffect(() => {
    getTelefonosLista();
  }, []);
  
  const getTelefonosLista = () => {
    Axios.get("http://localhost:3001/producto/", {
      params: {
        categoria: "pc nuevo"
      }
    }).then((response) => {
      const listaTelefonosWithKeys = response.data.map((item, index) => {
        return {...item, key: index };
      });
      setListaTelefonos(listaTelefonosWithKeys);
    });
  };

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
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
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
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
          color: filtered ? '#1677ff' : undefined,
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
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    
    {
      key:1,
      title: "orden de servico",
      dataIndex: "orde",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('orde'),

    },
    {
      key:7,
      title: "DNI",
      dataIndex: "DNI",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('DNI'),

    }, 

    {
      key:2,
      title: "Nombre",
      dataIndex: "nombre",
      render: (text) => <a>{text}</a>,
    },
    {
      key:9,
      title: "Fecha de ingreso",
      dataIndex: "fecha registro",
      render: (text) => <a>{text}</a>,
    },
    {
      key:3,
      title: "Categoria",
      dataIndex: "categoria",
      render: (text) => <a>{text}</a>,
    },

    {
      key:4,
      title: "Tipo de servio",
      dataIndex: "servicio",
      render: (text) => <a>{text}</a>,
    },
   
    {
      key:6,
      title: "Modelo",
      dataIndex: "dispositivo",
      render: (text) => <a>{text}</a>,
    },
    
    
    
    {
      key:10,
      title: "Estatus",
      dataIndex: "estatus",
      render: (text) => <a>{text}</a>,
    },

    {
      key:5,
      title: "Precio",
      dataIndex: "precio",
      render: (text) => <a>{text}</a>,
    },
    {
      key:11,
      title: "Opciones",
      render: (record)=>{
        return <OpcionesServicio/>
      }
    },
    // ...
  ];

  return (
    <div>
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
                <h2>Numero de telefono</h2>
              </div>
              {record.telefono_Cliente}
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
    </div>
  );
};