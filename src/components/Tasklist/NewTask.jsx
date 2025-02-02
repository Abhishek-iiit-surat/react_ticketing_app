import React from 'react'

function NewTask({ tasks, color, getRandomColor,setSelectedTask,setTaskPopupflag }) {
    const clickhandler = (task) => {
        setTaskPopupflag(true);
        setSelectedTask(task); 
    };
    return (
        tasks.filter(task => task.newTask).length > 0 ? tasks.map((task, index) => (
            <div className={`flex-shrink-0 h-full w-[300px] ${getRandomColor(color)} rounded-xl`} key={index} onClick={() => clickhandler(task)} >
                <div className='flex jsutify-between gap-[50%] items-center px-8 py-2'>
                    <h3 className='bg-red-600 text-small px-3 py-1 rounded'>{task.priority}</h3>
                    <h4 className='text-base'>{task.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold px-10'>{task.title}</h2>
                <p className='mt-2 px-10 text-sm'>{task.description}</p>
            </div>
        )):(
            <div className="text-center text-white-500 text-lg mt-5">No new task has been assigned.</div>
        )
    )
}

export default NewTask
