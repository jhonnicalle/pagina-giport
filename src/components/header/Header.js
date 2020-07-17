import React from 'react';
import './header.css'
// import styled from 'styled-components'
import logo from '../../images/giport-logo.png'

const Header = () => {
  
    return(
      <div className="background-screen">
        <div className="header">
          <div className="barra">
            <div className="logo-space">
              <img src={logo} className="logo" alt={"Imagen de buques en el mar"} />
            </div>
          </div>
          <div className="portada">
            <div className="home-info">
              <h1 className="title">BIENVENIDOS A GIPORT</h1>
              <p>En Giport SAS ofrecemos un amplio portafolio de servicios orientado a satisfacer todas las necesidades del sector portuario y logístico.</p>
            
              <p>Brindamos un portafolio de servicios que proporcionan asistencia integral en todas las operaciones que demanden nuestros clientes, siempre con los estándares más altos.</p>
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default Header