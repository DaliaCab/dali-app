import React from "react";
import styles from './UserCard.module.css'


const UserCard = ({nombre, rol, imagen, descripcion})=>{
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <img
                    src = {imagen} 
                    alt = "Profile" 
                    className={styles.profileImage}
                />
                <h2 className={styles.userName}>{nombre}</h2>
                <p className={styles.userRole}>{rol}</p>
                <p className={styles.descripcion}>{descripcion}</p>
            </div>
        </div>
    )
}
export default UserCard