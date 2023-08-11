import React from 'react'
import Header from '../components/header'
import "../styles/Cristaleria.css"
import { Link } from 'react-router-dom'
import Cards from "../components/Cards.js"


function Gallery() {
  return (
    <div>
      <Header/>
      <div className="gallery">
        <div className='container_h1'>
        <h1>TRABAJOS</h1>
        <div>  
          <h1>POLITICAS DE CALIDAD</h1>
        <p>Proveer productos que cumplan las
normas de calidad afines y con los requerimientos acordados con el cliente.
Asegurar personal competente y consciente de su contribución en el logro
de los objetivos de la organización. Normalizar los procesos y mantener los
ambientes limpios, ordenados y seguros. Asegurar una rentabilidad
sustentable como base de crecimiento. Mantener y mejorar el sistema de
gestión de la calidad incorporando el cuidado del medio ambiente.
Establecer compromiso de colaboración con nuestros proveedores.</p>
        </div>
        </div>
        </div>
        <Cards/>
      </div>
  )
}

export default Gallery
