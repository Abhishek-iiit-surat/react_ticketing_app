import React from 'react'

function CompleteTask({ tasks, color, getRandomColor, setSelectedTask, setTaskPopupflag }) {
    const clickhandler = (task) => {
        setTaskPopupflag(true);
        setSelectedTask(task); 
    };

    return (
        tasks.filter(task => task.completed).length > 0 ? (
            tasks.filter(task => task.completed).map((task, index) => ( 
                <div key={index} 
                     className={`flex-shrink-0 h-full w-[300px] ${getRandomColor(color)} rounded-xl cursor-pointer`} 
                     onClick={() => clickhandler(task)}> 
                     
                    <div className='flex justify-between gap-[50%] items-center px-8 py-2'>
                        <h3 className='bg-red-600 text-small px-3 py-1 rounded'>{task.priority}</h3>
                        <h4 className='text-base'>{task.date}</h4>
                    </div>
                    <h2 className='mt-5 text-2xl font-semibold px-10'>{task.title}</h2>
                    <p className='mt-2 px-10 text-sm'>{task.description}</p>
                </div>
            ))
        ) : (
            <div className="text-center text-gray-400 text-lg mt-5">Oops, no tasks completed yet!</div>
        )
    );
}

export default CompleteTask;
