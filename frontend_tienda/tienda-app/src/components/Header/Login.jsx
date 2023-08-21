
import { useState } from "react";
import Navegacion from "./Navegacion";


const Login = () => {

  const [isAdmin,setIsAdmin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUserClick = () => {
    setIsAdmin(false);
  };

  const handleAdminClick = () => {
    setIsAdmin(true);
  };

  return ( 
    <>
 
   <Navegacion/>
   <section classNameNameNameNameName="form-register">
    <h4 className="text-white">Formulario de Ingreso</h4>
   <form onSubmit={handleSubmit} >
  
    <label htmlFor=""  classNameNameNameNameName="label">Nombre de usuario</label>
    <input classNameNameNameNameName="controls" type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre"/>
  
    <label htmlFor=""  classNameNameNameNameName="label">Correo Electronico</label>
    <input  classNameNameNameNameName="controls" type="email" name="apellidos" id="apellidos" placeholder="nombre@gmail.com"/>
  
    <label htmlFor="" classNameNameNameNameName="label">Contraseña</label>
    <input  classNameNameNameNameName="controls" type="password" name="email" id="email" placeholder="nombre"  />
    
    <label htmlFor="" classNameNameNameNameName="label">Rol</label>
    <div classNameNameNameNameName="contend-controls">
    <button id="btn-admin" onClick = {handleAdminClick }>Administrador</button>
    <button id="btn-user" onClick = {handleUserClick}>Usuario</button>
    </div>
    {isAdmin && <input type="password" classNameNameNameNameName="controls" placeholder="ingresa la clave de administrador" />}
  <input classNameNameNameNameName="boton" type="submit" name="enviar" value="Ingresar"/>

  
  </form> 
  </section>
  </>
     );
}

export default Login;