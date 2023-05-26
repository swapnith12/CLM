import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';
import { Typography } from '@material-ui/core';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import creds from '../LOGIN.json'
import { useNavigate  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    color:"#b71c1c"
  },
}))


const usersname = creds.map(item=>item.user)
const password = creds.map(item=>item.password)

function Login(props) {
  const {login} = props
  const classes = useStyles()
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    userName:'',
    passWord:''
  });
  const [worngCreds , setWrongCreds] = useState(false)
  const HandleSubmit = (e)=>{
    e.preventDefault()
    if(usersname.includes(values.userName) && password.includes(values.passWord)){
    login(values.userName)
    navigate("/")
    }
    else{
      setWrongCreds(true)
    }
} 
  const handleChange = (prop) => (event) =>{
    setValues({ ...values, [prop]: event.target.value });
  }
  return (
    <MDBContainer fluid >

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          The company itself is a very successful company. It will come to pass, therefore, that the hatred of the accusers, loosed, and corrupted for some time, but by greed, who is greater than the freer of the truth? Is it easy to say something really?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='User name' id='form1' type='text' onChange={handleChange("userName")}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='password' id='form1' type='password' onChange={handleChange("passWord")}/>
                </MDBCol>
              </MDBRow>
              {worngCreds?<p className={classes.root}>Wrong Credentials</p>:''}
              <IconButton
                  edge="start"
                  
                  onClick={HandleSubmit}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <PublishIcon style={{ height: "30px", width: "20px", }} /><Typography variant="overline">log In</Typography>
                </IconButton>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;