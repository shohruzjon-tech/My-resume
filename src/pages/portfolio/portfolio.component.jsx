import React from 'react'
import { Grid } from '@material-ui/core';
import PortfoliosComponent from '../../components/portfolios/portfolios.component';
import resumeData from '../../components/utils/resume-data.component';




const Portfolio=()=> {




    return (
        <Grid container>
            <Grid container spacing={3}>
                {Object.keys(resumeData.portfolios).map(key=><Grid item xs={4} >
                <PortfoliosComponent 
                    imgUrl={resumeData.portfolios[key].imgUrl}
                    title={resumeData.portfolios[key].title}
                    link={resumeData.portfolios[key].link}
                /></Grid>)}
            </Grid>
        </Grid>
    )
}


export default Portfolio;