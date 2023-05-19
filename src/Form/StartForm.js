import React, { useState } from 'react';
import Select from 'react-select';
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
import PublishIcon from '@material-ui/icons/Publish';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { StartProcess, setAmountAction, setClientNameAction, setCreateDateAction, setEndingDateAction, setSample, setVendorNameAction } from '../redux/slice/start';

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
    justifyItems: "space-around"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: 300,
  },
  formCols: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: '1px solid grey',
    borderRadius: "10px",
    height: "280px",
    width: "700px",
    paddingTop: "15px"
  },
  formrows: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: "center",
    height: "250px"
  },
  amount: {
    width: "300px"
  },
  menuButton: {
    color:"blue"
  },
}));

export default function InputAdornments() {
  const [selectedOption, setSelectedOption] = useState(null);
  const formKey = useSelector((state) => state.start.FromKey);
  const [submitted, setSubmitted] = useState(false)
  const classes = useStyles();
  const dispatch = useDispatch()
  const [values, setValues] = React.useState({
    Client: '',
    Vendor: '',
    creation: '',
    ending: '',
    Amount: '',
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
*/}

  const options = [
    { value: 'MSA', label: 'MSA' },
    { value: 'Employee', label: 'Employee' },
    { value: 'shell', label: 'shell' }
  ];
  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
  };

  const renderComponent = () => {
    switch (selectedOption?.value) {
      case 'MSA':
        return renderForm();
      case 'Employee':
        return renderForm();
      case 'shell':
        return renderForm();
      default:
        return null;
    }
  };



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if (prop === "Client") {
      dispatch(setClientNameAction({ payload: event.target.value }))
    } else if (prop === "Vendor") {
      dispatch(setVendorNameAction({ payload: event.target.value }))
    } else if (prop === "creation") { dispatch(setCreateDateAction({ payload: event.target.value })) }
    else if (prop === "ending") { dispatch(setEndingDateAction({ payload: event.target.value })) }
    else { dispatch(setAmountAction({ payload: event.target.value })) }
  };

  const getBody = (values) => {
    let variables = {}
    Object.keys(values).forEach((item) => {
      variables[item] = { 'value': values[item] }
    });
    return {
      'variables': variables,
      'businessKey': 'CLM'
    }
  }


  const HandleSubmit = (e) => {
    e.preventDefault()
    const valuess = getBody(values)
    dispatch(StartProcess(valuess))
    setSubmitted(true)
  }

  const Form = () => {
    return (
      <div className={classes.root}>
        <div className={classes.body}>
          <div className={classes.content}>
            <Typography variant='h6'>Please fill all Details to intiate request </Typography>
            <br />
            <form >
              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <div className={classes.formCols}>
                  <div>
                    <OutlinedInput
                      id="Client"
                      name='Client'
                      className={classes.amount}
                      value={values.Client}
                      onChange={handleChange('Client')}
                      endAdornment={<InputAdornment position="end">Client Name</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'Client Name',
                      }}
                      labelWidth={0}
                    />
                    <br />
                    <br />
                    <OutlinedInput
                      id="Vendor"
                      name='Vendor'
                      className={classes.amount}
                      value={values.Vendor}
                      onChange={handleChange('Vendor')}
                      endAdornment={<InputAdornment position="end">Vendor Name</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'Vendor Name',
                      }}
                      labelWidth={0}
                    />
                    <br />
                    <br />
                    <TextField
                      id="creation"
                      name="creation"
                      label="contract initiation time"
                      onChange={handleChange('creation')}
                      type="datetime-local"
                      defaultValue="2017-05-24T10:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }} />
                  </div>
                  <div>
                    <TextField
                      id="ending"
                      name="ending"
                      label="contract End time"
                      onChange={handleChange('ending')}
                      type="datetime-local"
                      defaultValue="2017-05-24T10:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }} />
                    <br />
                    <br />
                    <OutlinedInput
                      id="Amount"
                      name='Amount'
                      value={values.Amount}
                      onChange={handleChange('Amount')}
                      className={classes.amount}
                      endAdornment={<InputAdornment position="end"><AttachMoneyIcon /></InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'Amount',
                      }}
                      labelWidth={0}
                    />
                  </div>
                </div>
                <FormHelperText id="outlined-weight-helper-text">Contract Request</FormHelperText>
                <IconButton
                      edge="start"
                      className={classes.menuButton}
                      onClick={HandleSubmit}
                      color="inherit"
                      aria-label="open drawer"
                    >
                      <PublishIcon style={{ height: "30px", width: "20px", }} /><Typography variant="overline">Submit</Typography>
                    </IconButton>
              </FormControl>
            </form>

          </div>
        </div>
      </div>
    )
  }
  const renderForm = () => {
    if (formKey && formKey.key === "StartNewContract") {
      if (!submitted) {
        return Form();
      } else {
        return (<>
          <Typography variant="h4">{values.Client}-Thanks For Choosing Us!</Typography>
          <Typography variant="h6">We will process your request</Typography>
        </>)
      }
    } else {
      return <Typography variant='h4'>No Form To Load</Typography>;
    }
  };

  return (
    <>
      <Typography variant='h4'>Welcome! Create a new contract here!</Typography>
      <br />
      <Select
        options={options}
        value={selectedOption}
        onChange={handleOptionChange}
        placeholder="Select an option"
      />
      {renderComponent()}
    </>
  );
}
