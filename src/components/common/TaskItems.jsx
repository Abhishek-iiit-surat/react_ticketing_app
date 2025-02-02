import React from 'react'

function TaskItems({data,setTaskFilter}) {
    return (
        <div id='taskItems' className='flex mt-10 justify-between gap-5 overflow-x-auto'>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400' onClick={() => setTaskFilter("newtask")} >
                <h3 className='text-xl'>New task</h3>
                <h2 >{data.taskCount.newtask}</h2>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400' onClick={() => setTaskFilter("completedtask")} >
                <h3 className='text-xl'>Completed task</h3>
                <h2>{data.taskCount.completed}</h2>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400' onClick={() => setTaskFilter("failedtask")} >
                <h3 className='text-xl'>Failed task</h3>
                <h2>{data.taskCount.failed}</h2>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#914ed9]'onClick={() => setTaskFilter("activetask")} >
                <h3 className='text-xl'>Active task</h3>
                <h2>{data.taskCount.active}</h2>
            </div>
        </div>
    )
}

export default TaskItems
