import React from 'react';

function AllTask({ tasks, colors, getRandomColor,setSelectedTask,setTaskPopupflag}) {
    const clickhandler = (task) => {
        setTaskPopupflag(true);
        setSelectedTask(task); 
    };
    return (
        <>
            {tasks.map((task, index) => (
                <div className={`flex-shrink-0 h-full w-[300px] ${getRandomColor(colors)} rounded-xl`} key={index} onClick={()=>clickhandler(task)}>
                    <div className='flex justify-between gap-[50%] items-center px-8 py-2'>
                        <h3 className='bg-red-600 text-small px-3 py-1 rounded'>{task.priority}</h3>
                        <h4 className='text-base'>{task.date}</h4>
                    </div>
                    <h2 className='mt-5 text-2xl font-semibold px-10'>{task.title}</h2>
                    <p className='mt-2 px-10 text-sm'>{task.description}</p>
                </div>
            ))}
        </>
    );
}

export default AllTask;
