import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import "./contact-form.styles.scss";



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '48ch',
      },
    },
  }));





const   ContactForm = () => {


 const classes = useStyles();


    return (
        <div className="form__container">
         <h2 className='form__title'><span className='form__title-container'>Contact me</span></h2>
           <form  className={classes.root} noValidate autoComplete="off">
            <Grid container  spacing={3}>
               <Grid item xs={6}><TextField id="standard-basic" label="Name"  className="form__input"/></Grid>
               <Grid item xs={6}><TextField id="standard-basic" label="Email" className="form__input"/></Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={12}>
                     <textarea name="textarea" id="" cols="30" rows="5" placeholder="Message"  className="form__textarea"></textarea>
                 </Grid>
            
                  <Grid item xs={3}>
                     <Button variant="contained" type="submit"  style={{background:"var(--main-color)"}}>
                       Send <SendIcon style={{color:'#f5f5f5' , marginLeft:10}}/>
                     </Button>
                 </Grid>
            </Grid>
        </form>
    </div>
    )
}


export default  ContactForm;