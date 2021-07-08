import React from 'react'
import Logo from './assets/NK.svg'
import Loginform from './components/loginform';
import Navbar from './components/navbar';

import './css/login.css'

function App() {
  return (
  <div className="container"> 
    <div className="Login">
    <Navbar />
       <img src={Logo} alt="logo" className="logo"></img>
       <Loginform />
    </div>
  </div>
  );
}

export default App;
