import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import '../../../../App.css';
import { FotoUsuario } from './UsuarioFoto';
const { Option } = Select;
export const FormChats = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
     <Space direction="vertical" size={40}>

      <FotoUsuario></FotoUsuario>

      <div class="card">
      <div class="chat-window">
        <ul class="message-list"></ul>
      </div>
      <div class="chat-input">
          <input type="text" class="message-input" placeholder="Ingresa su mensaje"/>
          <button class="send-button">Enviar</button>
      </div>
    </div>
   </Space>
    </>
  )
}
