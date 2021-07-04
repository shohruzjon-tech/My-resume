import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core'
import WorkIcon from '@material-ui/icons/Work';


import './timline.styles.scss';

export default function TimelineComponent({title, icon, children}) {




    return (
 <Timeline className={'timeline'}>


      <TimelineItem  className="timeline__first-item">
        <TimelineSeparator>
          <TimelineDot  className="timeline__dot-header">
           {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="timline__header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

         {children}
</Timeline>
    )
}


export const CustomTimelineSeperator=()=>(
        <TimelineSeparator className={'seperator__padding'}>
          <TimelineDot  className="timeline__dot" variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
)