import React from "react";
import styled from "styled-components";
import Imagen from "./assets/user2.jpg";

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    text-align: center;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 20px rgba(0,0,0,0.1);
    margin: 20px auto;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const Name = styled.h2`
  font-sie: 1.5rem;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #555;
`;

const ProfileCardStyled = (props) => {
  return (
    <Card>
      <ProfileImage src={props.imagen} alt="Profile" />
      <Name>Anne</Name>
      <Description>Designer</Description>
    </Card>
  );
};

export default ProfileCardStyled;
