import React from "react";
import './Styles/ProfileCard.css';


const ProfileCard = (props) =>{
    return(
        <div className="profile-card"> {/*/Aquí llamo al profile-card de ProfileCard.css*/}
            <img src ={props.imagen}/>
            <h2> Anne</h2>
            <p>Designer</p>
        </div>
    )
}

export default ProfileCard;