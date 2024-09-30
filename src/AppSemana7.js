import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Contador from "./Contador";

function Home() {
  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Haz clic en el enlace para ver el contador.</p>
      <Link to="/contador">
        <button>Ir al Contador</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <NavLink>
              <Link to="/">Inicio </Link>
              <br></br>
              <Link to="/contador">Contador</Link>    
        </NavLink>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contador" element={<Contador />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
