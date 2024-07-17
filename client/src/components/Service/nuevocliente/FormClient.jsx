import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  notification,
} from "antd";
import Axios from "axios";
import { API_URL } from "../../../host";


export const FormCient = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [servicio, setServicio] = useState("");
  const [dispositivo, setDispositivo] = useState("");
  const [DNI, setDNI] = useState("");
  const [telefono_Cliente, setTelefono_Cliente] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estatus, setEstatus] = useState("");
  const [emei_codigo, setEmei_codigo] = useState("");

  const AgregarCliente = () => {
    Axios.post(`${API_URL}/producto`, {
      nombre: nombre,
      categoria: categoria,
      precio: precio,
      servicio: servicio,
      dispositivo: dispositivo,
      DNI: DNI,
      telefono_Cliente: telefono_Cliente,
      descripcion: descripcion,
      estatus: estatus,
      emei_codigo: emei_codigo,
    })
      .then(() => {
        notification.success({
          message: "Cliente agregado",
          description: `El cliente ${nombre} ha sido agregado correctamente.`,
          duration: 3,
        });
        LimpoarCampos();
      })
      .catch((error) => {
        notification.error({
          message: "Error ",
          description: "Ha ocurrido un error al agregar el cliente.",
          duration: 3,
        });
      });
  };

  const LimpoarCampos = () => {
    setNombre("");
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Valor seleccionado:", selectedValue);
    setCategoria(selectedValue); // Actualiza el estado con el valor seleccionado
  };

  const handleSelectEstatus = (event) => {
    const selectedValue = event.target.value;
    console.log("Valor seleccionado:", selectedValue);
    setEstatus(selectedValue); // Actualiza el estado con el valor seleccionado
  };
  return (
    <>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <div className="text-7xl">
              <Form.Item
                label="Nombre completo del cliente:"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese el nombre del cliente",
                  },
                ]}
              >
                <Input
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                  placeholder="Nombre del cliente"
                />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <Form.Item name="categoria" label="Categoria:" rules={[]}>
              <select 
              className="block w-full pl-3 pr-10 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500" onChange={handleSelectChange}>
                <option value=""disabled selected>
                  Selecione una categoria
                </option>
                <option value="Telefonos">Telefonos</option>
                <option value="Pc">Pc</option>
                <option value="otros">otros</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo de servicio:"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el tipo de servicio",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setServicio(event.target.value);
                }}
                placeholder="Tipo de servicio"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="DNI"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el DNI",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setDNI(event.target.value);
                }}
                placeholder="Tipo de dispositivo"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo de dispositivo"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el Tipo de dispositivo",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setDispositivo(event.target.value);
                }}
                placeholder="Tipo de dispositivo"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="IMEI O CODIGO:"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar el IMEI",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setEmei_codigo(event.target.value);
                }}
                style={{
                  width: "100%",
                }}
                placeholder=" Ingresar IMEI"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Numero de telefono:"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar el numero de cliente",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setTelefono_Cliente(event.target.value);
                }}
                style={{
                  width: "100%",
                }}
                addonBefore="+54"
                placeholder=" Ingresar numero de telefono"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Precio del servicio:" rules={[]}>
              <Input
                onChange={(event) => {
                  setPrecio(event.target.value);
                }}
                style={{
                  width: "100%",
                }}
                placeholder="Precio del servicio"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Estatus:" rules={[]}>
              <select  className="block w-full pl-3 pr-10 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"  onChange={handleSelectEstatus}>
                <option disabled selected>Selecione una Estatus</option>
                <option value="Ingresado">Ingresado</option>
                <option value="Presupuestado">Presupuestado</option>
              </select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Descricion"
              rules={[
                {
                  required: true,
                  message: "Direccion del telefono",
                },
              ]}
            >
              <Input.TextArea
                onChange={(event) => {
                  setDescripcion(event.target.value);
                }}
                rows={4}
                placeholder="por favor ingresar la descripcion"
              />

              <input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Button onClick={AgregarCliente} type="primary">
          Agregar
        </Button>
      </Form>
    </>
  );
};
