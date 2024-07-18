import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";
import Axios from "axios";
import { API_URL } from "../../host";

export const BarChartMes = () => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/Servicio`);
        const equiposByFechaIngreso = response.data.reduce((acc, equipo) => {
          if (equipo.fecha_registro) {
            const fechaIngreso = new Date(equipo.fecha_registro);
            const month = getMonthName(fechaIngreso.getMonth() + 1);

            if (!acc[month]) {
              acc[month] = {
                Reparado: 0,
                Inrreparable: 0,
                Garantia: 0,
              };
            }
            if (equipo.estatus === "Reparado") {
              acc[month].Reparado++;
            }
            if (equipo.estatus === "Inrreparable") {
              acc[month].Inrreparable++;
            }
            if (equipo.estatus === "Garantia") {
              acc[month].Garantia++;
            }
          }
          return acc;
        }, {});

        const updatedDataset = Object.keys(equiposByFechaIngreso).map(
          (month) => ({
            month,
            Reparados: equiposByFechaIngreso[month].Reparado,
            Inrreparable: equiposByFechaIngreso[month].Inrreparable,
            Garantia: equiposByFechaIngreso[month].Garantia,
          })
        );

      
        setDataset(updatedDataset);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function getMonthName(month) {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septimbre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return months[month - 1];
  }

  return (
    <>
      <div>
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          className="w-full h-80 md:w-1/2 lg:w-1/3 xl:w-1/4"
          height={390}
          series={[
            {
              dataKey: "Reparados",
              label: "Reparados",
              color: "#1679AB",
            },
            {
              dataKey: "Inrreparable",
              label: "Inrreparable",
              color: "#FF0000",
            },
            {
              dataKey: "Garantia",
              label: "Garantia",
              color: "#686D76",
            },
          ]}
        />
      </div>
    </>
  );
};
