import React from "react";
import "./AppSemana6d3.css"; //Estilos globales con CSS tradicional
import UserCard from "./components/Card"; //Componente con CSS modules
import Button from "./components/Button"; //Botón con styled-components
import Imagen from "./assets/avatarD.jpg";

function App(){
    return(
        <div className="App">     {/*Aqií llamamos a App.css */}
            <h1>Applicación con diferentes técnicas de estilizado: styled-components, CSSModules y CSSTradicional</h1>
            {/*Componente UserCard usando CSS Modules*/}
            <UserCard
                name="Dalia"
                description="Fullstack"
                image={Imagen}
            />

            {/*Botones usando styled components*/}
            <div className="buttons">
                <Button primary>Primario</Button>
                <Button>Secundario</Button>
                <Button disabled>Deshabilitado</Button>
            </div>
        </div>
    );
}
export default App;