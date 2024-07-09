import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Popconfirm,
  Table,
  Tag,
} from "antd";
import {
  FlagFilled,
  AlertFilled,
  CarryOutOutlined,
  HeartFilled,
  UndoOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditFilled,
} from "@ant-design/icons";
import Axios from "axios";
import useSearch from "../Service/SeachTabla";
import { API_URL } from "../../host";
import { OpcionesPro } from "./OpcionesProvedor";

const originData = [];
{
  originData.push({
    nombre: "",
    DNI: "",
  });
}
const options = [
  { value: "Presupuestar", label: "Presupuestar" },
  { value: "Presupuestado", label: "Presupuestado" },
  { value: "Reparado", label: "Reparado" },
  { value: "Inrreparable", label: "Inrreparable" },
  { value: "Entregado", label: "Entregado" },
  { value: "Entregado Inrreparable", label: "Entregado Inrreparable" },
  { value: "Garantia", label: "Garantia" },
];
const tagRender = (props) => {
  const { label, color, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={color}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {" "}
      {label}
    </Tag>
  );
};
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
  if (dataIndex === "estatus") {
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Por favor seleccione el ${title}!`,
              },
            ]}
          >
            <Select
              mode="multiple"
              maxTagCount={4}
              tagRender={tagRender}
              style={{ width: "100%" }}
              options={options}
            />
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  } else {
    const inputNode = inputType === "text" ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              { required: true, message: `Por favor ingrese el ${title}!` },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  }
};

export const TablaPoveedores = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/proveedor`);
        const listaTelefonosWithKeys = response.data.map((item, index) => {
          return { ...item, key: index };
        });
        setData(listaTelefonosWithKeys);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData(); // Run fetchData when the component mounts or refresh changes
  }, [refresh]); // Run fetchData when refresh changes

  const handleReload = () => {
    setRefresh(true); // Update refresh state to trigger useEffect
    setLoading(true);
    clearTimeout(loadingTimeout);
    setTimeout(() => {
      setRefresh(false); // Reset refresh state
      setLoading(false);
    }, 1000);
  };

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({ nombre: "", estatus: "", DNI: "", ...record });
    setEditingKey(record.id);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => item.id === id);

      if (index > -1) {
        newData[index] = { ...newData[index], ...row };
      } else {
        newData.push(row);
      }
      setData(newData);
      setEditingKey("");

      await Axios.patch(`${API_URL}/proveedor/${id}`, row);
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const [loading, setLoading] = useState(false);
  const loadingTimeout = null;
  const getColumnSearchProps = useSearch();

  const columns = [
    {
      key: "id",
      title: "id",
      dataIndex: "id",
      width: "5%",
      ...getColumnSearchProps("id"), //
    },
    {
      width: "20%",

      key: "nombre",
      title: "Proveedor",
      dataIndex: "nombre",
      render: (text) => <a>{text}</a>,
      editable: true,
      ...getColumnSearchProps("nombre"), //
    },
    {
      key: "CUIT_CUIL",
      title: "CUIT/CUIL",
      dataIndex: "CUIT_CUIL",
      render: (text) => <a>{text}</a>,
      editable: true,
      ...getColumnSearchProps("CUIT_CUIL"), //
    },
    {
      width: "50%",

      key: "Dirección",
      title: "Dirección",
      dataIndex: "Dirección",
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      key: "telefono",
      title: "telefono",
      dataIndex: "telefono",
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      key: "categoria",
      title: "categoria",
      dataIndex: "categoria",
      render: (text) => <a>{text}</a>,
      editable: true,
    },

    {
      key: "calidad",
      title: "calidad",
      dataIndex: "calidad",
      render: (text) => {
        const getStatusColor = (calidad) => {
          switch (calidad) {
            case "buena":
              return "#006769";
            case "regular":
              return "#402E7A";
            case "Prueba":
              return "#FAA300";
            default:
              return "gray";
          }
        };
        const getIcon = (calidad) => {
          switch (calidad) {
            case "buena":
              return <HeartFilled />;
            case "regular":
              return <AlertFilled />;
            case "Prueba":
              return <FlagFilled />;
          }
        };
        return text ? (
          Array.isArray(text) ? (
            text.map((status) => (
              <Tag key={status} color={getStatusColor(status)}>
                {getIcon(status)} {status}
              </Tag>
            ))
          ) : (
            <Tag color={getStatusColor(text)}>
              {getIcon(text)} {text}
            </Tag>
          )
        ) : (
          <Tag color="#006769" icon={<CarryOutOutlined />}>
            Ingresado
          </Tag>
        );
      },
      editable: true,
    },

    {
      key: "Opciones",
      width: "100%",
      title: "Opciones",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span className="flex flex-row">
            <Button
              icon={<CheckCircleOutlined />}
              onClick={() => save(record.id)}
              style={{ marginRight: 8 }}
            >
              Guardad
            </Button>
            <Popconfirm
              description="si lo desea selecione SI, si no lo desea selecione NO "
              okText="Si"
              cancelText="No"
              title="¿Estás seguro de salir de esta tarea?"
              onConfirm={cancel}
            >
              <Button
                className="mx-4"
                type="dashed "
                icon={<CloseCircleOutlined />}
              >
                Cancelar
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <>
            <div className="flex flex-row ms-0	">
              <Button
                className="mx-7"
                type="primary"
                icon={<EditFilled />}
                id={record.id}
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              >
                Editar
              </Button>
              <OpcionesPro id={record.id} />
            </div>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <>
      <Button
        className="mx-7   mb-4"
        icon={<UndoOutlined spin={loading} />}
        type="primary"
        shape="circle"
        onClick={handleReload}
      ></Button>

      <Form form={form} component={false}>
        <div>
          <Table
            components={{ body: { cell: EditableCell } }}
            bordered
            dataSource={data.map((item, index) => ({
              ...item,
              key: `row-${index}`, // Use a unique key for each row
            }))}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{ pageSize: 5 }}
            scroll={{ x: 1300 }}
          />
        </div>
      </Form>
    </>
  );
};
