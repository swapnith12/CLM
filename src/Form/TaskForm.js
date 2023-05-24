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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,Paper } from '@material-ui/core';

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
    maxHeight:'350px',
    maxWidth:'1000px',
    
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-around"
  },
  fields:{
    maxWidth:500,
    marginBottom:"15px"
  },
  inputs:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'Wrap'
  }

}));

export default function InputAdornments({ taskId, ChangeCount }) {
  const dispatch = useDispatch()
  const clientName = useSelector((state) => state.start.clientName.payload)
  console.log(clientName)
  const processVariables = useSelector((state) => state.start.ProcessVaribles)
  console.log(processVariables)
  const inputs = Object.entries(processVariables)
  const id = useSelector((state)=>state.start.instanceID)
  const vendorName = useSelector((state) => state.start.vendorName.payload)
  const creation = useSelector((state) => state.start.createDate.payload)
  const ending = useSelector((state) => state.start.endingDate.payload)
  const amount = useSelector((state) => state.start.amount.payload)
  const classes = useStyles();
  const [values, setValues] = React.useState({
    Client: clientName,
    Vendor: vendorName,
    CommentsVM: ''
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




  const HandleSubmit = (e, taskId) => {
    e.preventDefault()
    //dispatch(StartProcess(values))
    console.log(taskId)
    const valuess = getBody(values)
    dispatch(CompleteTask(taskId, valuess))
    ChangeCount()
  }



  const Form = () => {

    return (
      <div className={classes.root}>
        <div className={classes.body}>
          <div className={classes.content}>
            <form onSubmit={(e) => HandleSubmit(e, taskId)}>
              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <div className={classes.inputs}>
                  {inputs.map(([key,value])=>(
                    <div>
                    <TextField
                    disabled
                    id="outlined-disabled"
                    className={classes.fields}
                    label={key}
                    defaultValue={value.value}
                    variant="outlined"
                    />
                    <br/>
                  </div>
                  ))}
                </div>

                {/*<TextField
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
        /> */}

                <FormHelperText id="outlined-weight-helper-text">Vendor Review</FormHelperText>

                <button type='submit'>Approve</button>
              </FormControl>
            </form>

          </div>
        </div>
      </div>
    )
  }


  return (
    Form()
  );
}
