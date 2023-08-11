import React from 'react'
import Logo from "../ASSETS/logo.jpg"
import "../styles/header.css"
import {NavLink} from "react-router-dom"

function header() {
  return (
    <div class="header_container">
      <div class="container_img">
        <img src={Logo}/>
      </div>
      <h1>SOLUCIONES INTEGRALES</h1>
      <div class="link_header">
      <NavLink  className="button_header" to="/">HOME</NavLink>
      <NavLink  className="button_header" to="/trabajos">TRABAJOS</NavLink>
        <NavLink  className="button_header" to="/Post">POST-VENTA</NavLink>
        <NavLink  className="button_header" to="/contacto">CONTACTO</NavLink>
      </div>
    </div>
  )
}

export default header
