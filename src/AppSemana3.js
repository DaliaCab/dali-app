//SEMANA 3
import React from "react";
import ProductCard from "./ProductCard";
import ProductImage1 from "./assets/user1.jpg"
import ProductImage2 from "./assets/user2.jpg";

function App(){
  return(
    <div>
      <ProductCard imageSrc={ProductImage1} productName="Ropa chica 1" productPrice="29.00"/>
      <ProductCard imageSrc={ProductImage2} productName="Ropa chica 2" productPrice="100.00"/>
    </div>
  )
}
export default App;
