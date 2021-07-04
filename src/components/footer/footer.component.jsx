import { Typography } from '@material-ui/core';
import React from 'react'
import {Nav, Navbar, NavDropdown, HomeRounded} from 'react-bootstrap';


const Footer=()=> {


const styles={
    footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10px',
        marginTop:'20px'
    },
    name:{
        color:'#fff',
        fontsize:'14px'
    },
    copy:{
        color:'#757575',
        fontSize:'13px'
    }
}


return (
    <Navbar bg="dark" variant="dark" style={styles.footer}>
      <Navbar.Brand>
           <Typography style={styles.name}>Shohruzjon Abdivakilov</Typography>
      </Navbar.Brand>
      <Navbar.Brand>
           <Typography style={styles.copy}>© All rights reserved</Typography>
      </Navbar.Brand>
  </Navbar>
    )
}


export default  Footer;