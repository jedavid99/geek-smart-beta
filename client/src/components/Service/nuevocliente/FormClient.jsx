import {
  PlusCircleFilled,
  QuestionCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  FloatButton,
} from "antd";
import Axios from "axios";
const { Option } = Select;

export const FormCient = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [servicio, setServicio] = useState("");
  const [dispositivo, setDispositivo] = useState("");
  const [DNI,setDNI] = useState("");
  const [telefono_Cliente, setTelefono_Cliente] = useState("");
  const [descripcion, setDescripcion] = useState("");

  


  const AgregarCliente = () => {
    Axios.post("http://localhost:3001/producto", {
    nombre:nombre,
    categoria:categoria,
    precio:precio,
    servicio:servicio,
    dispositivo:dispositivo,
    DNI:DNI,
    telefono_Cliente:telefono_Cliente,
    descripcion:descripcion,
}).then(() => {
    alert("cliente agregado")
} )



    

    }
 

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Valor seleccionado:", selectedValue);
    setCategoria(selectedValue); // Actualiza el estado con el valor seleccionado
  };
  

  return (
    <>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
          <div className="text-7xl">
             <Form.Item
              name="nombrecli"
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
            </Form.Item></div>
          </Col>
          <Col span={12}>
            <Form.Item name="categoria" label="Categoria:" rules={[]}>
              <select onChange={handleSelectChange}>
                <option value="Telefonos">Telefonos</option>
                <option value="Pc">Pc</option>
                <option value="otros">otros</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="Tipodeservicio"
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
              name="DNI"
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
              name="dispositivo"
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
              name="numerocliente"
              label="Numero de telefono:"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar el numero de cliente",
                },
              ]}
            >
              <Input   onChange={(event) => {
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
            <Form.Item name="precio" label="Precio del servicio:" rules={[]}>
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
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="descripcion"
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
