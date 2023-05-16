import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MouseIcon from '@material-ui/icons/Mouse';

const useStyles = makeStyles((theme)=>({
  root: {
    marginLeft:"20px",
    marginTop:"20px",
    maxWidth: 275,
    maxHeight:200,
    
  },
  menuButton: {
    color:"white"
  },
  AddButton: {
    color:"blue"
  },
  button:{
    display:"flex",
    justifyContent:"flex-end",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    
    fontSize: 20,
    color:"white",
  },
  pos: {
    
    marginBottom: 12,
    textAlign:"center",
    color:"white",
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{backgroundColor:props.bgcolor}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom="true">
          {props.heading}
        </Typography>
        <Typography variant="h5" className={classes.pos} color="textSecondary">
          {props.number}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
      {props.heading===""?<IconButton
               edge="start"
               className={classes.AddButton}
               color="inherit"
               aria-label="open drawer"
              >
              <ControlPointIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">Add Your Card</Typography>
          </IconButton>
          :
          <IconButton
               edge="start"
               className={classes.menuButton}
               color="inherit"
               aria-label="open drawer"
              >
              <MouseIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">View Here</Typography>
          </IconButton>}
      
      </CardActions>
    </Card>
  );
}
