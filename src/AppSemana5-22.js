import { useState } from "react"

function AgregarProducto({agregarProducto}) {
    const [producto, setProducto] = useState ("")

    const manejarEnvio =(evento) =>{
        evento.preventDefault();
        agregarProducto(producto);
        setProducto("");
    };
    return(
        <form onSubmit={manejarEnvio}>
            <input
            type="text" value={producto} onChange={(e) => setProducto(e.target.value)}
            placeholder="Agregar producto"
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

function ListaCompras({producto}){
    return(
        <ul>
            {producto.map((producto, index) => (
                <li key={index}>{producto}</li>
            ))}
        </ul>
    );
}

function TotalProductos({productos}){
    return <h3>Total de productos: {productos.length}</h3>;
}

function App(){
    const[productos, setProductos] = useState([])
    const agregarProducto = (producto) => {
        setProductos([...productos, producto]) //los puntos (operator spring) sirven para decirle a productos que se va a expandir
    };
    return(
        <div>
            <AgregarProducto agregarProducto={agregarProducto}/>
            <ListaCompras producto={productos}/>
            <TotalProductos productos={productos}/>
        </div>
    );
}
export default App;