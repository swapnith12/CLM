import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import IconButton from '@material-ui/core/IconButton';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Form from '../Form/StartForm'
import { GetForm, StartProcess } from '../redux/slice/start';
import Contract from '../Contract';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        alignSelf:"flex-start"
      },
}))



function CreateContract() {
    
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch();

    
    const renderForm=()=>{
        dispatch(GetForm())
        navigate("/startform")
    }
  return (
    <div>
      <Contract/>
      <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                className={classes.menuButton}
                onClick={renderForm}
              >
                <SupervisedUserCircleIcon style={{height:"30px",width:"20px"}} />&nbsp;<Typography variant="overline">Create New Contact</Typography>
       </IconButton>
       
    </div>
  )
}

export default CreateContract
