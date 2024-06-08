import { PlusCircleFilled,QuestionCircleOutlined,PlusOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space ,FloatButton,Tooltip} from 'antd';
import { FormProve } from './FormProveedores';


export const Flobott = () =>  {
  const [open, setOpen] = useState(false);
  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false);};
  return (

  < > 
  
   <Tooltip title="Agregar provedor" color='blue'>
      <FloatButton  type="primary" icon={<PlusCircleFilled />} onClick={showDrawer}  />
      </Tooltip>
      <Drawer
        title="Agregar provedor"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onClose} type="primary">
              Agregar
            </Button>
          </Space>
        }
      >
        <FormProve></FormProve>
      </Drawer>
  </>
)
}
