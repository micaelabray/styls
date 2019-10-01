import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    console.log("handle change", event);
  
    const {name, value} = event.target;

    this.setState({
      [name]:value
    });
};

handleSubmit = (event) => {
  console.log("form submited");
  event.preventDefault();
}

  render() {
    return (
      <>
        <h2>Login with Styls</h2>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <input type="email" 
              name="email" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              required 
            />

            <br />
            <br />

            <input type="password" 
              name="password" 
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              required 
            />
            <br />
            <br />
            <button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;