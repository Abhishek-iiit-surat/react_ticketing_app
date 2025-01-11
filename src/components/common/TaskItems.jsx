import React from 'react'

function TaskItems() {
    return (
        <div className='flex mt-10 justify-between gap-5'>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
                <h2>0</h2>
                <h3>New task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
                <h2>0</h2>
                <h3>New task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
                <h2>0</h2>
                <h3>New task</h3>
            </div>
        </div>
    )
}

export default TaskItems
