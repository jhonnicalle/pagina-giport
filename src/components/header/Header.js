import React from 'react';
import './header.css'
// import styled from 'styled-components'
// import logo from '../../images/giport-logo.png'
import logo from '../../images/LOGO-GIPORT-03.png'
import logo2 from '../../images/LOGO-GIPORT-04.png'
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'calc(100vh - 50px)',
    // [theme.breakpoints.down('md')]: {
    //   display: 'inline',
    // },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Header = () => {
  const classes = useStyles();
  
    return(
      <div className="background-screen">
        <div className="header">
          <div className="barra">
            <div className="logo-space">
              <img src={logo} className="logo" alt={"Imagen de buques en el mar"} />
            </div>
          </div>
          {/* <div className="portada"> */}
          {/* <div className={classes.root}> */}
          <Container maxWidth="lg">
            <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
              <Grid item className={[classes.paper, "section_logo"]} xs={0} md={4} >
                <div>
                  <img src={logo2} className="logo2" alt={"Logo de empresa"}/>
                </div>
              </Grid>
              <Grid item className={classes.paper} xs={12} md={8} >
                <div className="home-info">
                  <h1 className="title">BIENVENIDOS A GIPORT</h1>
                  <p>En Giport SAS ofrecemos un amplio portafolio de servicios orientado a satisfacer todas las necesidades del sector portuario y logístico.</p>
                
                  <p>Brindamos un portafolio de servicios que proporcionan asistencia integral en todas las operaciones que demanden nuestros clientes, siempre con los estándares más altos.</p>
                </div>
              </Grid>
            </Grid>
          </Container>
          {/* </div>             */}
          {/* </div> */}
        </div>
      </div>
    )
  
}

export default Header