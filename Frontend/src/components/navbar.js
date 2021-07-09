import React, { Component } from 'react'

import '../css/login.css'

class Navbar extends Component {
    render() {
        return(
            <div className="NavBar">
              <a href="/" className="NavbarBrand">Workspace</a>
              <li className="navButtons">
              <a href="/signup">Signup</a>
              <a href="/login">Login</a>
              </li>
            </div>
        )
    }
}

export default Navbar