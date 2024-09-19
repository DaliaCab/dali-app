import React from "react";
import ProfileCardStyled from "./ProfileCardStyled";
import Imagen from "./assets/user2.jpg"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  height: 100vh; /* Para centrar verticalmente */
  padding: 20px;
  background-color: #fff;
`;

function App(){
    return(
        <Container>
            <h1>Lista de Perfiles</h1>
            <ProfileCardStyled imagen={Imagen}/>
        </Container>
    )
}
export default App;