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
import { OpcionesPro } from "./OpcionesProvedor";
import Highlighter from "react-highlight-words";
import Axios from "axios";

export const TablaPoveedores = () => {
  const [listasProveedores, setListaProveedores] = useState([]);


  useEffect(() => {
    getProveedoresLista();
  }, []);
  
  const getProveedoresLista = () => {
    Axios.get("http://localhost:3001/proveedor/", {
      params: {
        categoria: "pc nuevo"
      }
    }).then((response) => {
      const listasProveedorWithKeys = response.data.map((item, index) => {
        return {...item, key: index };
      });
      setListaProveedores(listasProveedorWithKeys);
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
      title: "Nombre",
      dataIndex: "nombre",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('nombre'),

    },
    {
      key:2,
      title: "CUIT_CUIL",
      dataIndex: "CUIT_CUIL",
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
      title: "calidad",
      dataIndex: "calidad",
      render: (text) => <a>{text}</a>,
    },
    {
    key:5,
    title: "Opciones",
    render: (record)=>{
      return <OpcionesPro/>
    }
  },
    

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
              {record.Dirección}
              <div>
                <h2>Numero de telefono</h2>
              </div>
              {record.telefono}
            </p>
          ),

          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={listasProveedores}
        pagination={{
          pageSize: 5,
        }}
        
      />
    </div>
  );
};