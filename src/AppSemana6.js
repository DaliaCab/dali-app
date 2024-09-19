import React from "react";
import Imagen from "./assets/user2.jpg"
import ProfileCard from "./ProfileCard";

function App(){
    return(
        <div>
            <h1>Lista de Perfiles</h1>
            <ProfileCard imagen={Imagen}/>
        </div>
    )
}
export default App;