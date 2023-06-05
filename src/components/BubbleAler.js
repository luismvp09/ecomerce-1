import { Component } from "react";
import '../App.css'
class BubbleAler extends Component {
  getNumber(n) {
    if (!n) {return '' }
      return n > 9 ? "9+" : n;
    
  }
  render() {
    const { value } = this.props;
    return <span className="value">{this.getNumber(value)}</span>;
  }
}

export default BubbleAler;
