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
import { useDispatch } from 'react-redux';
import { setLoggedUser } from './redux/slice/start';

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
    const dispatch = useDispatch()

    const login = (value)=>{
      dispatch(setLoggedUser(value))
    }

    const Logout = ()=>{
      dispatch(setLoggedUser(''))
    }

  return (
    <Router>
    <div className={classes.container}>
        <App className={classes.selfContained} Logout={Logout}/>
        <div>
                <Routes>
                    <Route path="/Login" exact element={<Login login={login} />} />
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
