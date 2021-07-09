import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isLogin } from '../utils'

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLogin: isLogin()
    }
}

handleLogout = () => {
    logout();
    this.props.history.push('/login')
    this.setState({
        isLogin: false
    })
}
    render() {
      return (
      <div>

{this.state.isLogin ?
                                    <p onClick={() => this.handleLogout()}>Logout</p>
                                    : <Link to="/login" onClick={() => this.handleLogout()}>Logout</Link>
                                }
      </div>
        )}

}

export default Entry