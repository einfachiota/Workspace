import React, { Component } from 'react'

import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'

class Entry extends Component {

  render() {
    return (
      <div>
        <Topbar />
        <Sidebar />
      </div>
    )
  }
}

export default Entry