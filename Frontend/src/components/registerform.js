import React, { Component } from 'react'
import axios from 'axios'

import '../css/login.css'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

class Registerform extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: '',
      email: '',
      confirm_password: '',
      status: 'Submit',
      errorMessage: '',
      isActive: false,
    }
  }

  render() {
    return (
      <div className='signupform'>
        <form onSubmit={this.handleSubmit.bind(this)} method='POST'>
          <label className='label'>
            Name
            <br />
            <input
              className='form-group-signup'
              onChange={this.handleChange.bind(this)}
              id='name'
              value={this.state.name}
              type='text'
            />
          </label>
          <label className='label'>
            Email
            <br />
            <input
              className='form-group-signup'
              onChange={this.handleChange.bind(this)}
              id='email'
              value={this.state.email}
              type='text'
            />
          </label>
          <br />
          <label className='label'>
            Password
            <br />
            <input
              className='form-group-signup'
              onChange={this.handleChange.bind(this)}
              id='password'
              value={this.state.password}
              type='password'
            />
          </label>
          <br />
          <label className='label'>
            Confirm Password
            <br />
            <input
              className='form-group-signup'
              onChange={this.handleChange.bind(this)}
              id='confirm_password'
              value={this.state.confirm_password}
              type='password'
            />
          </label>
          <br />
          <button className='LoginButton'>Signup</button>
        </form>
      </div>
    )
  }
  handleSubmit(event) {
    event.preventDefault()
    if (this.state.password !== this.state.confirm_password) {
      console.log("The passwords doesn't match")
      this.setState({ errorMessage: "The passwords doesn't match" })
      return false // The form won't submit
    } else this.setState({ status: 'Submitting' })

    axios({
      method: 'POST',
      url: `${API_ENDPOINT}/api/register`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
      },
    }).then((response) => {
      if (response.data.answer === 'Success') {
        this.setState({
          name: '',
          password: '',
          confirm_password: '',
          email: '',
          status: 'Submitted',
        })
        console.log('Form sent')
      } else if (response.data.answer === 'password_too_short') {
        console.log('Password length must be at least 4 characters long')
        this.setState({
          errorMessage: 'Password length must be at least 4 characters long',
        })
        this.setState({ regstatus: 'Submit' })
        this.handleShow()
      } else if (response.data.answer === 'Name_Excist') {
        console.log('Username already exist')
        this.handleShow()
      } else if (response.data.answer === 'Email_Excist') {
        console.log('There is already an account with this email')
        this.handleShow()
      }
    })
  }

  handleChange(event) {
    const field = event.target.id
    if (field === 'name') {
      this.setState({ name: event.target.value })
    } else if (field === 'email') {
      this.setState({ email: event.target.value })
    } else if (field === 'password') {
      this.setState({ password: event.target.value })
    } else if (field === 'confirm_password') {
      this.setState({ confirm_password: event.target.value })
    }
  }
  handleConfirmPassword = (event) => {
    if (event.target.value !== this.state.regpassword) {
      console.log('error')
      this.setState({ regconfirm_password: event.target.value })
    }
  }
  handleShow = () => {
    this.setState({
      isActive: true,
    })
  }
}

export default Registerform