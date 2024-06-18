import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Space, Table, Typography } from 'antd';
import { SearchOutlined, CheckCircleOutlined,CloseCircleOutlined ,PrinterFilled ,EditFilled } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { OpcionesServicio } from "../OpcionesServicio";
import { PdfOrden } from '../../Report/ReportPdf';



import Axios  from 'axios';
import { ModalEstaudtel } from '../../modal/ModalEstatud';


const originData = [];
 {
  originData.push({
    nombre: "",
    
  });

  
} 

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
  const inputNode = inputType === 'text' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
export const TablaTelefonos = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/producto/");
        const listaTelefonosWithKeys = response.data.map((item, index) => {
          return { ...item, key: index };
        });
        setData(listaTelefonosWithKeys);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchData();
  }, []);
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.codigo === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      nombre: '',
     
      ...record,
    });
    setEditingKey(record.codigo);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (codigo) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => codigo === item.codigo);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
  
        // Send a request to the server to update the record
        Axios.patch(`http://localhost:3001/producto/${codigo}`, row)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

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

 

  const columns = [
    {
      key:1,
      title: 'codigo',
      dataIndex: 'codigo',
      width: '5%',
      ...getColumnSearchProps("codigo"),

    },
   
    {
      key: 2,
      title: "DNI",
      dataIndex: "DNI",
      render: (text) => <a>{text}</a>,
      editable: true,
      ...getColumnSearchProps("DNI"),


    },

    {
      key: 3,
      title: "Nombre",
      dataIndex: "nombre",
      render: (text) => <a>{text}</a>,
      editable: true,
      ...getColumnSearchProps("nombre"),


    },

    {
      key: 4,
      title: "Numero de telefono",
      dataIndex: "telefono_Cliente",
      render: (text) => <a>{text}</a>,
      editable: true,

    },
    
    {
      key: 5,
      title: "descripcion",
      dataIndex: "descripcion",
      render: (text) => <a>{text}</a>,
      editable: true,

    },

    {
      key: 6,
      title: "Tipo de servio",
      dataIndex: "servicio",
      render: (text) => <a>{text}</a>,
      editable: true,
      width: '50%',


    },

    {
      key: 7,
      title: "Modelo",
      dataIndex: "dispositivo",
      render: (text) => <a>{text}</a>,
      editable: true,

    },
    {
      key: 8,
      title: "EMEI",
      dataIndex: "emei_codigo",
      render: (text) => <a>{text}</a>,
      editable: true,

    },

    {
      key: 9,
      title: "Estatus",
      dataIndex: "estatus",
      render: (text) => <a>{text}</a>,
    },

    {
      key: 10,
      title: "Precio",
      dataIndex: "precio",
      render: (text) => <a>{text}</a>,
      editable: true,

    },

    {
      key: 11,
      title: "Fecha de ingreso",
      dataIndex: "fecha registro",
      render: (text) => <a>{text}</a>,
    },
    {
      width: '100%',
      title: 'Opciones',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span className='flex flex-row'> 
            <Button
            icon={<CheckCircleOutlined />}
              onClick={() => save(record.codigo)}
              style={{
                marginRight: 8,
                
                
              }}
            >
              Guardad
            </Button>
            <Popconfirm  description="si lo desea selecione SI, si no lo desea selecione NO " okText="Si" cancelText="No"  title="¿Estás seguro de salir de esta tarea?" onConfirm={cancel}>
                <Button  className='mx-4' type='dashed ' icon={<CloseCircleOutlined/>}  >Cancelar </Button>
            </Popconfirm>
            <ModalEstaudtel  onClick={() => save(record.codigo)}  />
          </span>
        ) : (
          <>
          <div className='flex flex-row ms-0	'>
            <Button className='mx-7' type='primary' icon={<EditFilled />}
              codigo={record.codigo}
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              Editar
            </Button>
           
            <Button type="primary"
          style={{ backgroundColor: '#102C57' }}
          icon={<PrinterFilled />}
        codigo={record.codigo}
         disabled={editingKey!== ''}
         onClick={() => PdfOrden(record)}
         >
        Imprimir
          </Button>
          </div>
          </>
        );
      },
    }
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex ,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          pageSize: 5,
        }}
        scroll={{ x: 1300 }}
      />
    </Form>
  );
};
