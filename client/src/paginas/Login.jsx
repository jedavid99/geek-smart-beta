import React, { useState } from 'react'

import Logo from '../assets/img/geeksmart.jpg';
import { Button, message, Space } from 'antd';
import { Home } from './Home';

export const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");
  const [messageApi, contextHolder] = message.useMessage();


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
     warning ();



      
      
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("login").style.display = "none";
      }else{
        setMiLogin("false");
        error  ();
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();


       
        
      }
    }
  }
  
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'La Contraseña o el Usuario que ingresaste son incorrecta.',
      className: 'custom-class',
      style: {
        marginTop: '10vh'},
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Por favor, introduce los datos requeridos para continuar.',
      className: 'custom-class',
      style: {
        marginTop: '10vh'},
    });
  };

  return (
    

<>

{contextHolder}
      <Space>
        
       
        
      </Space>
<section id="login" >
  <div className="px-4 py-12 mx-auto max-w-7xl  sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div className="justify-center mx-auto text-left align-bottom form-login transition-all transform bg-white rounded-lg ">
      <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
        <div className="w-full px-6 py-3">
          <div>
            <div className="mt-3 text-left sm:mt-5">
              <div className="inline-flex items-center w-full">
                <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-4xl">Login</h3>
              </div>
              <div className="mt-4 text-base text-gray-500">
                <p>Si posee una cuenta, por favor, inicie sesión.</p>
              </div>
            </div>
          </div>
          <form action="" >
          <div className="mt-6 space-y-7">
           
            <div>
              <label   htmlFor="txtusu" className="sr-only">Usuario</label>
              <input type="text" name="email" id="txtusu" className="block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Ingrese su usuario"  onChange={ (e)=>setUsu(e.target.value) }  required />
            </div>
            <div>
              <label htmlFor="txtpas"  className="sr-only">Contraseña</label>
              <input type="text" name="password" id="txtpas" className="block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Ingrese su contraseña"  onChange={ (e)=>setPas(e.target.value) }  required/>
            </div>
            <div className="flex flex-col mt-4 lg:space-y-5">
              <button type="button" className="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  onClick={ iniciarSesion } >iniciar Seccion</button>
             
            </div>
           
          </div>
           </form>
        </div>
        <div className="order-first hidden w-full lg:block">
          <img className="object-cover servi-log bg-cover rounded-l-lg mx-auto  space-y-6" src={Logo}/>
        </div>
      </div>
    </div>
    
  </div>
  
</section>
{ miLogin === "true" && <Home usu={usu}/> } 
</>
  )
}
