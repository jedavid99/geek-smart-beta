import React, { useState, useEffect } from "react";
import {Avatar,Card} from "antd";
import Axios from "axios";
import { API_URL } from "../../../host";

export const PerfilUsuario = ({ id }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/user/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    fetchUserData();
  }, [id]);
  console.log("UserData:", userData); // <--- Add this line
  return (
    <Card title="Perfil del Usuario">
      <div className="flex justify-center mb-12">
        <Avatar
          src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          size={80}
        />
      </div>

      <div className="px-7 py-5 mb-14">
        <div className="flex flex-row items-center gap-6 mb-16">
          <label htmlFor="" className="text-gray-700 font-medium">
            Usuario:
          </label>
          <label htmlFor="" className="text-gray-900 font-semibold">
            {userData.usuario}
          </label>
          <label htmlFor="" className="text-gray-700 font-medium">
            Nombre:
          </label>
          <label htmlFor="" className="text-gray-900 font-semibold">
            {userData.nombre}
          </label>
        </div>

        <div className="flex flex-row items-center gap-6 mb-16">
          <label htmlFor="" className="text-gray-700 font-medium">
            Cargo:
          </label>
          <label htmlFor="" className="text-gray-900 font-semibold">
            {userData.cargo}
          </label>
          <label htmlFor="" className="text-gray-700 font-medium">
            Rol:
          </label>
          <label htmlFor="" className="text-gray-900 font-semibold">
            {userData.rol}
          </label>
        </div>

        <div className="flex flex-row items-center gap-6 mb-16">
          <label htmlFor="" className="text-gray-700 font-medium">
            DNI:
          </label>
          <label htmlFor="" className="text-gray-900 font-semibold">
            {userData.dni}
          </label>
          <label htmlFor="" className="text-gray-700 font-medium">
            Teléfono:
          </label>
          <label htmlFor="" className="text-gray-900 font-semibold">
            {userData.numero}
          </label>
        </div>
      </div>
    </Card>
  );
};
