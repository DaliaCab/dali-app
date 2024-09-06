import React from "react";

function ProductImage (props){
    return(
        <div>
            <img 
            src={props.src} 
            alt={props.name} 
            style={{width:'100px', height:'100px'}}/>
        </div>
    )

}
export default ProductImage