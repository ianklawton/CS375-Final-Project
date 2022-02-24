import React, { Component } from "react";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
   this.setState({
     [event.target.name] : event.target.value
   })
 }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    alert('A password was submitted: ' + this.state.password);
    event.preventDefault();

    fetch("/", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
  			username: this.state.username,
  			plaintextPassword: this.state.password,
  		})
  	}).then(function (response) {
  		if (response.status === 200) {
  			console.log("Success");
  		} else {
  			console.log("Failure");
  		}
  	});

  }

  render() {
    return (

      <div>
        <h1>Login/Create Account</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label name="username" for="username">Username:</label>
                <input name="username" type="text" value={this.state.username}
                onChange={this.handleChange} />
            </div>
            <div>
              <label name="password" for="password">Password: </label>
                <input name="password" type="text" value={this.state.password}
                onChange={this.handleChange} />
            </div>
            <input type="submit" value="Login" />
        </form>
    </div>
    );
  }
}

export default Login;
