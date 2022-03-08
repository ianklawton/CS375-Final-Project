import React, { Component } from "react";

class Woods extends Component {

  constructor() {
    super();
    this.state = {
      username: "", item: ""
    };
  this.collectItems = this.collectItems.bind(this);
  }
  collectItems(u,t){
    console.log(u,t)

    fetch("http://localhost:8080/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: u,
        item: t,
      })
    })
  }



  render() {

    const { username } = this.props;

    return (
      <div>
        <h2>Location: Missouri, Weather: Clear Skies</h2>
        <button onClick={() => this.collectItems(username,"branch")} >Collect Branches</button>
        <button onClick={() => this.collectItems(username,"wood")}>Collect Wood</button>
        <button onClick={() => this.collectItems(username,"...")}>Collect ...</button>
        <div>{}</div>
      </div>
    );
  }
}

export default Woods;
