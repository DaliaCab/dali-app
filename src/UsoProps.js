//Los props son parámetros que se 
import React from "react";

function Greeting (props){
    return(
        <div>
            <h2>Hola,{props.name}</h2>
        </div>
    );
}
export default Greeting;