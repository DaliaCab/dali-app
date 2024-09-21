import styled from "styled-components";

// Creamos un botón dinámico utilizando styled-components
const Button = styled.button`
  background-color: ${(props) =>
    props.primary
      ? "#4CAF50" // Color para el botón primario (verde)
      : props.disabled
      ? "#D3D3D3" // Color para el botón deshabilitado (gris claro)
      : "#008CBA"}; // Color para el botón secundario (azul)

  color: ${(props) =>
    props.disabled ? "#A9A9A9" : "white"}; // Texto gris si está deshabilitado, blanco de otro modo
  
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; // El cursor cambia a prohibido si el botón está deshabilitado

  transition: background-color 0.3s ease; // Transición para el cambio de color

  /* Cambia el color del botón al pasar el mouse (hover) */
  &:hover {
    background-color: ${(props) =>
      props.primary
        ? "#45a049" // Color más oscuro para el botón primario cuando se pasa el mouse
        : props.disabled
        ? "#D3D3D3" // No cambia el color si está deshabilitado
        : "#005f6b"}; // Color más oscuro para el botón secundario cuando se pasa el mouse
  }
`;

export default Button;
