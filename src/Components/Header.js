import React from 'react'
import "../Designs/Header.css"
import logo from "../images/logo_2.png"
const Header = () => {
  return (
    <React.StrictMode>
        <img src={logo} id="brand_logo" alt="N/A"></img>
    </React.StrictMode>
  )
}

export default Header