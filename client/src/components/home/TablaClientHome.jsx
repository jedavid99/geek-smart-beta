import React, { useRef, useState } from 'react';
import { Space, Table, Tag, Form,Card, Input, Select, Button, Dropdown, Tooltip } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, SyncOutlined, PrinterOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';




const onMenuClick = (e) => {
  console.log('click', e);
}
const items = [

  {
    key: '3',
    label: 'Imprimir orden',

  },
  {
    key: '2',
    label: 'Eliminar',

  },

]
const data = [

  {
    key: '1',
    Codigo: '01',
    nombre: 'daniel ortega',
    DNI: '9634468',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo",
    estadotele: <Tag icon={<ClockCircleOutlined />} color="warning">Presupuestar</Tag>,
    precioservite: '20.00',
    tags: ['irreparable', 'entregado'],
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>

  },
  {
    key: '2',
    Codigo: '02',
    DNI: '9634468',
    nombre: 'Jim Green',
    numerocliente: '541151747883',
    descriccion: "cambio de modulo",
    estadotele: <Tag icon={<CheckCircleOutlined />} color="success">Entregado</Tag>,
    precioservite: '150.00',
    tags: ['presupuestado'],
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>,


  },
  {
    key: '3',
    Codigo: '03',
    DNI: '9634468',

    nombre: 'Joe Black',
    numerocliente: '541151747883',
    descriccion: "cambio de pin de carga",
    estadotele: <Tag icon={<CheckCircleOutlined />} color="success">Entregado</Tag>,
    precioservite: '200.00',
    tags: ['presupuestal',],
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>,


  },
  {
    key: '4',
    Codigo: '04',
    DNI: '96374468',
    nombre: 'samuel luna',
    numerocliente: '541151747883',
    estadotele: <Tag icon={<SyncOutlined />} color="processing">Reparado</Tag>,
    precioservite: '30.00',
    tags: ['reparado', 'entregado'],
    descriccion: "cambio de microfono",
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>,



  },
]
export const TablaClientHome = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  }
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  }
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
          placeholder={`Buscar  ${dataIndex}`}
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
              })
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
  })

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
      title: 'Estatud',
      dataIndex: 'estado',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 10 ? 'geekblue' : 'green';
            if (tag === 'irreparable') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
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
  ]

  return <div>
<Card>
    <Table columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 2,
            }}
          > <div><h2 className="text-3xl">Descriccion</h2></div>
            <div className="text-3xl">{record.descriccion}</div>

            <div><h2>Numero de telefono</h2></div>
            {record.numerocliente}
          </p>

        ),

        rowExpandable: (record) => record.name !== 'Not Expandable',
      }} dataSource={data} />
</Card>
  </div>
}
