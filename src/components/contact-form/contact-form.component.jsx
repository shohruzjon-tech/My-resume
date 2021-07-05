import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import firebase from '../../firebase/firebase';



import "./contact-form.styles.scss";


const sendEmail = firebase.functions().httpsCallable('sendEmail');


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

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [error, setError]=useState('');
  const [success, setSuccess]=useState('');


  const handleSubmit=(e)=>{
       e.preventDefault();
       if(name==='' || email==='' || message===''){
         alert("Please, fill the form properly !")
         return;
       }


       sendEmail({
              name: name,
              email: email,
              message: message
             })
       .then(() => {
            setSuccess("Your message has been successfully sent");
            setName('');
            setEmail('');
            setMessage('');
       })
      .catch((error) => {
            setError('Oops, something went wrong. Please, try later !')
            setName('');
            setEmail('');
            setMessage('');
      })
   }
 
 
  const handleName=(e)=>{
      setName(e.target.value);  
  }

  const handleEmail=(e)=>{
      setEmail(e.target.value);  
  }

  const handleMessage=(e)=>{
      setMessage(e.target.value);  
  }
  

  const removeAlerts=()=>{
      if(error!=='' || success!==''){
          setError('');
          setMessage('');
      }
  }


    return (
        <div className="form__container">
         <h2 className='form__title'><span className='form__title-container'>Contact me</span></h2>
           <form  className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid container  spacing={3}>
               <Grid item xs={6}><TextField value={name} onChange={handleName}  onClick={removeAlerts}  id="standard-basic" label="Name"  name="name" className="form__input" required/></Grid>
               <Grid item xs={6}><TextField value={email} onChange={handleEmail}  onClick={removeAlerts}  id="standard-basic" label="Email" name="email"  className="form__input"  required/></Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={12}>
                     <textarea onChange={handleMessage} value={message}  onClick={removeAlerts}  name="message" id="" cols="30" rows="5" placeholder="Message"  className="form__textarea" required></textarea>
                 </Grid>
            
                  <Grid item xs={3}>
                     <Button variant="contained" type="submit"  style={{background:"var(--main-color)"}}>
                       <span style={{color:'#000'}}>Send </span><SendIcon style={{color:'#f5f5f5' , marginLeft:10}}/>
                     </Button>
                 </Grid>
            
                  <Grid item xs={9}>
                      <span className='result-error'>{error}</span>
                      <span className='result-success'>{success}</span>
                 </Grid>
            </Grid>
        </form>
    </div>
    )
}


export default  ContactForm;