// TokenValidator.js
import { useState, useEffect } from 'react';
import { Login } from '../../paginas/Login';

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

function TokenValidator({ children }) {
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const parsedToken = parseJwt(token);
      setTokenValid(parsedToken.exp * 1000 > Date.now());
    }
  }, []);

  return tokenValid ? children : <Login />;
}

export default TokenValidator;