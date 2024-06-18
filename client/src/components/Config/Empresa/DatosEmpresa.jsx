import React, { useState, useEffect } from "react";
import { Descriptions } from "antd";

import Axios from "axios";
import { MapComponent } from "./Maps";

export const DatosEmpresa = () => {
  const [listasProveedores, setListaProveedores] = useState([]);

  useEffect(() => {
    getProveedoresLista();
  }, []);

  const getProveedoresLista = () => {
    Axios.get("http://localhost:3001/empresa_lista").then((response) => {
      const listasProveedorWithKeys = response.data.map((item, index) => {
        return {...item, key: index };
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
      <Descriptions title="Datos del negocio" items={items} />
      <MapComponent></MapComponent>
    </div>
  );
};