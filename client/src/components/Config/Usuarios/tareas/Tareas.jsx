import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Space,
  ConfigProvider,
  notification,
  Form,
  Input,
  
} from "antd";
import "../../../../App.css";
import { FotoUsuario } from "./UsuarioFoto";
import Axios from "axios";
import esES from "antd/locale/es_ES";

export const FormTareas = () => {
  const [tarea, setTarea] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [status, setStatus] = useState("");
  const [titulo, setTitulo] = useState("");

  const AgregarTarea = () => {
    Axios.post(`http://192.168.18.157:3001/tarea`, {
      tarea: tarea,
      created_at: created_at,
      status: status,
      titulo: titulo,
    })
      .then(() => {
        notification.success({
          message: "Tarea agregada",
          description: `La tarea ha sido agregado correctamente.`,
          duration: 3,
        });
      })
      .catch((error) => {
        notification.error({
          message: "Error ",
          description: "Ha ocurrido un error al agregar la tarea.",
          duration: 3,
        });
      });
  };

  return (
    <>
      <Space direction="vertical" size={40}>
        {/* <FotoUsuario /> */}
        <div className="card ml-3">
          <div className="chat-window"></div>
       
         
          <Input.TextArea  onChange={(event) => {
                setTarea(event.target.value);
              }} name="descripcion" className=" w-full h-8 px-4 py-2" placeholder="Descripcion de la tarea"/>
          <div className="chat-input">
            <ConfigProvider locale={esES}>
              <DatePicker
                title="Fecha"
                placeholder="Fecha"
                onChange={(date, dateString) => {
                  setCreated_at(dateString);
                }}
              />
            </ConfigProvider>
            <input
              type="text"
              className="message-input"
              placeholder="Ingresa la tarea"
              onChange={(event) => {
                setTitulo(event.target.value);
              }}
            />

            <Button onClick={AgregarTarea} type="primary">
              Agregar
            </Button>
          </div>
        </div>
      </Space>
    </>
  );
};
