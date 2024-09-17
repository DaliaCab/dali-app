import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState(" "); //Almacena el nombre en el campo de texto
  const [apellido, setApellido] = useState(" ");
  const [edad, setEdad] = useState(" ");

  /*
  //Funcion pára manejar el envío del formulario, aquí se actualiza el estado cada vez que el usuario escribe en el campo de texto
  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  }; ELIMINO ESTA CONSTANTE PORQUE YA MANEJO EL CAMBIO DIRECTAMENTE EN  onChange
  */

  //Se muestra el msj 'Formulario enviado' con el valor ingresado como alert. No actualiza
  const manejarEnvio = (evento) => {
    evento.preventDefault();  //Evita que la página se recargue
    alert(`Nombre completo: ${nombre} ${apellido}\nEdad: ${edad}`);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </label>
      </div>

      <div>
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)}></input>
        </label>
      </div>

      <div>
        <label>
          Edad:
          <input type= "Number" value={edad} onChange={(e)=> setEdad(e.target.value)}></input>
        </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
export default Formulario;
