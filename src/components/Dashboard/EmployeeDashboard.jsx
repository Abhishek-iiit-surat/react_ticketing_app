import React, { useState } from 'react';
import Header from '../common/Header';
import TaskItems from '../common/TaskItems';
import TaskList from '../Tasklist/TaskList';
import Popup from '../PopupComp/Popup'; // Assuming Popup component exists

function EmployeeDashboard({ data }) {
    const [taskFilter, setTaskFilter] = useState("alltask");
    const [selectedTask, setSelectedTask] = useState(null);
    const [taskPopupflag, setTaskPopupflag] = useState(false);
    const [popupSubComp,setPopupSubComp]=useState("description")

    if (taskPopupflag) {
        console.log("The selected task is", selectedTask);
        console.log("Pop initiated");
    }

    return taskPopupflag ? (
        <div className='p-10 bg-[#1c1c1c] h-screen w-screen'>
            <Header data={data} />
            <TaskItems data={data} setTaskFilter={setTaskFilter} />
            <TaskList
                data={data}
                taskFilter={taskFilter}
                setSelectedTask={setSelectedTask}
                setTaskPopupflag={setTaskPopupflag}
            />
            <Popup 
                taskPopupflag={taskPopupflag}
                setTaskPopupflag={setTaskPopupflag} 
                selectedTask={selectedTask} 
                setSelectedTask={setSelectedTask}
                popupSubComp={popupSubComp}
                setPopupSubComp={setPopupSubComp}
                
                />
            {/* <h1>{data.name}</h1> */}
        </div>


    ) : (
        <div className='p-10 bg-[#1c1c1c] h-screen w-screen'>
            {/* <h1>{data.name}</h1> */}
            <Header data={data} />
            <TaskItems data={data} setTaskFilter={setTaskFilter} />
            <TaskList
                data={data}
                taskFilter={taskFilter}
                setSelectedTask={setSelectedTask}
                setTaskPopupflag={setTaskPopupflag}
            />
        </div>
    );
}

export default EmployeeDashboard;
