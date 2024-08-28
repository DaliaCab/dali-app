import React from "react";

function SimpleStudentCard (props){
    return(
        <div>
            <h2>El estudiante es: {props.name}</h2>
            <p>Está en el grado: {props.grade}</p>
        </div>
    );
}
export default SimpleStudentCard;