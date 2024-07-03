import React from "react";
import { DeleteFilled } from "@ant-design/icons";
import { Button, notification } from "antd";
import Axios from "axios";
import { API_URL } from "../../host";

export const OpcionesPro = ({ id }) => {
  const eliminarProvedor = async (id) => {
    try {
      const response = await Axios.delete(`${API_URL}/proveedor/${id}`);
      if (response.status === 200) {
        notification.info({
          message: "Proveedor eliminado correctamente",
          duration: 3,
          placement: "top",
        });
      } else {
        notification.error({
          message: "ocurrió un error al eliminar el Proveedor",
          duration: 3,
        });
      }
    } catch (error) {
      console.error("Error al eliminar el Proveedor:", error);
    }
  };

  const handleEliminarProvedor = () => eliminarProvedor(id);

  return (
    <Button
      icon={<DeleteFilled />}
      style={{ backgroundColor: "red", color: "white" }}
      className="mx-1"
      onClick={handleEliminarProvedor}
    >
      Eliminar
    </Button>
  );
};
