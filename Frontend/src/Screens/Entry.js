import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isLogin } from '../utils'

import Sidebar from '../components/sidebar'

class Entry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: isLogin(),
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
      <div>
      <p className="logoutbutton">
        {this.state.isLogin ? (
          <p onClick={() => this.handleLogout()}>Logout</p>
        ) : (
          <Link to='/login' onClick={() => this.handleLogout()}>
            Logout
          </Link>
        )}
        </p>
        <Sidebar />
      </div>
    )
  }
}

export default withRouter(Entry)