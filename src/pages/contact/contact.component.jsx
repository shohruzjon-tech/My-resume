import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ContactForm from '../../components/contact-form/contact-form.component';
import AddressComponent from '../../components/address/address.component';
import LocationComponent from '../../components/location/location.component';


import "./contact.styles.scss";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));






const  ContactPage= () => {
 const classes = useStyles();

  return (
        <Grid container style={{background:"#fff"}}> 
              <Grid item xs={6}> 
                   <ContactForm/>
              </Grid>
              <Grid item xs={6}> 
                  <AddressComponent/>
              </Grid>
              <Grid item xs={12}> 
                  <LocationComponent/>
              </Grid>
       </Grid>
  );
}


export default ContactPage;