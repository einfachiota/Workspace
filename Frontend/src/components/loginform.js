import React, { Component } from 'react'
import axios from "axios"
import { withRouter } from 'react-router-dom'
import login from '../utils'

import '../css/login.css'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

class Loginform extends Component {
  constructor() {
    super();
    this.state = {
        email: "",
        password: "",
        status: "Submit",
        answerOk: "Success",
        answerDenied: "Denied",
        errorMessage: "",
        isActive: false
    };
}
    render() {
        return(
            <div className="loginform">
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                 <label className="label">
                 Email 
                 <br />
                  <input
                    className="form-group-login"
                    onChange={this.handleChange.bind(this)}
                    id="email"
                    value={this.state.email}
                    type='text'
                    required

                  />
                 </label>
                 <br />
                 <label className="label">
                 Password 
                 <br />
                  <input
                    className="form-group-login"
                    onChange={this.handleChange.bind(this)}
                    id="password"
                    value={this.state.password}
                    type='password'
                    required

                  />
                 </label>
                 <br />
                 <button className="LoginButton">
                    Login
                 </button>

              </form>
            </div>
        )
    }

    handleChange(event) {
      const field = event.target.id;
      if (field === "email") {
          this.setState({ email: event.target.value });
      } else if (field === "password") {
          this.setState({ password: event.target.value });
      }
  }

  handleLogin = () => {
      login();
      this.props.history.push('/')
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Submit" });

    axios({
        method: "POST",
        url: `${API_ENDPOINT}/api/login`,
        headers: { 'Content-Type': 'application/json' },
        data: { email: this.state.email, password: this.state.password}
        
    }).then((response, props) => {
        
        console.log(response);
        if (response.data.answer === this.state.answerOk) {
            
            this.setState({ email: "", password: "", status: "Logged in" })
            this.handleLogin()
            console.log("Login Success");

        } else if (response.data.answer === "UserError") {
            this.setState({ password: "", status: "Logging in" });
            this.setState({ errorMessage: "User not found!" });
            this.setState({ status: "Submit" });
            this.handleShow()
            console.log("User not found!");
        
        } else if (response.data.answer === "PassError") {
            this.setState({ password: "", status: "Logging in" });
            this.setState({ errorMessage: "Wrong Password!" });
            this.setState({ status: "Submit" });
            this.handleShow()
            console.log("Wrong Password!");
        
        } else if (response.data.answer === this.state.answerDenied) {
            this.setState({ password: "", status: "Logging in" });
            this.setState({ errorMessage: "Wrong Email or Password" });
            this.setState({ status: "Submit" });
            this.handleShow()
            console.log("Wrong Email or Password");

        }
    });
}
}

export default withRouter(Loginform);