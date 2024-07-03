import { useEffect, useState } from "react";
import { Home } from "../../paginas/Home.jsx";
import { Login } from "../../paginas/Login.jsx";

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


const Main = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [tokenExistAndStillValid, setTokenExistAndStillValid] = useState(false);
  
    useEffect(() => {

      if (token) {
        setTokenExistAndStillValid(parseJwt(token).exp * 1000 > Date.now());
      } else {
        setTokenExistAndStillValid(false);
      }
    }, [token]);
  
    return (
      <>{tokenExistAndStillValid ? <Home /> : <Login /> }</>
    );
  }
  
  export default Main;