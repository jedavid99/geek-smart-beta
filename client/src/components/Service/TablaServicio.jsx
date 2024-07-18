import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Select,
  Table,
  Tag,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  PrinterFilled,
  EditFilled,
  ClockCircleOutlined,
  DollarOutlined,
  CarryOutOutlined,
  MehFilled,
  ToolFilled,
  FireFilled,
  SafetyCertificateFilled,
  WarningFilled,
  UndoOutlined,
} from "@ant-design/icons";
import Axios from "axios";
import useSearch from "./SeachTabla";
import { API_URL } from "../../host";
const originData = [];
{
  originData.push({
    nombre: "",
    estatus: "",
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
  const { label, value, color, closable, onClose } = props;
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
          
          >
            <Select
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
export const TablaServicio = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/Servicio`);
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
  const isEditing = (record) => record.codigo === editingKey;
  const edit = (record) => {
    form.setFieldsValue({ nombre: "", estatus: "", DNI: "", ...record });
    setEditingKey(record.codigo);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (codigo) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => item.codigo === codigo);

      if (index > -1) {
        newData[index] = { ...newData[index], ...row };
      } else {
        newData.push(row);
      }
      setData(newData);
      setEditingKey("");

      await Axios.patch(`${API_URL}/Servicio/${codigo}`, row);
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const [loading, setLoading] = useState(false);
  const loadingTimeout = null;
  const getColumnSearchProps = useSearch();

  const columns = [
    {
      key: "codigo",
      title: "codigo",
      dataIndex: "codigo",
      width: "5%",
      ...getColumnSearchProps("codigo"), //
    },
    {
      key: "dni",
      title: "dni",
      dataIndex: "dni",
      render: (text) => <a>{text}</a>,
      editable: true,
      ...getColumnSearchProps("dni"), //
    },
    {
      key: "nombre",
      title: "Nombre",
      dataIndex: "nombre",
      render: (text) => <a>{text}</a>,
      editable: true,
      ...getColumnSearchProps("nombre"), //
    },
    {
      key: "telefono_cliente",
      title: "Numero de telefono",
      dataIndex: "telefono_cliente",
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      key: "descripcion",
      title: "descripcion",
      dataIndex: "descripcion",
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      key: "servicio",
      title: "Tipo de servio",
      dataIndex: "servicio",
      render: (text) => <a>{text}</a>,
      editable: true,
      width: "50%",
    },
    {
      key: "dispositivo",
      title: "Modelo",
      dataIndex: "dispositivo",
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      key: "emei_codigo",
      title: "EMEI",
      dataIndex: "emei_codigo",
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      key: "estatus",
      title: "Estatus",
      dataIndex: "estatus",
      render: (text) => {
        const getStatusColor = (status) => {
          switch (status) {
            case "Presupuestar":
              return "#006769";
            case "Ingresado":
              return "#402E7A";
            case "Presupuestado":
              return "#FAA300";
            case "Reparado":
              return "#1679AB";
            case "Inrreparable":
              return "#FF0000";
            case "Entregado":
              return "#06D001";
            case "Entregado Inrreparable":
              return "#C40C0C";
            case "Garantia":
              return "#686D76";
            default:
              return "gray";
          }
        };
        const getIcon = (status) => {
          switch (status) {
            case "Presupuestar":
              return <ClockCircleOutlined />;
            case "Ingresado":
              return <CarryOutOutlined />;
            case "Presupuestado":
              return <DollarOutlined />;
            case "Entregado Inrreparable":
              return <MehFilled />;
            case "Reparado":
              return <ToolFilled />;
            case "Inrreparable":
              return <FireFilled />;
            case "Entregado":
              return <SafetyCertificateFilled />;
            case "Garantia":
              return <WarningFilled />;
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
      key: "precio",
      title: "Precio",
      dataIndex: "precio",
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      key: "fecha_registro",
      title: "Fecha de ingreso",
      dataIndex: "fecha_registro",
      render: (text) => <a>{new Date(text).toLocaleDateString()}</a>,
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
              onClick={() => save(record.codigo)}
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
                codigo={record.codigo}
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              >
                Editar
              </Button>
              <Button
                href={`/orden_de_servicio.pdf?codigo=${record.codigo}`}
                type="primary"
                style={{ backgroundColor: "#102C57" }}
                icon={<PrinterFilled />}
                disabled={editingKey !== ""}
              >
                Imprimir
              </Button>
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
