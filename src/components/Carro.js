import { Component } from "react";
import BubbleAler from "./BubbleAler";
import DetallesCarro from "./DetallesCarro";

class Carro extends Component{
  render(){
    const {carro} = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return(
        <div>
        <span>
        {cantidad !== 0
         ? <BubbleAler value={cantidad} />
         :null}
       
       </span>
            <button className="shop-btn">Carro</button>
            <DetallesCarro carro={carro} />
        </div>
        
    )
  }
}

export default Carro