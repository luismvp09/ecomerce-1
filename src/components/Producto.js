import { Component } from "react";
import Button from './Button'

class Producto extends Component {
    render(){

        const { producto, agregarAlCarro} = this.props
         return(
            <div className="Producto">
                <main>
                <img src={producto.img} alt={producto.name}  />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={()=> agregarAlCarro(producto)} className="btn">Agregar al Carro</Button>
                </main>
            </div>
        )
    }
}

export default Producto