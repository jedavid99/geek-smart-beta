import React, { useState } from "react";
import { Button, Col, Form, Input, Row, notification } from "antd";
import Axios from "axios";
import { API_URL } from "../../../host";

export const EditarDatosEmpresa = () => {
  const [nombre_de_empresa, setNombre_de_empresa] = useState("");
  const [CUIT_CUIL, setCUIT_CUIL] = useState("");
  const [Dirección, setDirección] = useState("");
  const [servicio_de_la_empresa, setServicio_de_la_empresa] = useState("");
  const [dueño_de_la_empresa, setDueño_de_la_empresa] = useState("");
  const [telefono_de_la_empresa, setTelefono_de_la_empresa] = useState("");

  const EditarDatosEmpresa = () => {
    Axios.patch(`${API_URL}/empresa_datos/1`, {
      nombre_de_empresa: nombre_de_empresa,
      CUIT_CUIL: CUIT_CUIL,
      Dirección: Dirección,
      servicio_de_la_empresa: servicio_de_la_empresa,
      dueño_de_la_empresa: dueño_de_la_empresa,
      telefono_de_la_empresa: telefono_de_la_empresa,
    })
      .then(() => {
        notification.success({
          message: "Datos actualizados",
          description: `los datos da la empresa ${nombre_de_empresa} han sido actualizados correctamente.`,
          duration: 3,
        });
      })
      .catch((error) => {
        notification.error({
          message: "Error ",
          description: "Ha ocurrido un error al actulizar sus datos.",
          duration: 3,
        });
      });
  };

  const handleSubmit = () => {
    EditarDatosEmpresa();
  };

  return (
    <>
      <Form layout="vertical" hideRequiredMark onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="nombre_de_empresa"
              label="Nombre de la empresa"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar el nombre de la empresa ",
                },
              ]}
            >
              <Input
                placeholder="Ingresar el nombre de la empresa"
                value={nombre_de_empresa}
                onChange={(e) => setNombre_de_empresa(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="CUIT_CUIL"
              label="CUIT/CUIL"
              rules={[
                {
                  required: true,
                  message: "Ingresar el CUIT/CUIL de la empresa",
                },
              ]}
            >
              <Input
                placeholder="Ingresar el CUIT/CUIL de la empresa"
                value={CUIT_CUIL}
                onChange={(e) => setCUIT_CUIL(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="telefono_de_la_empresa"
              label="Telefono"
              rules={[
                {
                  required: true,
                  message: "Numero de la empresa",
                },
              ]}
            >
              <Input
                placeholder="Ingresar el numero de la empresa"
                value={telefono_de_la_empresa}
                onChange={(e) => setTelefono_de_la_empresa(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="dueño_de_la_empresa"
              label="Dueño de la empresa"
              rules={[
                {
                  required: true,
                  message: "Nombre del dueño o encargado",
                },
              ]}
            >
              <Input
                placeholder="Nombre del dueño o encargado"
                value={dueño_de_la_empresa}
                onChange={(e) => setDueño_de_la_empresa(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="servicio_de_la_empresa"
              label="Tipo de negocio"
              rules={[
                {
                  required: true,
                  message: "Area de la empresa o negocio",
                },
              ]}
            >
              <Input
                placeholder="Area de la empresa o negocio"
                value={servicio_de_la_empresa}
                onChange={(e) => setServicio_de_la_empresa(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="Dirección"
              label="Dirrecion"
              rules={[
                {
                  required: true,
                  message: "Direccion de la empresa o negocio",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Dierrecion de la empresa o negocio"
                value={Dirección}
                onChange={(e) => setDirección(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Guardad
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
