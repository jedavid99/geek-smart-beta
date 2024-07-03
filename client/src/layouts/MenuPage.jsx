import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/geeksmart.jpg";
import {
  SettingFilled,
  ShopFilled,
  DashboardFilled,
  ReconciliationFilled,
  IdcardFilled,
  PoweroffOutlined,
  ToolFilled,
  FilePdfFilled,
  MobileFilled,
} from "@ant-design/icons";
import { Menu } from "antd";

export const MenuPage = () => {
  return (
    <>
      <div className="flex flex-shrink-0 p-4 px-4 bg-indigo-600">
        <a href="#" className="flex-shrink-0 block w-full group">
          <div className="flex items-center">
            <div>
              <img
                className="h-10 rounded-full mx-auto h-23 w-auto space-y-6"
                src={Logo}
              ></img>
            </div>
            <div className="ml-1">
              <p className="text-sm font-medium text-white">GEEK SMART</p>
            </div>
          </div>
        </a>
      </div>

      <Menu
        className="bg-indigo-600"
        mode="inline"
        items={[
          {
            key: 1,
            label: <NavLink to="/home">Dasboard</NavLink>,
            icon: <DashboardFilled />,
          },
          {
            key: 2,
            label: "Servicio",
            icon: <ToolFilled />,
            children: [
              {
                label: <NavLink to="/Clientes">Clientes</NavLink>,
                key: 3,
                icon: <MobileFilled />,
              },
            ],
          },

          {
            label: <NavLink to="/Reportes">Reporte</NavLink>,
            icon: <FilePdfFilled />,
            key: 6,
          },
          {
            label: <NavLink to="/proveedores">Proveedores</NavLink>,
            icon: <ShopFilled />,
            key: 7,
          },
          {
            key: 8,
            label: "Configuracion",
            icon: <SettingFilled />,
            children: [
              {
                key: 9,
                label: <NavLink to="/empresa">Empresa</NavLink>,
                icon: <ReconciliationFilled />,
              },
              {
                key: 10,
                label: <NavLink to="/usuarios">Usuarios</NavLink>,
                icon: <IdcardFilled />,
              },
            ],
          },
          {
            label: <NavLink to="/">Cerrar seccion</NavLink>,
            icon: <PoweroffOutlined />,
            key: 11,
          },
        ]}
      ></Menu>
    </>
  );
};
