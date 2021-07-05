import React from 'react'
import { Grid } from '@material-ui/core';
import PortfoliosComponent from '../../components/portfolios/portfolios.component';
import resumeData from '../../components/utils/resume-data.component';

import './portfolio.styles.scss';


const Portfolio=()=> {




    return (
        <Grid container className='portfolio__container'>
        <h2 className='portfolio__header'><span className='portfolio__header-container'>Portfolio</span></h2>
            <Grid container spacing={3}  className='portfolio___grid-box'>
                {Object.keys(resumeData.portfolios).map(key=><Grid item xs={4} >
                <PortfoliosComponent 
                    imageUrl={resumeData.portfolios[key].imgUrl}
                    title={resumeData.portfolios[key].title}
                    link={resumeData.portfolios[key].link}
                    text={resumeData.portfolios[key].text}
                /></Grid>)}
            </Grid>
        </Grid>
    )
}


export default Portfolio;