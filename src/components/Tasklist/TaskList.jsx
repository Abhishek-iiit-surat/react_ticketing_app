import React from 'react'
import ActiveTask from './ActiveTask';
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import AllTask from './AllTask'
import Testing from './Testing'

function TaskList({ data, taskFilter,setSelectedTask,setTaskPopupflag }) {
    var tasks = data.tasks
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleCard = () => setIsOpen(!isOpen);
    return (
        <div id='tasklist' className='mt-10 h-[55%] overflow-x-auto flex items-center justify-flex-start gap-5'>
            {taskFilter === "alltask" && (
                <AllTask tasks={tasks} setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></AllTask>
            )}
            {taskFilter === "activetask" && <ActiveTask tasks={tasks} setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></ActiveTask>}
            {taskFilter === "newtask" && <NewTask tasks={tasks}  setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></NewTask>}
            {taskFilter === "completedtask" && <CompleteTask tasks={tasks}  setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></CompleteTask>}
            {taskFilter === "failedtask" && <FailedTask tasks={tasks}  setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></FailedTask>}
            {taskFilter === "testingtask" && <Testing tasks={tasks}  setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></Testing>}
        </div>
    )
}

export default TaskList
