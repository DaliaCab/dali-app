import React from 'react';

//ESTE ES EL MONTAJE
class MiComponente extends React.Component {
    constructor(props){                       //El constructor es para inicializar el montaje que va a la app
        super(props);                         //Inicializa el componente Hereda
        this.state = {mensaje: "Hola, Mundo!"}; //this.state es para pasar una propiedad al constructor
    }

    componentDidMount(){                       //Para realizar tareas como llamadas a apis, verificar que funciona
        console.log("El componente se ha montado en la pantalla");
    }
//AQUÍ SE ACTUALIZA
    componentDidUpdate(prevProps, prevState){   //Recibe estado y propiedades anteriores, Actualiza lo que recibe
        console.log("El componente se ha actualizado");
    }
//AQUÍ SE DESMONTA
    componentWillUnmount(){        //Para realizar tareas de limpieza como detener timers o cancelar suscripciones
        console.log("El componente desaparece");
    }

    render(){
        return<div>{this.state.mensaje}</div>;
    }

}
export default MiComponente;