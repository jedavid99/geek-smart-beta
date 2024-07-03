//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './paginas/Login'
import { Proveedores } from './paginas/Proveedores';
import { Home } from './paginas/Home';
import { Telefono } from './paginas/Telefono';

import { Reportes } from './paginas/Reporte';
import { Empresa } from './paginas/Empresa';
import { UsuariosConfig } from './paginas/Usuarios';
import { PdfOrden } from './components/Report/OrdenDeSerivicioPdf';
import { TodoLosEquiposPDF } from './components/Report/ReporteTodosLosEquipos';
import { EquiposReparadosPDF } from './components/Report/ReporteReparados';
import { GarantiaPDF } from './components/Report/ReporteGarantia';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/proveedores" element={<Proveedores/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/Clientes" element={<Telefono/>}/>
          {/* <Route exact path="/pc" element={<PC/>}/> */}
          {/* <Route exact path="/otros" element={<Otros/>}/> */}
          <Route exact path="/reportes" element={<Reportes/>}/>
          <Route exact path="/empresa" element={<Empresa/>}/>
          <Route exact path="/usuarios" element={<UsuariosConfig/>}/>
          <Route exact path="/orden_de_servicio.pdf" element={<PdfOrden/>}/>
          <Route exact path="/Todos_Los_Equipos.pdf" element={<TodoLosEquiposPDF/>}/>
          <Route exact path="/Equipos_Reparados.pdf" element={<EquiposReparadosPDF/>}/>
          <Route exact path="/Garantias.pdf" element={<GarantiaPDF/>}/>




        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
