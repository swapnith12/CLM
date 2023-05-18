import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { CompleteTask, StartProcess } from '../redux/slice/start';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginRight: theme.spacing(20),

  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyItems:"space-around"
  }
}));

export default function InputAdornments({ taskId,ChangeCount }) {
  const dispatch = useDispatch()
  const clientName = useSelector((state)=>state.start.clientName.payload)
  console.log(clientName)
  const vendorName = useSelector((state)=>state.start.vendorName.payload)
  const creation = useSelector((state)=>state.start.createDate.payload)
  const ending = useSelector((state)=>state.start.endingDate.payload)
  const amount = useSelector((state)=>state.start.amount.payload)
  const classes = useStyles();
  const [values, setValues] = React.useState({
    Client: clientName,
    Vendor: vendorName,
  });

  {/*
  const [value, setValue] = React.useState('MSA');
  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };
  

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};
*/}

const getBody=(values)=> {
  let variables = {}
  Object.keys(values).forEach((item) => {
    variables[item] = {'value': values[item]}
  });
  return {
    'variables': variables,
    'businessKey':'CLM'
  }
}




const HandleSubmit = (e,taskId)=>{
  e.preventDefault()
  //dispatch(StartProcess(values))
  console.log(taskId)
  const valuess = getBody(values)
  dispatch(CompleteTask(taskId,valuess))
  ChangeCount()
}



  const Form = ()=>{
    
    return (
      <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.content}>
          <form onSubmit={(e) => HandleSubmit(e, taskId)}>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">

          <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={clientName}
          variant="outlined"
        />
            <br/>
            <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={vendorName}
          variant="outlined"
        /><br/>
         <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={creation}
          variant="outlined"
        /><br/>
         <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={ending}
          variant="outlined"
        /><br/>
         <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={amount}
          variant="outlined"
        />

            <FormHelperText id="outlined-weight-helper-text">Vendor Review</FormHelperText>

            <button type='submit'>Approove</button>
          </FormControl>
          </form>
          {/*<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          </FormControl>*/}
          {/*<FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={60}
            />
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Contract Type</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
              <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
              <FormControlLabel value="MSA" control={<Radio />} label="MSA" />
              <FormControlLabel value="Loan" control={<Radio />} label="Loan" />
              <FormControlLabel value="Shell" disabled control={<Radio />} label="(Shell option)" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.content}>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="Contract Id"
              value=""
              onChange={handleChange('weight')}
              defaultValue="C-333"
              endAdornment={<InputAdornment position="end">Contract Id</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Contract Id',
              }}
              labelWidth={0}
            />
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <TextField
              id="datetime-local"
              label="Initiate Date"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <FormLabel component="legend">Status Type</FormLabel>
            <RadioGroup aria-label="status" name="status" value={value} onChange={handleChangeRadio}>
              <FormControlLabel value="New" control={<Radio />} label="New" />
              <FormControlLabel value="Existing" control={<Radio />} label="Existing" />
            </RadioGroup>
          </FormControl> */}
        </div>
      </div>
    </div>
    )
  }


  return (
    Form()
  );
}
