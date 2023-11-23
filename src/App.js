import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/auth/login';
import CrearCuenta from './Paginas/auth/CrearCuenta';

function App() {
  return (
    <div>
      <Fragment>
        <Router>
          <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}> </Route>
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
