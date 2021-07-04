import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './progress.styles.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      padding:20,
    },
  },
}));





export default function ProgressComponent({title,  objects}) {

   const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper elevation={3}>
        <h2 className="progress__title">{title}</h2>
                {Object.keys(objects).map(key=> <div className="progress__items">
                   <TimelineDot  className="progress__dot" variant='outlined' style={{borderColor:"var(--main-color)"}}/>
                   <h2 className="progress__sub-title">{objects[key].title}</h2>
                </div>)}
        </Paper>
    </div>
  );
}
