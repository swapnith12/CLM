import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from './images/logoTruviq.png'
import SettingsIcon from '@material-ui/icons/Settings';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard'; 
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import DescriptionIcon from '@material-ui/icons/Description';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Report } from '@material-ui/icons';
import HelpIcon from '@material-ui/icons/Help';

import { useNavigate  } from "react-router-dom";
import { useSelector } from 'react-redux';

const DrawerWidth = "245px"

const useStyles = makeStyles((theme) => ({
  backgroundColor:{
    backgroundColor:"#1a237e",
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center',
    width:`calc(100% - ${DrawerWidth}px)`,
  },
  
  button: {
    marginLeft: theme.spacing(1), 
    color:"white",
  },
  grow: {
    height: "100vh",
    maxWidth:'175px',
    display: "flex",
    flexDirection: "row",
    alignContent:"center",
    justifyContent: "center",
  },
  grow1: {
    height: "100vh",
    maxWidth:'175px',
    display: "flex",
    flexDirection: "row",
    alignContent:"center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },

  menuButton: {
    marginRight: theme.spacing(2),
    alignSelf:"flex-start"
  },
  title: {
    marginRight: theme.spacing(4),
    display: 'block',
    textAlign:'center',
    marginBottom:"10px",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(3),
      display: 'flex',
      flexDirection:'column',
      alignContent:'center',
      justifyContent:'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const App=(props)=> {
  const {Logout} = props
  const user = useSelector((state)=>state.start.loggedUser)
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const onClickContracts = ()=>{
    navigate("/create")
  }
  const onClickDashBoard = ()=>{
    navigate("/")
  }
  const onClickTasks = ()=>{
    navigate("/review")
  }

  const handleLogout = ()=>{
    Logout()
    navigate("/")
  }

  const HandleLogIN = ()=>{
    navigate("/Login")
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.menuButton}
              >
              <SettingsIcon style={{height:"30px",width:"20px",}} />&nbsp;<Typography variant="overline">Settings</Typography>
              </IconButton>
      </MenuItem>
      <MenuItem>
      <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.menuButton}
              >
                <AccountCircle style={{height:"30px",width:"20px"}} />&nbsp;<Typography variant="overline">Profile</Typography>
              </IconButton>
              
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                
                color="inherit"
                className={classes.menuButton}
              >
                <ExitToAppIcon style={{height:"30px",width:"20px"}} />&nbsp;<Typography variant="overline">Log Out</Typography>
              </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    {user==="Admin" || user===""?
    <div  className={classes.grow1} >
      <AppBar position="sticky" className={classes.backgroundColor}>
        <Toolbar className={classes.backgroundColor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src={Logo} height={75} width={70} alt="Truviq" />
          </IconButton>
          <div style={{display:"flex",flexDirection:"column",alignContent:"flex-start"}}>
          <IconButton
               edge="start"
               className={classes.menuButton}
               onClick={onClickDashBoard}
               color="inherit"
               aria-label="open drawer"
              >
              <DashboardIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">DashBoard</Typography>
          </IconButton>
          <IconButton
               edge="start"
               className={classes.menuButton}
               onClick={onClickContracts}
               color="inherit"
               aria-label="open drawer"
              >
              <RecentActorsIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">Contracts</Typography>
          </IconButton>
          
          <IconButton
               edge="start"
               className={classes.menuButton}
               color="inherit"
               aria-label="open drawer"
              >
              <Report style={{height:"30px",width:"20px",}} /><Typography variant="overline">Report</Typography>
          </IconButton>
          <IconButton
               edge="start"
               className={classes.menuButton}
               color="inherit"
               aria-label="open drawer"
              >
              <HelpIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">Help</Typography>
          </IconButton>
          </div>
          <div className={classes.grow}/>
          <div className={classes.sectionDesktop} >
              <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.menuButton}
              >
              <SettingsIcon style={{height:"30px",width:"20px",}} />&nbsp;<Typography variant="overline">Settings</Typography>
              </IconButton>
              </div>
              <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.menuButton}
              >
                <AccountCircle style={{height:"30px",width:"20px"}} />&nbsp;<Typography variant="overline">Profile</Typography>
              </IconButton>
              </div>
              <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={HandleLogIN}
                color="inherit"
                className={classes.menuButton}
              >
                <ExitToAppIcon style={{height:"30px",width:"20px"}} />&nbsp;<Typography variant="overline">LogIn As @team</Typography>
              </IconButton>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"

            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    :<div  className={classes.grow1} >
    <AppBar position="sticky" className={classes.backgroundColor}>
      <Toolbar className={classes.backgroundColor}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <img src={Logo} height={75} width={70} alt="Truviq" />
        </IconButton>
        <div style={{display:"flex",flexDirection:"column",alignContent:"flex-start"}}>
        <IconButton
             edge="start"
             className={classes.menuButton}
             onClick={onClickDashBoard}
             color="inherit"
             aria-label="open drawer"
            >
            <DashboardIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">DashBoard</Typography>
        </IconButton>
       
        <IconButton
             edge="start"
             className={classes.menuButton}
             onClick={onClickTasks}
             color="inherit"
             aria-label="open drawer"
            >
            <AssessmentIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">Tasks</Typography>
        </IconButton>
        <IconButton
             edge="start"
             className={classes.menuButton}
             color="inherit"
             aria-label="open drawer"
            >
            <Report style={{height:"30px",width:"20px",}} /><Typography variant="overline">Report</Typography>
        </IconButton>
        <IconButton
             edge="start"
             className={classes.menuButton}
             color="inherit"
             aria-label="open drawer"
            >
            <HelpIcon style={{height:"30px",width:"20px",}} /><Typography variant="overline">Help</Typography>
        </IconButton>
        </div>
        <div className={classes.grow}/>
        <div className={classes.sectionDesktop} >
            <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.menuButton}
            >
            <SettingsIcon style={{height:"30px",width:"20px",}} />&nbsp;<Typography variant="overline">Settings</Typography>
            </IconButton>
            </div>
            <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.menuButton}
            >
              <AccountCircle style={{height:"30px",width:"20px"}} />&nbsp;<Typography variant="overline">Profile</Typography>
            </IconButton>
            </div>
            <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleLogout}
              color="inherit"
              className={classes.menuButton}
            >
              <ExitToAppIcon style={{height:"30px",width:"20px"}} />&nbsp;<Typography variant="overline">Log Out</Typography>
            </IconButton>
          </div>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"

          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}
  </div>}
    </>
  );
}


export default App