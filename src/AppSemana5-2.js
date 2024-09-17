//Lifting state up = Cuando dos componentes se pasan info de uno a otro
//Se usa cuando los componentes hacen lo mismo

import React, { useState } from "react";

function ComponenteA({temperatura, setTemperatura}){
    return(
        <div>
            <h2>Temperatura en componente A: {temperatura}°C</h2>
            <button onClick={() => setTemperatura (temperatura + 1)}>Aumentar</button>
        </div>
    )
}

function ComponenteB({temperatura, setTemperatura}){
    return(
        <div>
            <h2> Temperatura en ComponenteB: {temperatura}°C</h2>
            <button onClick={() => setTemperatura(temperatura + 1)}>Aumentar</button>
        </div>
    )
}

function App(){
    const[temperatura, setTemperatura] = useState(0)
    return(
        <div>
            <ComponenteA temperatura = {temperatura} setTemperatura={setTemperatura}/>
            <ComponenteB temperatura = {temperatura} setTemperatura={setTemperatura}/>
        </div>
    )
}

export default App;

/*
//SIN APLICAR EL LIFTING STATE UP
function ComponenteA(){
    const[temperaturaA, setTemperaturaA] = useState(0);

    
    return(
        <div>
            <h2>Temperatura en componenete A: {temperaturaA} °C</h2>
            <button onClick={() => setTemperaturaA(temperaturaA + 1)}> Aumentar</button>
        </div>
    )
}

function ComponenteB(){
    const[temperaturaB, setTemperaturaB] = useState(0);
    return(
        <div>
            <h2>Temperatura en componente B: {temperaturaB}°C</h2>
            <button onClick={() =>setTemperaturaB(temperaturaB + 1)}> Aumentar</button>
        </div>
    )
}

function App (){
    return(
        <div>
            <ComponenteA/>
            <ComponenteB/>
        </div>
    )
}
*/