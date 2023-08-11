import React from 'react'
import Header from '../components/header'
import "../styles/Cristaleria.css"
import Cristaleria2 from "../ASSETS/cristaleria2.jpeg"

function Cristaleria() {
  return (
    <div>
     <Header/>
     <div className='section_containerc'>
        <div className='container_landing'>
         <div className="h1_container2">
          <h1>CRISTALERIA</h1> 
          <p>
Tenemos el sistema techos corredizos en vidrio más versátil del
mercado, realizado totalmente en aluminio y con la más alta
calidad en materias prima y tecnología.
La línea de techos corredizos está compuesta por un exclusivo
sistema de perfiles de diseño italiano, logrando de esta manera
un sistema moderno y versátil, el cual nos pone a la vanguardia

del mercado de los sistemas de techos corredizos. Dichos
perfiles nos permiten alcanzar grandes luces.
Nuestros techos son ideales para cierre de patios, balcones,
jardines de invierno, como así también piscinas.
Al ser totalmente corredizo se puede aprovechar los espacios
cubiertos tanto en invierno como en verano.</p>
         </div>
        </div>
     </div>
     <div className="img_container">
      <img src={Cristaleria2} alt="" />
     </div>
    </div>
  )
}

export default Cristaleria
