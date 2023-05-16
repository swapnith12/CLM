import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
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

export default function InputAdornments() {
  const formKey = useSelector((state) => state.start.FromKey);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [value, setValue] = React.useState('MSA');
  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Form = ()=>{
    return (
      <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.content}>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">

            <OutlinedInput
              id="Client Name"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">Client Name</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Client Name',
              }}
              labelWidth={0}
            />
            <br/>
            <OutlinedInput
              id="Vendor Name"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">Vendor Name</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Vendor Name',
              }}
              labelWidth={0}
            />

            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
          </FormControl>
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
          <FormControl fullWidth className={classes.margin} variant="outlined">
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
          </FormControl>
        </div>
      </div>
    </div>
    )
  }
  const renderForm = () => {
    if (formKey && formKey.key === "StartNewContract") {
      return Form();
    } else {
      return <Typography>No Form To Load</Typography>;
    }
  };

  return (
    renderForm()
  );
}
