import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

import Registro from './components/Registro.jsx';
import Inicio from './components/Inicio.jsx';
import NavBar from './components/Navbar.jsx';
import InicioSesion from './components/InicioSesion';
import UsuarioRegistro from './components/UsuarioRegistro';
import Buscar from './components/Buscar';
import PuntoDonacionRegistro from './components/PuntoDonacionRegistro';
import DropZone from './components/DropZone';
import BeneficiarioRegistro from './components/BeneficiarioRegistro';
import Donar from './components/Donar';
import MensajeGivit from './components/MensajeGivit';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter >
      <NavBar/>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/iniciosesion" element={<InicioSesion/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/usuarioregistro" element={<UsuarioRegistro />} />
        <Route path="/puntodonacionregistro" element={<PuntoDonacionRegistro />} />
        <Route path="/beneficiarioregistro" element={<BeneficiarioRegistro />} />
        <Route path="/dropezone" element={<DropZone />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/donar" element={<Donar />} />
        <Route path="/mensajegivit" element={<MensajeGivit />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
