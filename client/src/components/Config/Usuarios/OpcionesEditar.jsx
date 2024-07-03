import React from "react";
import {  DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button,  notification } from "antd";
import { API_URL } from "../../../host";
import Axios from "axios";

export const OpcionesUsuario = ({ id }) => {
  const eliminarUsuario = async (id) => {
    try {
      const response = await Axios.delete(`${API_URL}/user/${id}`);
      if (response.status === 200) {
        notification.info({
          message: "usuario eliminado correctamente",
          duration: 3,
          placement: "top",
        });
      } else {
        notification.error({
          message: "ocurrió un error al eliminar el usuario",
          duration: 3,
        });
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const handleEliminarUser = () => eliminarUsuario(id);
  return (
    <>
      <div className="flex flex-row ">
        <div className="mx-7">
          <Button
            onClick={handleEliminarUser}
            icon={<DeleteFilled />}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Eliminar
          </Button>
        </div>
        <div>
          <Button
            icon={<EditFilled />}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Editar
          </Button>
        </div>
      </div>
    </>
  );
};
