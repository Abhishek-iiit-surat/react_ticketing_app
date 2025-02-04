import React from 'react'

function TaskItems({data,setTaskFilter}) {
    return (
        <div id='taskItems' className='flex mt-10 justify-between gap-5 overflow-x-auto'>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-indigo-400 shadow-md border-indigo-300 font-semibold' onClick={() => setTaskFilter("newtask")} >
                <h3 className='text-xl'>New tasks</h3>
                <h2 >{data.taskCount.newtask}</h2>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400 font-semibold shadow-md border-indigo-300 font-semibold' onClick={() => setTaskFilter("completedtask")} >
                <h3 className='text-xl'>Resolved tasks</h3>
                <h2>{data.taskCount.completed}</h2>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-emerald-400 font-semibold shadow-md border-indigo-300 font-semibold' onClick={() => setTaskFilter("failedtask")} >
                <h3 className='text-xl'>Failed tasks</h3>
                <h2>{data.taskCount.failed}</h2>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#aa84db] font-semibold shadow-md border-indigo-300 font-semibold'onClick={() => setTaskFilter("activetask")} >
                <h3 className='text-xl'>Active tasks</h3>
                <h2>{data.taskCount.active}</h2>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#d696c7] font-semibold shadow-md border-indigo-300 font-semibold'onClick={() => setTaskFilter("testingtask")} >
                <h3 className='text-xl'>Testing tasks</h3>
                <h2>{data.taskCount.active}</h2>
            </div>
        </div>
    )
}

export default TaskItems
