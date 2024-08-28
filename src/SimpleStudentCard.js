import React from "react";

function SimpleStudentCard (props){
    return(
        <div>
            <h2>El estudiante es: {props.name}</h2>
            <h2>El segundo estudiante es: {props.name2}</h2>
        </div>
    );
}
export default SimpleStudentCard;