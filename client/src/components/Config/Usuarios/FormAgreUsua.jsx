
import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space ,FloatButton,Tooltip} from 'antd';
const { Option } = Select;
export const FormAgreUser = () =>  {
  

  return (

  < >
    
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Nombre y Apellido"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese Nombre y Apellido',
                  },
                ]}
              >
                <Input placeholder="Nombre y Apellido" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="usuario"
                label="Usuario"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresar Usuario',
                  },
                ]}
              >
                <Input placeholder="Usuario" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="clave"
                label="Clave"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresar la Clave',
                  },
                ]}
              >
                <Input placeholder="Clave" />
              </Form.Item>
            </Col>
           
            <Col span={12}>
              <Form.Item
                name="dni"
                label="DNI"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresar el DNI',
                  },
                ]}
              >
                <Input placeholder="DNI" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="rol"
                label="Rol del Usuario"
                rules={[
                  {
                    required: true,
                    message: 'Por favor Seleccione el Rol ',
                  },
                ]}
              >
                <Select placeholder="Seleccione el Rol">
                  <Option value="admin">Admin</Option>
                  <Option value="limitado">limitado</Option>
                  <Option value="invitado">Invitado</Option>

                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="cargo"
                label="Cargo del Usuario"
                rules={[
                  {
                    required: true,
                    message: 'Cargo del Usuario',
                  },
                ]}
              >
                <Select placeholder="Seleccione el Cargo del Usuario">
                  <Option value="tecnico">tecnico</Option>
                  <Option value="venderdor">venderdor</Option>
                  <Option value="Sisteama">Sistema</Option>
               
                 

                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="numero"
                label="Numero de telefono"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresar numero de telefono ',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="+54"
                 
                  placeholder=" Ingresar numero de telefono"
                />
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={16}>
           

          </Row>
         
        </Form>

      

  </>
  
)
}
