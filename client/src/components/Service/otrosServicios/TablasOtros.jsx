import React, { useRef, useState } from 'react';
import { Space, Table, Tag, Form, Input, Select, Button, Dropdown, Tooltip } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, ClockCircleOutlined, SyncOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { OpcionesServicio } from '../OpcionesServicio';


const data = [

  {
    key: '1',
    Codigo: '01',
    nombre: 'daniel ortega',
    DNI: '9634468',
    dispositivo: 'TV',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo",
    precio: '20.00',
    estado: ['irreparable', 'entregado'],
    opciones: <OpcionesServicio />

  },
  {
    key: '2',
    Codigo: '02',
    DNI: '9634468',
    nombre: 'Jim Green',
    dispositivo: 'micro ondas',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo",
    precio: '150.00',
    estado: ['presupuestado'],
    opciones: <OpcionesServicio />,


  },
  {
    key: '3',
    Codigo: '03',
    DNI: '9634468',

    nombre: 'Joe Black',
    dispositivo: 'lavadora',
    numerocliente: '541151747883',
    descriccion: "cambio de pin de carga",
    precio: '200.00',
    estado: ['presupuestal',],
    opciones: <OpcionesServicio />,


  },
  {
    key: '4',
    Codigo: '04',
    DNI: '96374468',
    nombre: 'samuel luna',
    dispositivo: 'consola',
    numerocliente: '541151747883',
    precio: '30.00',
    estado: ['reparado', 'entregado'],
    descriccion: "cambio de microfono",
    opciones: <OpcionesServicio />,



  },
];
export const TablaOtros = () => {
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
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, }) => (
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
      dataIndex: 'DNI',
      ...getColumnSearchProps('DNI'),

    },
    {
      title: 'Nombre del cliente',
      dataIndex: 'nombre',
      render: (text) => <a>{text}</a>,
    },


    {
      title: 'Tipo de dispositivo ',
      dataIndex: 'dispositivo',
    },





    {
      title: 'Estatud',
      dataIndex: 'estado',
      key: 'estado',
      dataIndex: 'estado',
      render: (_, { estado }) => (
        <>
          {estado.map((estado) => {
            let color = estado.length > 10 ? 'geekblue' : 'green';
            if (estado === 'irreparable') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={estado}>
                {estado.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'precio',
      dataIndex: 'precio',
    },
    {
      title: 'opciones',
      dataIndex: 'opciones',
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
