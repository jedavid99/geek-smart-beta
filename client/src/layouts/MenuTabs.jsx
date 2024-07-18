import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  SettingFilled,
  ShopFilled,
  DashboardFilled,
  ReconciliationFilled,
  IdcardFilled,
  ToolFilled,
  FilePdfFilled,
} from "@ant-design/icons";
import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

export const MenuTabs = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [value, setValue] = useState("recents"); 
  const [anchorEl, setAnchorEl] = useState(null); 
  const [anchorSer, setAnchorSer] = useState(null); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickSer = (event) => {
    setAnchorSer(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSer = () => {
    setAnchorSer(null);
  };

  if (!isMobile) return null;

  return (
    <>
      <BottomNavigation
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#4f46e5",
          boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
          padding: "8px 16px",
          borderRadius: "16px 16px 0 0",
        }}
        sx={{
          width: 353,
          "&.MuiBottomNavigationAction-root": {
            minWidth: 100, 
            // set the background color
          },
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          component={NavLink}
          to="/home"
        
          icon={<DashboardFilled />}
          label="Dashboard"
        />
        <BottomNavigationAction
          value="Servicio"
          icon={<ToolFilled />}
         
          aria-owns={anchorSer ? "servicio" : undefined}
          aria-haspopup="true"
          onClick={handleClickSer}
        />
        <Menu
          className="-translate-y-12 z-10"
          id="servicio"
          anchorEl={anchorSer} 
          open={Boolean(anchorSer)}
          onClose={handleCloseSer}
        >
          <MenuItem component={NavLink} to="/Clientes">
            {" "}
            <IdcardFilled style={{ fontSize: 16, marginRight: 10 }} />
            Clientes
          </MenuItem>
        </Menu>
        {/* clientes,*/}
        <BottomNavigationAction
          value="Configuracion"
          icon={<SettingFilled />}
        
          aria-owns={anchorEl ? "admin" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        />
        <Menu
          className="transform -translate-y-10 "
          id="admin"
          anchorEl={anchorEl} 
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={NavLink} to="/usuarios">
            {" "}
            <IdcardFilled style={{ fontSize: 16, marginRight: 10 }} />
            Usuarios
          </MenuItem>
          <MenuItem component={NavLink} to="/empresa">
            {" "}
            <ReconciliationFilled style={{ fontSize: 16, marginRight: 10 }} />
            Empresa
          </MenuItem>
          <MenuItem component={NavLink} to="/proveedores">
            {" "}
            <ShopFilled style={{ fontSize: 16, marginRight: 10 }} />
            Proveedores
          </MenuItem>
        </Menu>
        {/* proverod, usuarios,empresa */}
        <BottomNavigationAction
          component={NavLink}
          to="/Reportes"
          value="Reporte"
          icon={<FilePdfFilled />}
     
        />{" "}
      </BottomNavigation>
    </>
  );
};