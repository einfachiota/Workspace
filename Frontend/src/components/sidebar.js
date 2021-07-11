import React, { Component } from 'react'
import { closeNav } from './handler'

import '../css/sidebar.css'

class Navbar extends Component {

    render() {
        return(
            <div>
            <div id="mySidebar" className="sidebar">
               <div className="closebtn" onClick={closeNav}>×</div>
            </div>
            </div>
        )
    }
}

export default Navbar