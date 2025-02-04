import React from 'react';
import { GrAttachment } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";

function PopupRight() {
    return (
        <>
            <div className='p-5 w-[40%] h-[40%] ml-[15%]'>
                <div className='flex flex-row text-black border-b pb-4 gap-10'>
                    <GrNotes className='' />
                    <GrAttachment className='' />
                    <GrHistory className='' />
                </div>
            </div>
        </>
    )
}

export default PopupRight
