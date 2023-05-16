import React from 'react'
import App from './App'
import { alpha, makeStyles } from '@material-ui/core/styles';
import SimpleCard from './Card/SimpleCard'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import start, { StartProcess, GetForm } from './redux/slice/start'
import Form from './Form/StartForm.js'
import { Link } from 'react-router-dom';
import TaskList from './TaskList';




const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginLeft:"15px"
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selfContained: {
    position: "fixed",
    zIndex: 1
  },
}))

function HomePage() {
  const dispatch = useDispatch()
  const Data = useSelector((state) => state)
  const formKey = useSelector((state) => state.start.FromKey);
  console.log("formKey bro", formKey);
  const classes = useStyles()


 
  const render = () => {
    if (Data.start.data && Object.keys(Data.start.data).length > 0) {
      return (
        <div>
          {Object.entries(Data.start.data).map(([key, value]) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{JSON.stringify(value)}</span>
            </div>
          ))}
          <Link to="/startForm" variant="contained" onClick={() => dispatch((GetForm()))}>Click Here To Fill Form!</Link>
          
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={classes.container} >
      
      <div className={classes.content}>
        <Typography variant='h5' gutterBottom={true} style={{ marginTop: "10px" }}>Hello Jasmine! Welcome</Typography>
        <div className={classes.cards}>
          <SimpleCard bgcolor={"#ff1744"} heading={"Active Contacts"} number={"250+"} />
          <SimpleCard bgcolor={"#d500f9"} heading={"Expiring Contacts"} number={"72"} />
          <SimpleCard heading={""} />
        </div>
        <br />
        <Button variant='contained' onClick={() => dispatch(StartProcess())}>New Contract</Button>
        {render()}
        <TaskList/>
      </div>
    </div>
  )
}

export default HomePage
