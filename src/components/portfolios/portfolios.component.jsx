import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './portfolios.styles.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



const  PortfoliosComponent=({imageUrl, title, text, link})=> {




const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={imageUrl}
          title={title}
         />
         <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {text}
           </Typography>
          </CardContent>
         </CardActionArea>
         <CardActions>
       <a href={link}  target='_blank'> 
          <Button size="small" color="primary" >
          Learn More
         </Button>
        </a>
      </CardActions>
    </Card>
  );
}


export default PortfoliosComponent;