import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, HelpCircle, Globe, Shield, ChevronRight, Building2 } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../host'; // Ajusta la ruta según tu proyecto
import { message } from 'antd';

export const Login = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [usuario, setUsername] = useState('');
  const [clave, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!usuario || !clave) {
      messageApi.warning({
        content: 'Por favor, introduce los datos requeridos para continuar.',
        style: { marginTop: '10vh' },
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/seccion`, { usuario, clave });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        if (onSuccess) onSuccess();
        navigate('/home', { replace: true });
      } else {
        messageApi.error({
          content: 'La Contraseña o el Usuario que ingresaste son incorrecta.',
          style: { marginTop: '10vh' },
        });
      }
    } catch (error) {
      messageApi.error({
        content: 'Error de conexión o credenciales incorrectas.',
        style: { marginTop: '10vh' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex">
        <div className="w-full h-full bg-white dark:bg-slate-900 flex flex-col lg:flex-row">
          {/* Panel Izquierdo - Imagen de fondo */}
          <div className="lg:w-1/2 h-full relative overflow-hidden hidden lg:block">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqejb23l7bmSTWnknIWa6-AuoyY-ZJAEywKipiQAgA-COG5AoFvJv2KQr6mLIUz8esNptX0bZO_zgCcyRc_4d2xGZ_bh-voAMTWxUk9tBdao5gPijuHpbiHO_ZFKUuZ5uiE-UBpliX4LES1MxrfA8ikCltLrTOgokF-RDiqIhoncDNRCxQAejAXES6-yHMD7lQGJaHCLOsoJ0bSr4bg3dqqZhvO7gOp7ctAv5Owmxr82e5V0sLj9GHTvlFvdIfQvgJq7rEprIR95w")'
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between p-12 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Geeksmart</span> {/* Cambia por tu marca */}
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-black leading-tight">
                  Gestiona tu taller
                  <span className="block text-white/90">de reparaciones</span>
                  <span className="block text-primary-300">como un experto</span>
                </h1>
                <p className="text-lg text-white/80 max-w-md">
                  La plataforma todo-en-uno para administrar reparaciones, 
                  clientes y ventas. Simplifica tu día a día y haz crecer tu negocio.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white">+1000</div>
                  <div className="text-sm text-white/70">Talleres activos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/70">Clientes satisfechos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/70">Soporte técnico</div>
                </div>
              </div>
            </div>
          </div>
          {/* Panel Derecho - Formulario */}
          <div className="w-full lg:w-1/2 h-full overflow-y-auto bg-white dark:bg-slate-900">
            <div className="min-h-full flex items-center justify-center p-8 lg:p-12">
              <div className="max-w-md w-full">
                <div className="lg:hidden flex items-center gap-2 mb-8">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold dark:text-white">Geeksmart</span>
                </div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Bienvenido de vuelta
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Ingresa tus credenciales para acceder al panel de control
                  </p>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Usuario o correo electrónico
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        name="usuario"
                        value={usuario}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="taller@ejemplo.com"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all dark:text-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Contraseña
                      </label>
                      <button 
                        type="button"
                        className="text-sm text-primary hover:text-primary/80 font-medium"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="clave"
                        value={clave}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all dark:text-white placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" />
                        ) : (
                          <Eye className="w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" />
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <LogIn className="w-5 h-5" />
                    <span>{isLoading ? 'Iniciando...' : 'Iniciar sesión'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <div className="mt-8 text-center">
                  <p className="text-slate-600 dark:text-slate-400">
                    ¿No tienes una cuenta?{' '}
                    <button className="text-primary hover:text-primary/80 font-semibold">
                      Solicitar acceso
                    </button>
                  </p>
                </div>
                <div className="mt-8 flex justify-center gap-6">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <HelpCircle className="w-5 h-5" />
                  </button>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <Globe className="w-5 h-5" />
                  </button>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <Shield className="w-5 h-5" />
                  </button>
                </div>
                <p className="mt-4 text-xs text-center text-slate-500">
                  Al iniciar sesión, aceptas nuestros{' '}
                  <button className="text-primary hover:underline">Términos de servicio</button>
                  {' '}y{' '}
                  <button className="text-primary hover:underline">Política de privacidad</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};