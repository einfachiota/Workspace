import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isLogin } from '../utils'

import '../css/topbar.css'
import '../css/sidebar.css'

class Topbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: isLogin(),
            nav: true
        }
    }

    handleLogout = () => {
        logout()
        this.props.history.push('/login')
        this.setState({
            isLogin: false,
            nav: true
        })
    }


openNav = () => {
    document.getElementById("mySidebar").style.width = "var(--sidebar-width)";
    document.getElementById("topbar").style.marginLeft = "var(--sidebar-width)";
    this.setState({nav: true})
}

closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("topbar").style.marginLeft = "0";
    this.setState({ nav: false })
}

toggleNav = () => {
    this.state.nav ? this.closeNav() : this.openNav();
}

    render() {
        return (
            <div className="topbar" id="topbar">
                <div className="sidebarbutton" onClick={this.toggleNav}>
                    &#9776;
                </div>
                <div className="logoutbutton">
                    {this.state.isLogin ? (
                        <div onClick={() => this.handleLogout()}>Logout</div>
                    ) : (
                        <Link to='/login' onClick={() => this.handleLogout()}>
                            Logout
                        </Link>
                    )}
                </div>
    
            </div>
        )
    }
}

export default withRouter(Topbar)