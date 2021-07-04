import React from 'react'
import {Nav, Navbar, NavDropdown, HomeRounded} from 'react-bootstrap';
import {Link, NavLink, withRouter} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import resumeData from '../utils/resume-data.component';
import CustomButton from '../button/button.component';
import TelegramIcon from '@material-ui/icons/Telegram';

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.styles.scss';


const Header=(props)=>{

const pathName=props?.location?.pathname;

const styles={
   active:{
      color:'var(--main-color)',
      fontWeight:'bold',
      fontSize:14
   },
   deactivated:{
      color:'darkslategrey',
      fontWeight:'bold',
      fontSize:14
   }
}


return (
<Navbar  sticky='top' expand="lg" bg="white"  className="header">
   <Nav.Link as={NavLink} to='/' style={{padding:0}}>
      <Navbar.Brand className="header__home">
         <HomeIcon/>
      </Navbar.Brand>
   </Nav.Link>
  <Navbar.Toggle/>
  <Navbar.Collapse>
     <Nav>


          {/* Resume link */}
         <Nav.Link as={NavLink} to='/resume'   style={pathName ==="/resume" ? styles.active : styles.deactivated}  className="header__hover">RESUME</Nav.Link>


           {/* Portfolio link */}
          <Nav.Link as={NavLink} to='/portfolio'   style={pathName ==="/portfolio" ? styles.active : styles.deactivated}  className="header__hover">PORTFOLIO</Nav.Link>

          {/* Contact page link */}
          <Nav.Link as={NavLink} to='/contact'   style={pathName ==="/contact" ? styles.active : styles.deactivated}  className="header__hover">CONTACT</Nav.Link>
     </Nav>
  </Navbar.Collapse>




  <div className="header__right">
        <div className="header__right-menu">
           {Object.keys(resumeData.headerSocials).map(key=><a key={key} href={resumeData.headerSocials[key].link} target='_blank'>{resumeData.headerSocials[key].icon}</a>)}
        </div>
         <div className="header__right__button">
            <CustomButton name="Hire me" icon={<TelegramIcon style={{color:'#0088CC'}}/>} link='https://t.me/shohruzjon_abdivakilov' classname="button"/>
         </div>
  </div>
</Navbar>
)
}


export default  withRouter(Header);