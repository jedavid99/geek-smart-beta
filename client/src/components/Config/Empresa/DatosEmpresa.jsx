import React, { useState, useEffect } from "react";
import { Card, Descriptions } from "antd";
import Axios from "axios";
import { MapComponent } from "./Maps";
import { API_URL } from "../../../host";

export const DatosEmpresa = () => {
  const [listasProveedores, setListaProveedores] = useState([]);

  useEffect(() => {
    getProveedoresLista();
  }, []);

  const getProveedoresLista = () => {
    Axios.get(`${API_URL}/empresa_lista`).then((response) => {
      const listasProveedorWithKeys = response.data.map((item, index) => {
        return { ...item, key: index };
      });
      setListaProveedores(listasProveedorWithKeys);
    });
  };

  const items = listasProveedores.flatMap((item, index) => [
    {
      key: `nombre-de-la-empresa-${index}`,
      label: "Nombre de la empresa",
      children: item.nombre_de_empresa,
    },
    {
      key: `cuit-${index}`,
      label: "CUIT",
      children: item.CUIT_CUIL,
    },
    {
      key: `direccion-${index}`,
      label: "Direccion",
      children: item.Dirección,
    },
    {
      key: `tipo-de-servicio-${index}`,
      label: "Tipo de servicio",
      children: item.servicio_de_la_empresa,
    },
    {
      key: `dueño${index}`,
      label: "Dueño",
      children: item.dueño_de_la_empresa,
    },
    {
      key: `telefono-${index}`,
      label: "Telefono",
      children: item.telefono_de_la_empresa,
    },
  ]);
  return (
    <div>
      <Card>
        <Descriptions
          className="fon"
          title={
            <span className="flex justify-center text-center">
              Datos del negocio
            </span>
          }
          items={items}
        />{" "}
        <MapComponent></MapComponent>
      </Card>
    </div>
  );
};
