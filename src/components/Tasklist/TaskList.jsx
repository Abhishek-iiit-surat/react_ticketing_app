import React from 'react'
import ActiveTask from './ActiveTask';
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import AllTask from './AllTask'

function TaskList({ data, taskFilter,setSelectedTask,setTaskPopupflag }) {
    var tasks = data.tasks
    const colors = [
        'bg-red-400',
        'bg-green-400',
        'bg-yellow-400',
        'bg-blue-400',
        'bg-purple-400',
        'bg-sky-400',
        'bg-indigo-400',
        'bg-violet-400',
        'bg-fuchsia-400',
        'bg-emerald-400',
        'bg-yellow-400',
        'bg-blue-400',
        'bg-red-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-purple-500',
        'bg-gray-500',
        'bg-slate-500',
        'bg-stone-500',
        'bg-pink-500',
        'bg-rose-500',
        'bg-orange-500',
        'bg-amber-500',
        'bg-yellow-500',
        'bg-lime-500',
        'bg-teal-500',
        'bg-cyan-500',
        'bg-sky-500',
        'bg-indigo-500',
        'bg-violet-500',
        'bg-fuchsia-500',
        'bg-emerald-500',
        'bg-zinc-500',
        'bg-neutral-500'

    ];
    const getRandomColor = (colors) => {
        return colors[Math.floor(Math.random() * colors.length)];
    };
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleCard = () => setIsOpen(!isOpen);
    return (
        <div id='tasklist' className='mt-10 h-[55%] overflow-x-auto flex items-center justify-flex-start gap-5'>
            {taskFilter === "alltask" && (
                <AllTask tasks={tasks} colors={colors} getRandomColor={getRandomColor} setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></AllTask>
            )}
            {taskFilter === "activetask" && <ActiveTask tasks={tasks} color={colors} getRandomColor={getRandomColor} setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></ActiveTask>}
            {taskFilter === "newtask" && <NewTask tasks={tasks} color={colors} getRandomColor={getRandomColor} setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></NewTask>}
            {taskFilter === "completedtask" && <CompleteTask tasks={tasks} color={colors} getRandomColor={getRandomColor} setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></CompleteTask>}
            {taskFilter === "failedtask" && <FailedTask tasks={tasks} color={colors} getRandomColor={getRandomColor} setSelectedTask={setSelectedTask} setTaskPopupflag={setTaskPopupflag}></FailedTask>}
        </div>
    )
}

export default TaskList
