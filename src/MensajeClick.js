import React from "react";

class MensajeClick extends React.Component {
  constructor(props) {
    //El constructor es para inicializar el montaje que va a la app
    super(props); //Inicializa el componente Hereda
    this.state = { mensaje: "Haz click en el botón" }; //this.state es para pasar una propiedad al constructor
  }
  cambiarMensaje = () => {
    //Función flecha actualiza el estado del mensaje usando this.state
    this.setState({ mensaje: "Mensaje cambiado!" });
  };
  componentDidUpdate() {
    console.log("El componente se ha actualizado");
  }
  componentWillUnmount() {
    console.log("El componenete desaparecerá");
  }
  render() {
    return (
      <div>
        <p>{this.state.mensaje}</p>
        <button onClick={this.cambiarMensaje}>cambiarMensaje</button>
      </div>
    );
  }
}

export default MensajeClick;