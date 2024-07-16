import React, { useEffect, useState } from "react";
import { Avatar, Drawer, List, Card, } from "antd";
import { PerfilUsuario } from "./PerfilUsuario";
import { OpcionesUsuario } from "./OpcionesEditar";
import { API_URL } from "../../../host";
import Axios from "axios";

export const UsuariosLista = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null); // Define the id state variable
  const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los usuarios

  useEffect(() => {
    // Función para obtener los usuarios de la base de datos
    const fetchUsuarios = async () => {
      try {
        const response = await Axios.get(`${API_URL}/user`);
        setUsuarios(response.data); // Asigna los datos a la variable de estado
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsuarios();
  }, []);

  const showDrawer = (id) => {
    setOpen(true);
    setId(id); // Update the id state variable
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <List
          dataSource={usuarios} // Asigna los usuarios al dataSource
          bordered
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={
                [
                  // Agrega acciones aquí
                ]
              }
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a onClick={() => showDrawer(item.id)}>{item.nombre}</a>}
                description={`Rol: ${item.rol}`}
              />

              <OpcionesUsuario id={item.id}></OpcionesUsuario>
            </List.Item>
          )}
        />
      </Card>
      <Drawer
        width={400}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <PerfilUsuario id={id}></PerfilUsuario>
      </Drawer>
    </>
  );
};
