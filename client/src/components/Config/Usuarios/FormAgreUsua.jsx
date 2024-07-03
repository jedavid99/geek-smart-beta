import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  notification,
} from "antd";
import { API_URL } from "../../../host";
import Axios from "axios";

export const FormAgreUser = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [rol, setRol] = useState("");
  const [cargo, setCargo] = useState("");
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [numero, setNumero] = useState("");

  const handleSelectRol = (event) => {
    const selectedValue = event.target.value;
    console.log("Rol seleccionado:", selectedValue);
    setRol(selectedValue);
  };

  const handleSelectCargo = (event) => {
    const selectedValue = event.target.value;
    console.log("Cargo seleccionado:", selectedValue);
    setCargo(selectedValue);
  };

  const agregarUsuario = () => {
    Axios.post(`${API_URL}/user_nuevo`, {
      usuario,
      clave,
      rol,
      cargo,
      nombre,
      dni,
      numero,
    })
      .then(() => {
        notification.success({
          message: "Usuario agregado",
          description: `el usuario ${usuario} ha sido agregado correctamente.`,
          duration: 3,
        });
      })
      .catch((error) => {
        notification.error({
          message: "Error ",
          description: `Ha ocurrido un error .`,
          duration: 3,
        });
      });
  };

  return (
    <>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Nombre y Apellido"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese Nombre y Apellido",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
                placeholder="Nombre y Apellido"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="usuario"
              label="Usuario"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar Usuario",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setUsuario(event.target.value);
                }}
                placeholder="Usuario"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="clave"
              label="Clave"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar la Clave",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setClave(event.target.value);
                }}
                placeholder="Clave"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="dni"
              label="DNI"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar el DNI",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setDni(event.target.value);
                }}
                placeholder="DNI"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="rol"
              label="Rol del Usuario"
              rules={[
                {
                  required: true,
                  message: "Por favor Seleccione el Rol ",
                },
              ]}
            >
              <select
                className="block w-full pl-3 pr-10 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                onChange={handleSelectRol}
                placeholder="Seleccione el Rol"
              >
                <option value="" disabled selected>
                  Seleccione una opción
                </option>
                <option value="admin">Admin</option>
                <option value="limitado">limitado</option>
                <option value="invitado">Invitado</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="cargo"
              label="Cargo del Usuario"
              rules={[
                {
                  required: true,
                  message: "Cargo del Usuario",
                },
              ]}
            >
              <select
                className="block w-full pl-3 pr-10 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                onChange={handleSelectCargo}
                placeholder="Seleccione el Cargo del Usuario"
              >
                <option value="" disabled selected>
                  Seleccione una opción
                </option>

                <option value="tecnico">tecnico</option>
                <option value="venderdor">venderdor</option>
                <option value="Sisteama">Sistema</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="numero"
              label="Numero de telefono"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar numero de telefono ",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNumero(event.target.value);
                }}
                style={{
                  width: "100%",
                }}
                addonBefore="+54"
                placeholder=" Ingresar numero de telefono"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {" "}
          <Button onClick={agregarUsuario} type="primary">
            Agregar
          </Button>
        </Row>
      </Form>
    </>
  );
};
