import React from "react";
import styles from "./Card.module.css"

function UserCard({name, description, image}){
    return(
        <div className={styles.card}>
            <img src = {image} alt ={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}
export default UserCard;