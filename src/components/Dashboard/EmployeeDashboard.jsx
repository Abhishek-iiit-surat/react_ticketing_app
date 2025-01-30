import React from 'react'
import Header from '../common/Header'
import TaskItems from '../common/TaskItems'
import TaskList from '../Tasklist/TaskList'
import { useState } from 'react'
function EmployeeDashboard({data}) {
    console.log("Hi");
    console.log(data);
   const [taskFilter, setTaskFilter] = useState("alltask");
   const [selectedTask, setSelectedTask] = useState(null);
   const [taskPopupflag,setTaskPopupflag]=useState(false);
   console.log("the selectedtask is",selectedTask)
    return (
        <div className='p-10 bg-[#1c1c1c]  h-screen w-screen'>
            {/* <h1>{data.name}</h1> */}
            <Header data={data}></Header>
            <TaskItems data={data} setTaskFilter={setTaskFilter}></TaskItems>
            <TaskList data={data} taskFilter={taskFilter}  setSelectedTask={setSelectedTask}></TaskList>
        </div>
    )
}

export default EmployeeDashboard