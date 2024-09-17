//SEMANA 4
import React from "react";
import MensajeClick from "./MensajeClick";

class App extends React.Component {
  constructor(props) {
    super(props); //Lllama al costructor de la clase base React.Component
    this.state = { mostrarComponente: true }; //Propiedad de estado que se usa para saber si se muestra o no el msj, está en true
  }
  //Define un método toggle componete que cambia el valor de 'mostrar componente'
  toggleComponente = () => {
    //se utiliza para alternar (cambiar de verdadero a falso o viceversa) el valor de una propiedad del estado del componente llamada mostrarComponente
    this.setState((prevState) => ({
      mostrarComponente: !prevState.mostrarComponente,
    }));
  };
  render() {
    //Aquí vamos a decirle al button que use el toggleComponente
    return (
      <div>
        <button onClick={this.toggleComponente}>
          {this.state.mostrarComponente ? "Ocultar MensajeClick" : "MostarMensajeClick"}
        </button>
        {this.state.mostrarComponente && <MensajeClick />}
      </div>
    );
  }
}
export default App;
