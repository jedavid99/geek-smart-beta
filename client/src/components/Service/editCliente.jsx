import React from "react";
import { Button, Col, Form, Input, Row, Space } from "antd";




const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
export const EditClient = () => (
  <Form {...layout}  name="nest-messages" onFinish={onFinish}
    validateMessages={validateMessages}
  >
    
    <Row gutter={10}>
      <Col span={9}>
        <Form.Item className="block text-sm font-semibold leading-6 text-gray-900" label="Nombre"  >
          <Input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </Form.Item>
      </Col>
      <Col span={9}>
        <Form.Item className="block text-sm font-semibold leading-6 text-gray-900"  label="Tipo de servicio">
          <Input />
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={9}>
        <Form.Item  className="block text-sm font-semibold leading-6 text-gray-900" label="Modelo">
          <Input />
        </Form.Item>
      </Col>
      <Col span={9}>
      <Form.Item  className="block text-sm font-semibold leading-6 text-gray-900"  label="EMEI o codigo">
      <Input />
    </Form.Item>
      </Col >
      <Col span={9} >
      <Form.Item className="block text-sm font-semibold leading-6 text-gray-900"  label="Precio">
      <Input />
    </Form.Item>
      </Col>
      
<Col span={9}>
<Form.Item className="block text-sm font-semibold leading-6 text-gray-900"  label="Numero de telefono">
      <Input />
    </Form.Item>
</Col>


    </Row>

   
    
   <Col span={17}>
   
   <Form.Item className="block text-sm font-semibold leading-6 text-gray-900" label="Descripcion">
      <Input.TextArea />
    </Form.Item>
    </Col>
    

    
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
        <Space>
      <Button type="primary" htmlType="submit">
        Actualizar
      </Button> 
      <Button type="dashed"  htmlType="submit" color="black">
        Cancelar
      </Button>
      </Space>
    </Form.Item>
  </Form>
);
