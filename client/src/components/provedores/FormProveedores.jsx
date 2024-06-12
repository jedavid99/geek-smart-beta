import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import Axios from 'axios';
const { Option } = Select;


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
    Axios.post("http://localhost:3001/proveedor", {
    nombre:nombre,
    categoria:categoria,
    CUIT_CUIL:CUIT_CUIL,
    Dirección:Dirección,
    telefono:telefono,
    calidad:calidad,
   
}).then(() => {
    alert("proveedor agregado")
} )



    

    }


  return (
    <>
       
      <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Provedor"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese el nombre del proveedor',
                  },
                ]}
              >
                <Input   onChange={(event) => {
                  setNombre(event.target.value);
                }} placeholder="Nombre del proveedor" />
              </Form.Item>
            </Col>
            
            <Col span={12}>
            <Form.Item
                name="owner"
                label="CUIT/CUIL"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese el CUIT/CUIL',
                  },
                ]}
              >
                 <Input   onChange={(event) => {
                  setCUIT_CUIL(event.target.value);
                }} placeholder="Nombre del proveedor" />
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
                    required: true,
                    message: 'Por favor ingresar numero de telefono del proveedor',
                  },
                ]}
              >
                <Input  onChange={(event) => {
                  setTelefono(event.target.value);
                }}
                  style={{
                    width: '100%',
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
                    required: true,
                    message: 'calidad del provedor',
                  },
                ]}
              >

                <select onChange={handleSelectCategoria}>
                <option value="Telefonos">Telefonos</option>
                <option value="Pc">Pc</option>
                <option value="otros">otros</option>
              </select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="categoria"
                label="Categoria del provedor"
                rules={[
                  {
                    required: true,
                    message: 'Categoria del provedor',
                  },
                ]}
              >
                 <select onChange={handleSelectCalidad}>
                <option value="buena">buena</option>
                <option value="regular">regular</option>
              </select>
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Direccion"
                rules={[
                  {
                    required: true,
                    message: 'Direccion del provedor',
                  },
                ]}
              >
                <Input.TextArea  onChange={(event) => {
                  setDirección(event.target.value);
                }} rows={4} placeholder="por favor ingresar la direccion" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button onClick={AgregarProveedor} type="primary">
              Agregar
            </Button>
    </>
  )
}
