import React from 'react'

function ActiveTask({ tasks, color, getRandomColor,setSelectedTask }) {

    // var tasks = data
    console.log("the task data coming to active  component is:", tasks)
    console.log("the color data coming to active component is:", color)
    console.log("the random function coming to active component is:", getRandomColor)


    return (
        tasks.filter(task => task.active).length > 0 ? tasks.map((task, index) => (
            <div className={`flex-shrink-0 h-full w-[300px] ${getRandomColor(color)} rounded-xl`} key={index} onClick={() => setSelectedTask(task.id)} >
                <div className='flex jsutify-between gap-[50%] items-center px-8 py-2'>
                    <h3 className='bg-red-600 text-small px-3 py-1 rounded'>{task.priority}</h3>
                    <h4 className='text-base'>{task.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold px-10'>{task.title}</h2>
                <p className='mt-2 px-10 text-sm'>{task.description}</p>
            </div>
        )):(
            <div className="h-[30%] w-[50%] flex item-center justify-center text-center text-white-500 text-5xl mt-5">
                <h1 >No active task.</h1>
            </div>
            
        )
    )
}

export default ActiveTask
