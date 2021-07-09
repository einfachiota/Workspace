import React, { Component } from 'react'

import '../css/login.css'

class Registerform extends Component {
    render() {
        return(
            <div className="signupform">
              <form>
                 <label className="label">
                 Email 
                 <br />
                  <input
                    className="form-group-signup"

                  />
                 </label>
                 <br />
                 <label className="label">
                 Password 
                 <br />
                  <input
                    className="form-group-signup"

                  />
                 </label>
                 <br />
                 <label className="label">
                 Confirm Password 
                 <br />
                  <input
                    className="form-group-signup"

                  />
                 </label>
                 <br />
                 <button className="LoginButton">
                    Signup
                 </button>

              </form>
            </div>
        )
    }
}

export default Registerform