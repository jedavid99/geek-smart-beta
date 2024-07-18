import React, { useState, useEffect, useCallback } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Tooltip, Typography, theme } from "antd";
import { API_URL } from "../../host";
import Axios from "axios";

export const Tareas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/Tareas`);
        const listaTelefonosWithKeys = response.data.map((item, index) => {
          return { ...item, key: index };
        });
        setData(listaTelefonosWithKeys);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const getItems = () =>
    data.map((item) => ({
      key: item.id,
      label: (
        <Typography>
          <span style={{ fontWeight: "bold" }}>Fecha:</span>{" "}
          {new Date(item.created_at).toLocaleDateString()}
          <br />
          <span style={{ fontWeight: "bold" }}>Tarea:</span> {item.titulo}
        </Typography>
      ),
      children: (
        <>
          <div className="flex flex-row justify-center">
            <Typography>
              <span style={{ fontWeight: "bold" }}> Descripción:</span>{" "}
              {item.tarea} <br />

             
            </Typography>
          </div>
          <Typography className="ml-auto text-left">
    <span className="font-bold">categoria:</span> {item.status}
  </Typography>
          <span style={{ fontWeight: "bold" }}>
                fecha de actualizacion:{" "}
              </span>{" "}
              {new Date(item.fecha_update).toLocaleDateString()}
        </>
      ),
    }));

  return (
    <span>
      <Collapse
        bordered={false}
      
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="bg-yellow-100 p-4 rounded-md shadow-md overflow-y-auto h-screen md:h-96 lg:h-128 xl:h-160"
        items={getItems()}
      />
    </span>
  );
};
