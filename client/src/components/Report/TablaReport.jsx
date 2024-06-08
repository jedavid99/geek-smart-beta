import React, { useRef, useState } from 'react';
import { Space, Table, Tag, Form, Input, Select, Button, Dropdown, Tooltip } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, SyncOutlined, PrinterOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { OpcionesReport } from './OpcionesReport';

const data = [

  {
    key: '1',
    ordendeservicio: '01',
    nombre: 'daniel ortega',
    dni: '9634468',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo",
    estadotele: <Tag icon={<ClockCircleOutlined />} color="warning">Presupuestar</Tag>,
    precioservite: '20.00',
    estado: ['irreparable', 'entregado'],
    opciontele: <OpcionesReport />

  },
  {
    key: '2',
    ordendeservicio: '02',
    dni: '9634468',
    nombre: 'Jim Green',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo",
    estadotele: <Tag icon={<CheckCircleOutlined />} color="success">Entregado</Tag>,
    precioservite: '150.00',
    estado: ['presupuestado'],
    opciontele: <OpcionesReport />


  },
  {
    key: '3',
    ordendeservicio: '03',
    dni: '9634468',

    nombre: 'Joe Black',
    numerocliente: '541151747883',
    descriccion: "cambio de pin de carga",
    estadotele: <Tag icon={<CheckCircleOutlined />} color="success">Entregado</Tag>,
    precioservite: '200.00',
    estado: ['presupuestal',],
    opciontele: <OpcionesReport />


  },
  {
    key: '4',
    ordendeservicio: '04',
    dni: '96374468',
    nombre: 'samuel luna',
    numerocliente: '541151747883',
    estadotele: <Tag icon={<SyncOutlined />} color="processing">Reparado</Tag>,
    precioservite: '30.00',
    estado: ['reparado', 'entregado'],
    descriccion: "cambio de microfono",
    opciontele: <OpcionesReport />



  },
];
export const TablaReport = () => {
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
          placeholder={`Buscar por orden de servicio`}
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
      dataIndex: 'ordendeservicio',
      ...getColumnSearchProps('ordendeservicio'),

    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      ...getColumnSearchProps('dni'),

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
            )
          })}
        </>
      ),
    },
    {
      title: 'Precio',
      dataIndex: 'precioservite',
    },
    {
      title: 'Opciones',
      dataIndex: 'opciontele',
    },
  ];






  return <div>

    <Table columns={columns}
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
      }} dataSource={data} />

  </div>
}
