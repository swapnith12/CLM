import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

import HomePage from './HomePage'
import App from './App'
import StartForm from './Form/StartForm'
import { alpha, makeStyles } from '@material-ui/core/styles';
import CreateContract from './CreateContract/CreateContract';

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
    <div className={classes.container}>
        <App className={classes.selfContained}/>
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact Component={HomePage}/>
                    <Route path="/startForm" exact Component={StartForm}/>
                    <Route path="/create" exact Component={CreateContract}/>
                </Routes>
            </Router>
      </div>
    </div>
  )
}

export default Root
