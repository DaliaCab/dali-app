import React from "react";
import Semana2 from "./AppSemana2";
import Semana3 from "./AppSemana3";
import Semana4 from "./AppSemana4";
import Semana5 from "./AppSemana5";
import Semana5d1 from "./AppSemana5-1";
import Semana5d2 from "./AppSemana5-2"
import Semana5d22 from "./AppSemana5-22"
import Semana6 from "./AppSemana6"
import Semana62 from "./AppSemana6-2"
import Semana6d2 from "./AppSemana6d2"
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { viewPage: "Selecciona la semana que quieres ver" };
  }

  selectWeek = (week) => {  //Función recibe week
    this.setState(() => ({
      viewPage: week // Se guarda el valor de week en viewPage
    }));
  };

  render() {
    return (
      <div>
        <button className="button" onClick={() => this.selectWeek(<Semana2/>)}>Semana 2</button>
        <button className="button" onClick={() => this.selectWeek(<Semana3/>)}>Semana 3</button>
        <button className="button" onClick={() => this.selectWeek(<Semana4/>)}>Semana 4</button>
        <button className="button" onClick={() => this.selectWeek(<Semana5/>)}>Semana5</button>
        <button className="button" onClick={() => this.selectWeek(<Semana5d1/>)}>Semana5-1</button>
        <button className="button" onClick={() => this.selectWeek(<Semana5d2/>)}>Semana5-2</button>
        <button className="button" onClick={() => this.selectWeek(<Semana5d22/>)}>Semana5-22</button>
        <button className="button" onClick={() => this.selectWeek(<Semana6/>)}>Semana6</button>
        <button className="button" onClick={() => this.selectWeek(<Semana62/>)}>Semana6-2</button>
        <button className="button" onClick={() => this.selectWeek(<Semana6d2/>)}>Semana6d2</button>
        <br/><br/> {/*2 saltos de línea*/}
        <div className="viewPage"> 
          {this.state.viewPage}
        </div> 
      </div>
    );
  }
}
export default App;
