import React from 'react'
import { Container, Grid } from '@material-ui/core';

import { Typography } from '@material-ui/core';
import resumeData from '../utils/resume-data.component';
import CardComponent from '../card/card.component';
import ProgressComponent from '../progress/progress.component'

import './aboutme.styles.scss';


const  AboutMe= () => {





    const styles={
        title:{
            color:"#000",
            fontSize:'24px',
            fontWeight:'bold',
        },
        text:{
            fontSize:16,
            marginTop:35,
        }
    }

    return (
    <div>
        <Grid container className="aboutme">
                <Grid item xs={12} >
                <Typography style={styles.title}><span className="aboutme__title">{resumeData.about.title}</span></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={styles.text}>{resumeData.about.text}</Typography>
              </Grid>
        </Grid>


        <div className='aboutme__services-container'>
              <Grid item xs={12} >
                <Typography style={styles.title}><span className="aboutme__title">{resumeData.services.title}</span></Typography>
              </Grid>
                 <div className='aboutme__services'>
                    {Object.keys(resumeData.services.types).map(key=><CardComponent key={key} imgUrl={resumeData.services.types[key].imgUrl}  title={resumeData.services.types[key].title}   text={resumeData.services.types[key].text}/>)}
                 </div>
        </div>
          
          <div className="aboutme__skills-container">
            <Grid item xs={12} >
                   <Typography style={styles.title}><span className="aboutme__title">My skills</span></Typography>
            </Grid>
            <Grid  container   className="aboutme__skill-wrapper">  
                  {Object.keys(resumeData.skills).map(key=><ProgressComponent 
                  objects={resumeData.skills[key].skillSet}
                  title={resumeData.skills[key].title} /> )}
              </Grid>
          </div>
    </div>
    )
}


export default AboutMe