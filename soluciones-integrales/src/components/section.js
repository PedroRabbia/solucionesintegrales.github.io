import React from 'react'
import "../styles/section.css"
import Logo from "../ASSETS/fotoinicial.jpg"
import Logo2 from "../ASSETS/section2.jpeg"
import Logo3 from "../ASSETS/foto2.jpeg"
import Logo4 from "../ASSETS/foto3.jpeg"
import Logo5 from "../ASSETS/foto5.jpeg"
import Mision1 from "../ASSETS/MISION1.jpeg"
import Mision2 from "../ASSETS/MISION2.jpeg"
import Mision3 from "../ASSETS/MISION3.jpeg"
import Header from './header'


function section() {
  return (
    <div>
          <Header/>
    <div className='section_container'>
      <div className='container_landing'>
        <div className='h1_container'> 
        <h1>NUESTRA EMPRESA</h1>
        <p>Somos una Empresa con Cincuenta años de
trayectoria en el mercado. En este tiempo hemos logrado conseguir muy
altos niveles de calidad en todos nuestros productos, certificados acorde
con normas internacionales y la capacidad de adaptarnos a la demanda del
mercado y a las especificaciones de nuestros clientes gracias a un personal
calificado y capacitado permanentemente. Somos una Empresa, ubicada
geográfica en Villa María, Córdoba, que cuenta con tecnología de punta a
nivel mundial desarrollada para mercados internacionales.</p>
        <a href="#">CONOCE MAS</a>
        </div>
        <div className='section_2'>   
        <h1>NUESTRA VISION</h1>
              <p>Conservar el liderazgo nacional de diseño,
      innovación y calidad en la provisión de revestimientos para los usuarios
      finales y para otras industrias. Mantener la participación y el reconocimiento
      de nuestros productos a nivel mundial.</p>
       <div className='pic_container'>
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
       </div>
        </div>
        <div className='section_2'>
            <h1>NUESTRA MISION</h1>
              <p>Nuestro objetivo es brindar al mercado
              productos que provean soluciones en superficie, que cumplan con los
              requerimientos de nuestros clientes y mediante una rentabilidad sustentable
              tener un crecimiento sostenible.</p>
              <div className='pic_container'>
              <img src={Mision1} alt=""/>
              <img src={Mision2} alt=""/>
              <img src={Mision3} alt=""/>
       </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default section
