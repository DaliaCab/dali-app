import React from 'react'; // Importa React para poder utilizar JSX y crear componentes.
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import styles from '../Styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}> {/* Contenedor principal del componente Home */}
      <h1>Home</h1> {/* Título de la página de inicio */}
      <p>Welcome to the Home page!</p> {/* Mensaje de bienvenida en la página de inicio */}
      
      {/* Navegación hacia otras páginas */}
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li> {/* Enlace a la página About */}
          <li><Link to="/contact">Contact</Link></li> {/* Enlace a la página Contact */}
          <li><Link to="/dashboard">Dashboard</Link></li> {/* Enlace al Dashboard protegido */}
          <li><Link to="/login">Login</Link></li> {/* Enlace a la página de Login */}
        </ul>
      </nav>
    </div>
  );
}

export default Home; // Exporta el componente Home para que pueda ser utilizado en otras partes de la aplicación.
