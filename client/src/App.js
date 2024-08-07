import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './paginas/Login'
import { Proveedores } from './paginas/Proveedores';
import { Home } from './paginas/Home';
import { Servicio } from './paginas/Servicio';
import { Reportes } from './paginas/Reporte';
import { Empresa } from './paginas/Empresa';
import { UsuariosConfig } from './paginas/Usuarios';
import { PdfOrden } from './components/Report/OrdenDeSerivicioPdf';
import { TodoLosEquiposPDF } from './components/Report/ReporteTodosLosEquipos';
import { EquiposReparadosPDF } from './components/Report/ReporteReparados';
import { GarantiaPDF } from './components/Report/ReporteGarantia';
import { useState, useEffect } from 'react';

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function App() {
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const parsedToken = parseJwt(token);
      setTokenValid(parsedToken.exp * 1000 > Date.now());
    }
  }, []);

  const handleLoginSuccess = () => {
    setTokenValid(true);
  };

  return (
    
    <div>
     
        <Routes>
          <Route exact path="/" element={<Login onSuccess={handleLoginSuccess} />} />
          {tokenValid ? (
            <>
             <Route path="/proveedores" element={<Proveedores/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/Clientes" element={<Servicio/>}/>
      <Route path="/reportes" element={<Reportes/>}/>
      <Route path="/empresa" element={<Empresa/>}/>
      <Route path="/usuarios" element={<UsuariosConfig/>}/>
      <Route path="/orden_de_servicio.pdf" element={<PdfOrden/>}/>
      <Route path="/Todos_Los_Equipos.pdf" element={<TodoLosEquiposPDF/>}/>
      <Route path="/Equipos_Reparados.pdf" element={<EquiposReparadosPDF/>}/>
      <Route path="/Garantias.pdf" element={<GarantiaPDF/>}/>
            </>
          ) : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
    </div>
    

  );
}

export default App;
