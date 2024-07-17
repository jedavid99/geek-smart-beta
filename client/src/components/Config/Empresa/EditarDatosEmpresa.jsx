import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, notification } from "antd";
import Axios from "axios";
import { API_URL } from "../../../host";

export const EditarDatosEmpresa = () => {
  const [formData, setFormData] = useState({
    id: "",
    nombre_de_empresa: "",
    cuit_cuil: "",
    dirección: "",
    servicio_de_la_empresa: "",
    dueño_de_la_empresa: "",
    telefono_de_la_empresa: "",
  });

  useEffect(() => {
    // Obtener los datos actuales de la empresa
    Axios.get(`${API_URL}/empresa_lista/1`)
      .then((response) => {
        console.log("datos", response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar datos:", error);
        notification.error({
          message: "Error",
          description: "No se pudieron cargar los datos de la empresa.",
          duration: 3,
        });
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Actualizando campo:", name, "con valor:", value);
  };

  const EditarDatosEmpresa = () => {
    console.log("Datos a enviar:", formData);
    Axios.patch(`${API_URL}/empresa_datos/${formData.id}`, formData)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        notification.success({
          message: "Datos actualizados",
          description: `Los datos de la empresa ${formData.nombre_de_empresa} han sido actualizados correctamente.`,
          duration: 3,
        });
      })
      .catch((error) => {
        console.error("Error al actualizar datos:", error);
        notification.error({
          message: "Error ",
          description: "Ha ocurrido un error al actualizar sus datos.",
          duration: 3,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EditarDatosEmpresa(); // Call the EditarDatosEmpresa function here
  };

  return (
    <>
      <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Nombre de la empresa">
              <Input
                name="nombre_de_empresa"
                value={formData.nombre_de_empresa || ""}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="CUIT/CUIL">
              <Input
                name="cuit_cuil"
                value={formData.cuit_cuil || ""}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Teléfono">
              <Input
                name="telefono_de_la_empresa"
                value={formData.telefono_de_la_empresa || ""}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Dueño de la empresa">
              <Input
                name="dueño_de_la_empresa"
                value={formData.dueño_de_la_empresa || ""}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Tipo de negocio">
              <Input
                name="servicio_de_la_empresa"
                value={formData.servicio_de_la_empresa || ""}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Dirección">
              <Input.TextArea
                name="dirección"
                rows={4}
                value={formData.dirección || ""}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};