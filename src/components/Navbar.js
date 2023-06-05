import { Component } from "react";
import '../App.css'
import Carro from "./Carro";

class Navbar extends Component{

  render(){
    const {carro} = this.props
    return(
       <nav>
       <p className="shop">Shop</p>
       <Carro carro={carro} />
       </nav>
    )
  }
}

export default Navbar