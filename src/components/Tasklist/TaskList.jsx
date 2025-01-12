import React from 'react'

function TaskList() {
    return (
        <div id='tasklist' className='mt-10 h-[55%] overflow-x-auto flex items-center justify-flex-start gap-5 bg-transparent'>
            <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
                <div className='flex jsutify-between gap-[50%] items-center px-8 py-2'>
                    <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                    <h4 className='text-base'>11 jan 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold px-10'> Complete Meta-llama bot</h2>
                <p className='mt-2 px-10 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam nihil? Exercitationem eius voluptas rem.</p>
            </div>

            <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
                <div className='flex jsutify-between gap-[50%] items-center px-8 py-2'>
                    <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                    <h4 className='text-base'>11 jan 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold px-10'> Complete Meta-llama bot</h2>
                <p className='mt-2 px-10 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam nihil? Exercitationem eius voluptas rem.</p>
            </div>

            <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
                <div className='flex jsutify-between gap-[50%] items-center px-8 py-2'>
                    <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                    <h4 className='text-base'>11 jan 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold px-10'> Complete Meta-llama bot</h2>
                <p className='mt-2 px-10 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam nihil? Exercitationem eius voluptas rem.</p>
            </div>

            <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl'>
                <div className='flex jsutify-between gap-[50%] items-center px-8 py-2'>
                    <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                    <h4 className='text-base'>11 jan 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold px-10'> Complete Meta-llama bot</h2>
                <p className='mt-2 px-10 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam nihil? Exercitationem eius voluptas rem.</p>
            </div>


        </div>
    )
}

export default TaskList
