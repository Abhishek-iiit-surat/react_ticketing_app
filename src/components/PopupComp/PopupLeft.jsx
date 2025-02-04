import React from 'react'
import Discussion from './Discussion'
function PopupLeft({selectedTask}) {
    return (
        <>
            <div className='p-5 w-[75%] h-[75%]'>
                <h2 className='text-black border-b pb-4'>Description and Acceptance Criteria</h2>
                <p id='popup-description' className='overflow-y-auto p-4 text-black text-sm h-full'>{selectedTask.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ut at eaque perspiciatis cumque laboriosam laborum velit dolorem eum! Esse, perspiciatis. Voluptas deleniti consequuntur necessitatibus et odit id ipsa voluptates. Saepe in doloremque incidunt aliquid id officia velit, a nisi consequuntur suscipit, officiis cupiditate quis. Non eos placeat inventore aperiam ea! Illo aliquam voluptates a nemo dolores at dolorum deleniti ipsam enim, ea laboriosam ab quam hic, maxime ullam incidunt minima molestiae. Pariatur a quo atque incidunt labore aperiam magnam et rerum veritatis, perspiciatis quos molestias inventore error assumenda obcaecati illo odit doloremque consequatur quis expedita at mollitia deserunt. Minus!</p>
                <h2 className='mt-5 text-black border-b pb-4'>Discussion</h2>
                <p id='popup-description' className='overflow-y-auto p-4 text-black text-sm h-full'>
                    <Discussion></Discussion>
                </p>
            </div>
        </>
    )
}

export default PopupLeft
