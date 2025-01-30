import React from 'react'

function CompleteTask({ tasks, color, getRandomColor,setSelectedTask }) {
    return (
        tasks.filter(task => task.completed).length > 0 ? tasks.map((task, index) => (
            <div className={`flex-shrink-0 h-full w-[300px] ${getRandomColor(color)} rounded-xl`} key={index} onClick={() => setSelectedTask(task.id)} >
                <div className='flex jsutify-between gap-[50%] items-center px-8 py-2'>
                    <h3 className='bg-red-600 text-small px-3 py-1 rounded'>{task.priority}</h3>
                    <h4 className='text-base'>{task.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold px-10'>{task.title}</h2>
                <p className='mt-2 px-10 text-sm'>{task.description}</p>
            </div>
        )):(
            <div className="text-center text-white-500 text-lg mt-5">Oops no task completed yet</div>
        )
    )
}

export default CompleteTask
