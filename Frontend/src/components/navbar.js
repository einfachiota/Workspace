import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/login.css'

class Navbar extends Component {
    render() {
        return(
            <div className="NavBar">
              <a href="/" className="NavbarBrand">Workspace</a>
              <li className="navButtons">
              <Link to='/signup'>Signup</Link>
              <Link to='/login'>Login</Link>
              </li>
            </div>
        )
    }
}

export default Navbar