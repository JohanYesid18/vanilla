import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    return (
    <div className="hold-transition login-page">
     <div className="login-box">
      <div className="login-logo">
    <Link to={"#"}>
        <b>Iniciar</b>Sesión
        </Link>
  </div>

  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Bienvenido, Ingrese sus credenciales</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">

          <input type="email"
           className="form-control"
            placeholder="Email"
            id="email"
            name="email" 
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
        <i className="fab fa-facebook mr-2" /> Ingresar
        </button>

        <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Crear Cuenta
        </Link>
      </div>
    </div>

  </div>
</div>
</div>
    );
}

export default Login;