import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Axios from "axios";
import { API_URL } from "../../host";

export const BarChartServise = () => {
  const initialData = [
    { id: 0, label: "Ingresado", color: "#402E7A" },
    { id: 1, label: "Presupuestar", color: "#006769" },
    { id: 2, label: "Entregado", color: "#06D001" },
    { id: 3, label: "Garantia", color: "#686D76" },
    { id: 4, label: "Reparado", color: "#1679AB" },
    { id: 5, label: "Presupuestado", color: "#FAA300" },
    { id: 6, label: "Inrreparable", color: "#FF0000" },
    { id: 7, label: "Entregado Inrreparable", color: "#C40C0C" },
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(`${API_URL}/Servicio`);
      const equipos = response.data;

      const newData = initialData.map((item) => {
        const count = equipos.filter(
          (equipo) => equipo.estatus === item.label
        ).length;
        return { ...item, value: count };
      });

      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <>
      <PieChart
        series={[
          {
            data: data, // Use the data state variable
            highlightScope: { faded: "global", highlighted: "item" },
            faded: {
              innerRadius: 40,
              additionalRadius: -10,
              color: "#006769",
            },
          },
        ]}
        colors={(datum) => datum.color}
        height={300}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </>
  );
};
