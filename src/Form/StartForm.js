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
import { StartProcess, setAmountAction, setAppNo, setClientNameAction, setCreateDateAction, setEndingDateAction, setSample, setVendorNameAction,setCountry,setCity,setRegistrationNumber,setAddress,FetchProcessVaribles } from '../redux/slice/start';


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
    width: "1050px",
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
    color: "blue"
  },
}));
let id
export default function InputAdornments() {
  const [selectedOption, setSelectedOption] = useState(null);
  const formKey = useSelector((state) => state.start.FromKey);
  const [submitted, setSubmitted] = useState(false)
  const instanceID=useSelector((state=>state.start.instanceID))
  const appRef = useSelector((state)=>state.start.appNo)
  const classes = useStyles();
  const dispatch = useDispatch()

  const [values, setValues] = React.useState({
    Client: '',
    Vendor: '',
    creation: '',
    ending: '',
    Amount: '',
    AppNo: '',
    Country:'',
    City:'',
    RegistrationNumber:'',
    Address:''

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
    else if (prop==="Country"){dispatch(setCountry({payload:event.target.value}))}
    else if (prop==="City"){dispatch(setCity({payload:event.target.value}))}
    else if (prop==="RegistrationNumber"){dispatch(setRegistrationNumber({payload:event.target.value}))}
    else if (prop==="Address"){dispatch(setAddress({payload:event.target.value}))}
    else { dispatch(setAmountAction({ payload: event.target.value })) }
  };

  const getBody = (values) => {
    if (values.Client.toLowerCase()==="truviq"){
      const id = "C-" + (Math.floor(Math.random() * 10000) + 1);
      setValues({ ...values, AppNo: id })
       dispatch(setAppNo(id))
    }
    else{
      const id = "V-" + (Math.floor(Math.random() * 10000) + 1);
      setValues({ ...values, AppNo: id })
       dispatch(setAppNo(id))
    }
    let variables = {}
    Object.keys(values).forEach((item) => {
      variables[item] = { 'value': values[item] }
    });
    return {
      'variables': variables,
      'businessKey': 'CLM'
    }
  }
  const sum=async ()=>{
    await dispatch(FetchProcessVaribles(instanceID))
   }
  
    const HandleSubmit = async (e) => {
      e.preventDefault()
      const valuess = getBody(values)
      await dispatch(StartProcess(valuess))
      sum()
     
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
                  <br/>
                  <br/>
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
                    <br />
                    <br />
                    <div class="ui form">
                      <div class="field">
                        <select  className="ui search dropdown" onChange={handleChange("Country")}>
                          <option value="">Select Country</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia, Plurinational State of</option>
                          <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">British Indian Ocean Territory</option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">Congo, the Democratic Republic of the</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands (Malvinas)</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">French Southern Territories</option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">Heard Island and McDonald Islands</option>
                          <option value="VA">Holy See (Vatican City State)</option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">Korea, Democratic People's Republic of</option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Lao People's Democratic Republic</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia, Federated States of</option>
                          <option value="MD">Moldova, Republic of</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestinian Territory, Occupied</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Réunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">Saint Vincent and the Grenadines</option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten (Dutch part)</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">South Georgia and the South Sandwich Islands</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania, United Republic of</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">United States Minor Outlying Islands</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">Venezuela, Bolivarian Republic of</option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.S.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    </div>
                    <div>
                    <OutlinedInput
                      id="City"
                      name='City'
                      value={values.City}
                      className={classes.amount}
                      onChange ={handleChange('City')}
                      endAdornment={<InputAdornment position="end">City</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'City',
                      }}
                      labelWidth={0}
                    />
                    <br />
                    <br />
                    <OutlinedInput
                      id="RegistrationNumber"
                      name='RegistrationNumber'
                      value={classes.RegistrationNumber}
                      className={classes.amount}
                      onChange ={handleChange('RegistrationNumber')}
                      endAdornment={<InputAdornment position="end">RegistrationNumber</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'Registration Number',
                      }}
                      labelWidth={0}
                    />
                    <br/>
                    <br/>
                    
                    <OutlinedInput
                      id="Address"
                      name="Address"
                      value={classes.Address}
                      className={classes.amount}
                      onChange={handleChange('Address')}
                      endAdornment={<InputAdornment position="end">Address</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'Address',
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
          <Typography variant='h4'>Application Id:{appRef}</Typography>
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
