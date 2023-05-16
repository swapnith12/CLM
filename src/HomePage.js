import React from 'react'
import App from './App'
import { alpha, makeStyles } from '@material-ui/core/styles';
import SimpleCard from './Card/SimpleCard'
import { Typography } from '@material-ui/core';
import TaskList from './TaskList';




const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginLeft:"15px"
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selfContained: {
    position: "fixed",
    zIndex: 1
  },
}))

function HomePage() {
  const classes = useStyles()

  {/*const dispatch = useDispatch()
  const Data = useSelector((state) => state)
  const formKey = useSelector((state) => state.start.FromKey);
  console.log("formKey bro", formKey);
  
*/}



  return (
    <div className={classes.container} >
      
      <div className={classes.content}>
        <Typography variant='h5' gutterBottom={true} style={{ marginTop: "10px" }}>Hello Jasmine! Welcome</Typography>
        <div className={classes.cards}>
          <SimpleCard bgcolor={"#ff1744"} heading={"Active Contacts"} number={"250+"} />
          <SimpleCard bgcolor={"#d500f9"} heading={"Expiring Contacts"} number={"72"} />
          <SimpleCard heading={""} />
        </div>
        <br />
        <TaskList/>
      </div>
    </div>
  )
}

export default HomePage
