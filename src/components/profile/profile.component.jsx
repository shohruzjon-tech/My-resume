import React from 'react'
import { Typography } from '@material-ui/core'
import TimelineComponent, {CustomTimelineSeperator} from '../timeline/timline.component';
import reseumeData from '../utils/resume-data.component';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../button/button.component';
import GetAppIcon from '@material-ui/icons/GetApp';
import './profile.styles.scss';


const CustomTimelineItem=({title, text, link})=>(
    <TimelineItem  className="profile__timeline-item" style={{minHeight:0}}>
            <CustomTimelineSeperator/>
             <TimelineContent className="timeline__content">
                    {link ? (
                      <Typography className="timelineItem__text" style={{fontSize:12}}>
                             <span>{title}:</span>
                             <a href={link} target='_blank'>  {text}</a>
                      </Typography>

                   ) : (
                      <Typography className="timelineItem__text" style={{fontSize:12}}>
                             <span>{title}:</span>  {text}
                      </Typography>
                   )}
             </TimelineContent>
    </TimelineItem>  
)


const  Profile=()=>{




    return (
        <div className="profile container__shadow">
            <div className="profile__name">
                  <Typography className='name'>
                     {reseumeData.name}
                  </Typography >
                  <Typography className='title'>
                    {reseumeData.title}
                  </Typography >
            </div>
            <div className="profile__image">
               <img  src="https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fadmin%2Fimg-pure.JPG?alt=media&token=7f93d3b1-65a4-42b3-bb6b-85e8c5cf2ff3" />
            </div>
            <div className="profile__inforrmation">
               <TimelineComponent icon={<PersonOutlineIcon/>}>
                  <CustomTimelineItem title="Email" text={reseumeData.email}/>
              
                 {Object.keys(reseumeData.socials).map((key)=>(
                    <CustomTimelineItem title={key} text={reseumeData.socials[key].text} link={reseumeData.socials[key].link}/>
                 ))}
               </TimelineComponent>
            </div>
            <CustomButton classname="button__component" name={'Download CV'} icon={<GetAppIcon style={{fontSize:14}}  />}   link={'https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/privacy%2Fresume%20(2).pdf?alt=media&token=3a1d7ca3-685b-49a2-bc7c-bc407262de21'}/>
        </div>
    )
}


export default Profile