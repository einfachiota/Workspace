import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isLogin } from '../utils'
import { openNav } from './handler'

import '../css/topbar.css'
import '../css/sidebar.css'

class Topbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: isLogin(),
            display: 'true'
        }
    }

    handleLogout = () => {
        logout()
        this.props.history.push('/login')
        this.setState({
            isLogin: false,
        })
    }

    render() {
        return (
            <div className="topbar" id="topbar">
                <div className="sidebarbutton" onClick={openNav}>
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