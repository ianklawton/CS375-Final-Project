import React, { Component } from "react";
import Inventory from "./Inventory";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { craftItems } from './data';


// onMouseEnter onMouseExit
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryToggle: false,
      showText: false
    };
  }
  render() {
    return (
      <div className="page">
          <div className="page-text">
            {this.state.showText && <p>Hello World!!!</p>}
            <p>Welcome to your home</p>
          </div>
          <div className="page-craft">
            <div className="container">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <Select options={ craftItems } />
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
            <button className="craft" onClick={() => this.setState({showText:true})}>Craft</button>
          </div>
          <div className="page-inventory">
            <table className="page-table">
              <thead>
                <tr><th>Item</th><th>Quantity</th><th>Description</th></tr>
              </thead>
              {this.state.inventoryToggle && <Inventory />}
            </table>
            <button className="check" 
             onClick={() => this.setState({inventoryToggle:(!this.state.inventoryToggle)})}>Check Inventory</button>
          </div>
      </div>
    );
  }
}

export default Home;