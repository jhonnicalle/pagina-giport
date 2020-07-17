import React from 'react';
import './about.css'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  principalHeading: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading: {    
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  p: {
    textAlign: "center",
    fontSize: 20
  }
}));

const Footer = () => { 

  const classes = useStyles();
  return(
    <Container maxWidth="md">
      
    </Container>
  )
}

export default Footer