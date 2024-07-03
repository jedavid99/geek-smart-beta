import React, { useEffect, useState } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Statistic } from "antd";
import Axios from "axios";
import { API_URL } from "../../host";

export const ServicioTotal = () => {
  const [contadorEquiposReparados, setContadorEquiposReparados] = useState(0);
  const [contadorEquiposGarantia, setContadorEquiposGarantia] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(`${API_URL}/producto`);
      const equiposReparados = response.data.filter(
        (equipo) => equipo.estatus === "Reparado"
      );
      setContadorEquiposReparados(equiposReparados.length);

      const equiposGarantias = response.data.filter(
        (equipo) => equipo.estatus === "Garantia"
      );
      setContadorEquiposGarantia(equiposGarantias.length);
    };
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <div className="flex flex-row justify-center">
        <Card className="mx-1 px-3 py-5 md:px-20 lg:px-28 xl:px-40">
          <Statistic
            title="Equipos reparados"
            value={contadorEquiposReparados}
            precision={0}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
          />
        </Card>
        <Card className="mx-0 px-3 py-5 md:px-20 lg:px-20 xl:px-40">
          <Statistic
            title="Garantias recibidas"
            value={contadorEquiposGarantia}
            precision={0}
            valueStyle={{ color: "#cf1322" }}
            prefix={<ArrowDownOutlined />}
          />
        </Card>
      </div>
    </>
  );
};
