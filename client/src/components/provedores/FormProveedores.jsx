import React, { useState } from "react";
import { Button, Col, Form, Input, Row, notification } from "antd";
import Axios from "axios";
import { API_URL } from "../../host";

export const FormProve = () => {
  const [nombre, setNombre] = useState("");
  const [CUIT_CUIL, setCUIT_CUIL] = useState("");
  const [Dirección, setDirección] = useState("");
  const [telefono, setTelefono] = useState("");
  const [categoria, setCategoria] = useState("");
  const [calidad, setcalidad] = useState("");

  const handleSelectCategoria = (event) => {
    const selectedValue = event.target.value;
    console.log("categoria seleccionado:", selectedValue);
    setCategoria(selectedValue); // Actualiza el estado con el valor seleccionado
  };

  const handleSelectCalidad = (event) => {
    const selectedValue = event.target.value;
    console.log("calidad seleccionada:", selectedValue);
    setcalidad(selectedValue); // Actualiza el estado con el valor seleccionado
  };

  const AgregarProveedor = () => {
    Axios.post(`${API_URL}/proveedor`, {
      nombre: nombre,
      categoria: categoria,
      CUIT_CUIL: CUIT_CUIL,
      Dirección: Dirección,
      telefono: telefono,
      calidad: calidad,
    })
      .then(() => {
        notification.success({
          message: "Proveedor agregado",
          description: `el proveedor ${nombre} ha sido agregado correctamente.`,
          duration: 3,
        });
      })
      .catch((error) => {
        notification.error({
          message: "Error ",
          description: `Ha ocurrido un error al agregar el provedor ${nombre} .`,
          duration: 3,
        });
      });
  };

  return (
    <>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="Proveedor"
              label="Proveedor"
              rules={[
                {
                  message: "Por favor ingrese el nombre del proveedor",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
                placeholder="Nombre del proveedor"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="CUIT/CUIL"
              label="CUIT/CUIL"
              rules={[
                {
                  message: "Por favor ingrese el CUIT/CUIL",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setCUIT_CUIL(event.target.value);
                }}
                placeholder="Nombre del proveedor"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="telefono"
              label="Numero de telefono"
              rules={[
                {
                  message:
                    "Por favor ingresar numero de telefono del proveedor",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setTelefono(event.target.value);
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
            <Form.Item
              name="calidad"
              label="Calidad del provedor"
              rules={[
                {
                  message: "calidad del provedor",
                },
              ]}
            >
              <select
                className="block w-full pl-3 pr-10 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                onChange={handleSelectCalidad}
              >
                <option value="" disabled selected>
                  Seleccione una opción
                </option>
                <option value="Buena">Buena</option>
                <option value="Regular">Regular</option>
                <option value="Prueba">Prueba</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="categoria"
              label="Categoria del provedor"
              rules={[
                {
                  message: "Categoria del provedor",
                },
              ]}
            >
              <select
                className="block w-full pl-3 pr-10 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                onChange={handleSelectCategoria}
              >
                {" "}
                <option value="" disabled selected>
                  Seleccione una opción
                </option>
                <option value="Telefonos">Telefonos</option>
                <option value="Pc">Pc</option>
                <option value="otros">otros</option>
              </select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="Direccion"
              label="Direccion"
              rules={[
                {
                  message: "Direccion del provedor",
                },
              ]}
            >
              <Input.TextArea
                onChange={(event) => {
                  setDirección(event.target.value);
                }}
                rows={4}
                placeholder="por favor ingresar la direccion"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Button onClick={AgregarProveedor} type="primary">
        Agregar
      </Button>
    </>
  );
};
