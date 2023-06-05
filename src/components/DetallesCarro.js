import { Component } from "react";


class DetallesCarro extends Component{
    render(){
        const {carro} = this.props
        return(
            <div className="detallescarro">
                <ul>
                    {carro.map(x => <li key={x.name}>
                    <img className="detallescarro-img" src={x.img} alt={x.name}  />
                    {x.name}
                    <span> {x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro