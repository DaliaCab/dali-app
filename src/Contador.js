import React, { useState } from "react";
import styles from "./components/Contador.module.css"; // Importa los estilos CSS module

const Contador = () => {
  const [count, setCount] = useState(0); // Estado del contador

  const incrementar = () => {
    setCount(count + 1); // Incrementa el contador
  };

  return (
    <div className={styles.contadorContainer}>
      <h1 className={styles.title}>Contador</h1>
      <p className={styles.number}>{count}</p>
      <button className={styles.button} onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
};

export default Contador;
