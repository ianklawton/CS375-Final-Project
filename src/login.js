import React, { Component} from "react";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: '', button: 0, message: "", token: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange(event){
   this.setState({
     [event.target.name] : event.target.value
   })
 }

  handleSubmit(event) {
    let status = 0;
    let me = '';
    const that = this;

    event.preventDefault();

    if(this.state.button == 1){
      console.log("Login Button Worked")

      fetch("http://localhost:8080/signin", {
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
        status = response.status;
        return response.json();
    	}).then(function (data) {
          console.log("Client received from server:", data);
          if (data.hasOwnProperty("token")) {
            console.log(data.token)
            console.log(data.username)
            that.props.setToken(data.username,data.token)
      		}
          else {
            me = data.error;
            that.setState({message : me});
          }
        });

    }
    if(this.state.button == 2){
      console.log("Sign Up Button Worked")

      fetch(`http://localhost:8080/signup`, {
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
        status = response.status;
        return response.json();
    	}).then(function (data) {
          console.log("Client received from server:", data);
          if (status === 200) {
            me = data.success;
            that.setState({message : me});
      		}
          else {
            me = data.error;
            that.setState({message : me});
          }
        });
    }
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
                <input name="password" type="password" value={this.state.password}
                onChange={this.handleChange} />
            </div>
            <button
               onClick={() => (this.state.button = 1)}
               type="submit"

               value="Login"
             >
             Login
             </button>
             <button
               onClick={() => (this.state.button = 2)}
               type="submit"

               value="Sign Up"
             >
             Sign Up
             </button>
        </form>
        <div> {this.state.message} </div>
    </div>
    );
  }
}

export default Login;
