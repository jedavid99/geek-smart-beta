import React, { useState } from 'react';
import { Button, Modal , Checkbox,Row,Col,Tag } from 'antd';
import {
  HourglassFilled
} from '@ant-design/icons';


export const ModalEstaudtel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancelar = () => {
    setIsModalOpen(false);
  };
  

  return (
    <>

<Button
  icon={<HourglassFilled />}
  type="primary"
  style={{ backgroundColor: '#373A40' }}
  onClick={showModal}
> Estatus
</Button>

    
      <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancelar} cancelText="Cancelar" okText="Guardar">
      <Checkbox.Group
    style={{
      width: '100%',
    }}
    onChange={onChange}
  >
    <Row span={8}>
      <Col span={8}>
        <Checkbox color="blue"value="Presupuestar"> <Tag color="processing">Presupuestar</Tag></Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="Presupuestado"><Tag color="purple">Presupuestado</Tag> </Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="Reparado"><Tag color="success">Reparado</Tag></Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="Inrreparable"><Tag color="error">Inrreparable</Tag></Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="Entregado"><Tag color="lime">Entregado</Tag></Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="Garantia"><Tag color="warning">Garantia</Tag></Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
  
      </Modal>
    </>
  )
}

