import React, { useState, useEffect } from "react";
import { Table, Tag, Button } from "antd";
import {
  PrinterFilled,
  ClockCircleOutlined,
  DollarOutlined,
  CarryOutOutlined,
  MehFilled,
  ToolFilled,
  FireFilled,
  SafetyCertificateFilled,
  WarningFilled,
} from "@ant-design/icons";
import Axios from "axios";
import useSearch from "../Service/SeachTabla";
import { API_URL } from "../../host";

export const TablaReport = () => {
  const [listasTelefonos, setListaTelefonos] = useState([]);

  useEffect(() => {
    getTelefonosLista();
  }, []);

  const getTelefonosLista = () => {
    Axios.get(`${API_URL}/Servicio`, {}).then((response) => {
      const listaTelefonosWithKeys = response.data.map((item, index) => {
        return { ...item, key: index };
      });
      setListaTelefonos(listaTelefonosWithKeys);
    });
  };
  const getColumnSearchProps = useSearch();

  const columns = [
    {
      key: "codigo",
      title: "codigo",
      dataIndex: "codigo",
      width: "5%",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("codigo"),
    },

    {
      key: "nombre",
      title: "Nombre",
      dataIndex: "nombre",
      render: (text) => <a>{text}</a>,
      editable: true,
      ...getColumnSearchProps("nombre"),
    },

    {
      key: "servicio",
      title: "Tipo de servio",
      dataIndex: "servicio",
      render: (text) => <a>{text}</a>,
      width: "50%",
    },

    {
      key: "fecha_registro",
      title: "Fecha de ingreso",
      dataIndex: "fecha_registro",
      render: (text) => <a>{new Date(text).toLocaleDateString()}</a>,
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
    },
    {
      key: "options",
      title: "Acciones",
      dataIndex: "operation",
      render: (_, record) => {
        return (
          <div className="flex flex-row ms-0">
            <Button
              href={`/orden_de_servicio.pdf?codigo=${record.codigo}`}
              type="primary"
              style={{ backgroundColor: "#102C57" }}
              icon={<PrinterFilled />}
            >
              Imprimir
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={listasTelefonos}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};
