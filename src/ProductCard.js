import React from "react";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

function ProductCard (props){
    return(
        <div style={{border:'1px solid #ccc', padding:'10 px', margin:'10px'}}>
            <ProductImage src={props.imageSrc}/>
            <ProductName name={props.productName}/>
            <ProductPrice price={props.productPrice}/>
        </div>
    );
}
export default ProductCard;