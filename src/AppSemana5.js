import React, { useState } from "react";

/*
function BotonClick(){
    const manejarClick = () =>{
        alert('Boton clickeado');
    };
    return(
        <div>
            <button onClick={manejarClick}>Haz click en el botón</button> 
        </div>
    )
}
export default BotonClick;


//Para cambiar el texto de un párrafo cuando se hace clic en el botón,utilizamos el hook useState de React para gestionar el estado del texto.
function BotonClick (){
    // Definimos un estado para el texto del párrafo
    const[texto, setTexto] = useState('Texto inicial'); //Texto va a cambiar a setTExto

    // Función que cambia el texto del párrafo al hacer clic en el botón
    const manejarClick = () =>{
        setTexto('El botón ha sido clickeado!')
    };

    return(
        <div>
            <p>{texto}</p>
            <button onClick={manejarClick}>Haz click aquí</button>
        </div>
    )
}
export default BotonClick;



function ButonClick({onClick}){  //El componente recibe una funcion
    return(
        <button onClick={onClick}>Haz click aqui</button>
    )
}
function App(){
    const[mensaje, setMensaje] = useState('Texto inicial');
    
    const manejarClick = () =>{
        setMensaje('El botón ha sido clickeado');
    }
    return(
        <div>
            <p>{mensaje}</p>
            <ButonClick onClick={manejarClick}/>
        </div>
    );
}
export default App
*/
import ButonReset from "./ButonReset";

function ButonClick() {
  const [texto, setTexto] = useState("Texto inicial"); // Estado inicial

  const manejarClick = () => {
    setTexto("El botón ha sido clickeado");           // Cambia el estado al hacer click
  };

  const manejarReset = () => {
    setTexto("Texto inicial");                      //Restablece el estado inicial
  };

  return (
    <div>
      <p>{texto}</p>
      <button onClick={manejarClick}>Haz click aqui</button>
      <ButonReset onReset={manejarReset} />
    </div>
  );
}
export default ButonClick;
