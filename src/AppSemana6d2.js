import React from "react";
import styles from './components/UserCard.module.css'
import UserCard from "./components/UserCard";
import Imagen from "./assets/avatarD.jpg";
import Drako from "./assets/Drako.jpeg";

const App =()=>{
    return(
        <div>
            <h1 className={styles.h1}>Usuarios</h1>
            <div className={styles.cardsContainer}>
                <UserCard 
                    nombre="Dalia Cabieles" 
                    rol="Fullstack" 
                    imagen={Imagen} 
                    descripcion="Aprendiendo java, js, react y más"
                />
                <UserCard 
                    nombre="Drako Fernando" 
                    rol="Hacker" 
                    imagen={Drako} 
                    descripcion="El mejor hacker, nació aprendido"
                />
            </div>
        </div>
    );
};
export default App