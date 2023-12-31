import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import APIIinvoke from '../../Utils/APIInvoke';
import swal from 'sweetalert';

const CrearCuenta = () => {

    const [usuario, setUsuario]= useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:'',
        });
           
        const {nombre, email, password, confirmar } = usuario;
           
           const onChange = (e) =>{
               setUsuario({
                   ...usuario,
                   [e.target.name]: e.target.value
               });
           };
           
           useEffect(()=>{
               document.getElementById('nombre').focus();
           },[])
       
           const CrearCuenta= async () =>{
             const verificarExistenciaUsuario = async (email, nombre) => {
               try {
                 const response = await APIIinvoke.invokeGET(
                   `/usuarios?email=${email}&nombre=${nombre}`
                 );
             
                 if (response && response.length > 0) {
                   return true; // El usuario ya existe
                 } else {
                   return false; // El usuario no existe
                 }
               } catch (error) {
                 console.error(error);
                 return false; // Maneja el error si la solicitud falla
               }
             };
       
       if (password !== confirmar) {
           const msg = "Las contraseñas no coinciden.";
           swal({
           title: "Error",
           text: msg,
           icon: "error",
           buttons: {
               confirm: {
               text: "Ok",
               value: true,
               visible: true,
               className: "btn btn-danger",
               closeModal: true,
               },
           },
           });
               }else if (password.length < 6) {
                 const msg = "Contraseña demasiado corta (debe ser mayor a 6 caracteres)";
                 swal({
                     title: 'Error',
                     text: msg,
                     icon: 'warning',
                     buttons: {
                         confirmar:{
                             text: 'Ok',
                             value: true,
                             visible: true,
                             className: 'btn btn-danger',
                             closeModal: true
                         }
                     }
                 }); } else {
                   const usuarioExistente = await verificarExistenciaUsuario(nombre);     
                   const data = {
                   nombre: usuario.nombre,
                   email: usuario.email,
                   password: usuario.password,
                   confirmar: usuario.confirmar,
                   };                                          
                   const response = await APIIinvoke.invokePOST(`/Usuarios`, data);
                   const mensaje = response.msg;
           
                   if (usuarioExistente) {
                       const msg = 'El usuario ya existe'
                       new swal({
                           title: 'Error',
                           text: msg,
                           icon: 'error',
                           buttons: {
                               confirm: {
                                   text: 'Ok',
                                   value: true,
                                   visible: true,
                                   className: 'btn btn-danger',
                                   closeModal: true
                               }
                           }
                       });
                   } else {
                           const msg = "El usuario fue creado correctamente";
                           swal({
                           title: "Información",
                           text: msg,
                           icon: "success",  
                           buttons: {
                               confirm: {
                               text: "Ok",
                               value: true,
                               visible: true,
                               className: "btn btn-danger",
                               closeModal: true,
                                   }
                               }
                           });
           
                           setUsuario({
                               nombre: "",
                               email: "",
                               password: "",
                               confirmar: "",
           
                           })
                       }
                   }
               }
       
           const onSubmit = (e) =>{
               e.preventDefault()
               CrearCuenta();
           }

    return (  
    <div className="hold-transition login-page">
    <div className="login-box">
     <div className="login-logo">
   <Link to={"#"}>
       <b>Crear</b>Usuario
       </Link>
 </div>

 <div className="card">
   <div className="card-body login-card-body">
     <p className="login-box-msg">Ingrese los datos del usuario</p>

     <form onSubmit={onSubmit}>

        <div className="input-group mb-3">

        <input type="text"
        className="form-control"
        placeholder="Nombre"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={onChange}
        required
        />

        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-user" />
          </div>
         </div>
        </div>

       <div className="input-group mb-3">

         <input type="email"
          className="form-control"
           placeholder="Email"
           id="email"
           name="email"
           value={email}
           onChange={onChange}
           required
           />

         <div className="input-group-append">
           <div className="input-group-text">
             <span className="fas fa-envelope" />
           </div>
         </div>
       </div>

       <div className="input-group mb-3">
         <input type="password"
          className="form-control"
           placeholder="Password"
           id="password"
           name="password"
           value={password}
           onChange={onChange}
           required
           />

         <div className="input-group-append">
           <div className="input-group-text">
             <span className="fas fa-lock" />
           </div>
         </div>
       </div>

       <div className="input-group mb-3">
         <input type="password"
          className="form-control"
           placeholder="confirm password"
           id="confirmar"
           name="confirmar"
           value={confirmar}
           onChange={onChange}
           required
           />

         <div className="input-group-append">
           <div className="input-group-text">
             <span className="fas fa-lock" />
           </div>
         </div>
       </div>

     </form>

     <div className="social-auth-links text-center mb-3">

       <button type="submit" className="btn btn-block btn-primary">
       <i className="fab fa-facebook mr-2" /> Crear Cuenta
       </button>

       <Link to={"#"} className="btn btn-block btn-danger">
         <i className="fab fa-google-plus mr-2" /> Regresar al login
       </Link>
     </div>
   </div>

 </div>
</div>
</div>
);
}
 
export default CrearCuenta;