import React, { useRef, useState } from 'react';
import { Space, Table, Tag, Form, Input, Select, Button, Dropdown, Tooltip } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, ClockCircleOutlined, SyncOutlined, DownOutlined ,SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { OpcionesServicio } from '../OpcionesServicio';

const data = [
  
  {
    key: '1',
    Codigo: '01',
    nombre: 'daniel ortega',
    dni:'9634468',
    modelo: 'Samsung a23',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo",
    precioservite: '20.00',
    estatud: ['irreparable', 'entregado'],
    opciontele: <OpcionesServicio/>

  },
  {
    key: '2',
    Codigo: '02',
    dni:'9634468',
    nombre: 'Jim Green',
    modelo: 'Xiaomi a20',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo" ,
    precioservite: '150.00',
    estatud: ['presupuestado'],
    opciontele:<OpcionesServicio/>


  },
  {
    key: '3',
    Codigo: '03',
    dni:'9634468',
    nombre: 'Joe Black',
    modelo: 'samsung a20',
    numerocliente: '541151747883',
    descriccion: "cambio de pin de carga",
    precioservite: '200.00',
    estatud: ['presupuestal',],
    opciontele:<OpcionesServicio/>


  },
  {
    key: '4',
    Codigo: '04',
    dni:'96374468',
    nombre: 'samuel luna',
    modelo: 'moto e32',
    numerocliente: '541151747883',
    precioservite: '30.00',
    estatud: ['reparado', 'entregado'],
     descriccion: "cambio de microfono",
    opciontele: <OpcionesServicio/>

  },
];
export const TablaTelefonos = () => {
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
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters,  }) => (
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Restablecer
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
      title: 'Codigo',
      dataIndex: 'Codigo',
      ...getColumnSearchProps('Codigo'),

    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      ...getColumnSearchProps('DNI'),

    },
    {
      title: 'Nombre del cliente',
      dataIndex: 'nombre',
      render: (text) => <a>{text}</a>,
    },
  
   
    {
      title: 'Modelo del telefono',
      dataIndex: 'modelo',
    },
    
  
    
  
  
    {
      key: 'estatud',
      title: 'estatud',
      dataIndex: 'estatud',
     

      render: (_, { estatud }) => (
        <>
          {estatud.map((estatud) => {
            let color = estatud.length > 10 ? 'geekblue' : 'green';
            if (estatud === 'irreparable') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={estatud}>
                {estatud.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'precio',
      dataIndex: 'precioservite',
    },
    {
      title: 'opciones',
      dataIndex: 'opciontele',
    },
  ];
  

  
  
  return <Table columns={columns}   
  expandable={{
    expandedRowRender: (record) => (
      <p
        style={{
          margin: 2,
        }}
      > <div><h2>Descriccion</h2></div>
        {record.descriccion}
       
        <div><h2>Numero de telefono</h2></div>
        {record.numerocliente}
      </p>
      
    ),
    
    rowExpandable: (record) => record.name !== 'Not Expandable',
  }} dataSource={data} />;



}
