//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './paginas/Login'
import { Proveedores } from './paginas/Proveedores';
import { Home } from './paginas/Home';
import { Telefono } from './paginas/Telefono';
import { PC } from './paginas/Pc';
import { Otros } from './paginas/Otros';
import { Reportes } from './paginas/Reporte';
import { Empresa } from './paginas/Empresa';
import { UsuariosConfig } from './paginas/Usuarios';


function App() {
  return (
    <div className="">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/proveedores" element={<Proveedores/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/telefonos" element={<Telefono/>}/>
          <Route exact path="/pc" element={<PC/>}/>
          <Route exact path="/otros" element={<Otros/>}/>
          <Route exact path="/reportes" element={<Reportes/>}/>
          <Route exact path="/empresa" element={<Empresa/>}/>
          <Route exact path="/usuarios" element={<UsuariosConfig/>}/>





        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
