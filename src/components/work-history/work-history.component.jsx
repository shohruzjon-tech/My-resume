import React from 'react'
import { Typography } from '@material-ui/core'
import TimelineComponent, {CustomTimelineSeperator} from '../timeline/timline.component';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../button/button.component';
import GetAppIcon from '@material-ui/icons/GetApp';


import './work-history.styles.scss';




export default function Experience({icon, objects, tagName}) {



const CustomTimelineItem=({title, text, info})=>(
    <TimelineItem  className="profile__timeline-item" style={{minHeight:0}}>
            <CustomTimelineSeperator/>
             <TimelineContent className="timeline__content">
                      <Typography className="timelineItem__text" >
                             <h3 style={{fontSize:15, color:'#000'}}>{title}</h3> 
                             <h6 style={{fontSize:13}}>{text}</h6>  
                             <p>{info}</p>
                      </Typography>
             </TimelineContent>
    </TimelineItem>  
)


const styles={
    header:{
        background:'#fff'
    }
}


    return (
      <div className="profile__inforrmation" style={styles.header}  >
               <TimelineComponent icon={icon} title={tagName}>
                  {Object.keys(objects).map((key)=>(
                    <CustomTimelineItem key={key} title={objects[key].title} info={objects[key].description}   text={objects[key].duriation}  />
                  ))}
               </TimelineComponent>
      </div>
    )
}
