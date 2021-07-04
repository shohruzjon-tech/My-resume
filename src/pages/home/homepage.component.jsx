import { Container, Grid } from '@material-ui/core';
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Profile from '../../components/profile/profile.component';
import Resume from '../resume/resume.component';
import Portfolio from '../portfolio/portfolio.component';
import AboutMe from '../../components/aboutme/about-me.component';
import ContactPage from '../contact/contact.component';


import './home.styles.scss';

const  HomePage=()=> {



    return (
        <Container >
              <Grid container  style={{gridGap:30}}>
                    <Grid item xs={12} sm={12} lg={3}  md={4}>
                       <Profile />
                    </Grid>
                     <Grid item xs bg='white'>
                    <Router>
                       <Header/>
                              <div className="home__content container__shadow">
                                 <Switch>
                                     <Route exact path='/'> 
                                      <AboutMe/>
                                     </Route>
                                     <Route exact path='/resume'> 
                                      <Resume/>
                                    </Route>
                                     <Route exact path='/contact'> 
                                       <ContactPage/>
                                    </Route>
                                    <Route exact path='/portfolio' component={Portfolio}/>
                                 </Switch>
                              </div>
                     </Router>
                       <Footer/>
                    </Grid>
              </Grid>
        </Container>
    )
}


export default  HomePage;