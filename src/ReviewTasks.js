import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProcessVaribles, FetchTasks } from './redux/slice/start';
import { Typography } from '@material-ui/core';
import TaskForm from './Form/TaskForm';

function ReviewTasks() {
  const dispatch = useDispatch();
  const id = useSelector((state)=>state.start.instanceID)
  const [count,setCount] = useState(0)
  const appNo = useSelector(state=>state.start.appNo.payload)
  const [finished,setFinished] = useState(false)
  useEffect(() => {
    dispatch(FetchTasks())
    .then(() => {
      console.log("Fetched tasks")
      return dispatch(FetchProcessVaribles(id));
    })
    .then(() => {
     console.log("Fetched Process Variables")
    })
    .catch((error) => {
      console.log("error"+error)
    });
  }, [count]);
  
  const ChangeCount = ()=>{
    if(count<2){
      setCount(count+1)
    }
    else{
      setFinished(true)
    }
  }
  const listOfTasks = useSelector((state) => state.start.TaskList);

  if (!listOfTasks || listOfTasks.length === 0) {
    return null; // Handle the case when the task list is empty or not yet loaded
  }

  const taskId = listOfTasks[0].id;

  return (
    <div>
      {finished || !listOfTasks || listOfTasks.length === 0?<Typography variant="h4">No Pending Tasks</Typography>:<div>
      <Typography variant="h4">{listOfTasks[0].name}</Typography><br />
      {/*<Typography variant="h6">Task Id: {taskId}</Typography>*/}
      <Typography variant="h6">Application Id:{appNo}</Typography><br />
      <TaskForm taskName={listOfTasks[0].name} taskId={taskId} ChangeCount={ChangeCount} /></div>}
    </div>
  );
}

export default ReviewTasks;
