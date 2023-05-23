import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
import Login from './Login/Login'
import HomePage from './HomePage'
import App from './App'
import StartForm from './Form/StartForm'
import { alpha, makeStyles } from '@material-ui/core/styles';
import CreateContract from './CreateContract/CreateContract';
import ReviewTasks from './ReviewTasks';

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        flexDirection:'row',
    },
    selfContained: {
        position: "fixed",
      },
}))

function Root() {
    const classes = useStyles()
  return (
    <Router>
    <div className={classes.container}>
        <App className={classes.selfContained}/>
        <div>
                <Routes>
                    <Route path="/Login" exact Component={Login}/>
                    <Route path='/' exact Component={HomePage}/>
                    <Route path="/startForm" exact Component={StartForm}/>
                    <Route path="/create" exact Component={CreateContract}/>
                    <Route path="/review" exact Component={ReviewTasks}/>
                </Routes>
      </div>
    </div>
    </Router>
  )
}

export default Root
