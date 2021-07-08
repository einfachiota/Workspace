import React, { Component } from 'react'

import '../css/login.css'

class Loginform extends Component {
    render() {
        return(
            <div className="loginform">
              <form>
                 <label className="label">
                 Email 
                 <br />
                  <input
                    className="form-group-login"

                  />
                 </label>
                 <br />
                 <label className="label">
                 Password 
                 <br />
                  <input
                    className="form-group-login"

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
}

export default Loginform