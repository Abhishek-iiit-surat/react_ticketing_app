import React from 'react';
import Dropdown from '../common/Dropdown';
import { GrAttachment } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";
import PopupHeader from './PopupHeader';

export default function Popup({ taskPopupflag, setTaskPopupflag, selectedTask, setSelectedTask,popupSubComp,setPopupSubComp }) {
    // const toggleCard = () => setTaskPopupflag(false);

    return (
        <>
            {popupSubComp === "description" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
                    <div id='popup-main' className="w-[80%] h-[80%] bg-white rounded-lg shadow-lg p-6 flex flex-col overflow-y-auto">

                        {/* Header */}
                        <PopupHeader taskPopupflag={taskPopupflag} setTaskPopupflag={setTaskPopupflag} selectedTask={selectedTask}></PopupHeader>
                        <Dropdown></Dropdown>
                        <div className='w-[100%] h-[100%] flex flex-row'>
                            <div className='p-5 w-[75%] h-[75%]'>
                                <h2 className='text-black border-b pb-4'>Description and Acceptance Criteria</h2>
                                <p id='popup-description' className='overflow-y-auto p-4 text-black text-sm h-full'>{selectedTask.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ut at eaque perspiciatis cumque laboriosam laborum velit dolorem eum! Esse, perspiciatis. Voluptas deleniti consequuntur necessitatibus et odit id ipsa voluptates. Saepe in doloremque incidunt aliquid id officia velit, a nisi consequuntur suscipit, officiis cupiditate quis. Non eos placeat inventore aperiam ea! Illo aliquam voluptates a nemo dolores at dolorum deleniti ipsam enim, ea laboriosam ab quam hic, maxime ullam incidunt minima molestiae. Pariatur a quo atque incidunt labore aperiam magnam et rerum veritatis, perspiciatis quos molestias inventore error assumenda obcaecati illo odit doloremque consequatur quis expedita at mollitia deserunt. Minus!</p>
                                <h2 className='mt-5 text-black border-b pb-4'>Discussion</h2>
                                <p id='popup-description' className='overflow-y-auto p-4 text-black text-sm h-full'></p>
                            </div>
                            <div className='p-5 w-[40%] h-[40%] ml-[15%]'>
                                <div className='flex flex-row text-black border-b pb-4 gap-10'>
                                    <GrNotes className='' />
                                    <GrAttachment className='' />
                                    <GrHistory className='' />
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            )}

            {popupSubComp === "history" && (
                <div id='popup-main' className="w-[80%] h-[80%] bg-white rounded-lg shadow-lg p-6 flex flex-col overflow-y-auto">

                    {/* Header */}
                    <PopupHeader taskPopupflag={taskPopupflag} setTaskPopupflag={setTaskPopupflag} selectedTask={selectedTask}></PopupHeader>
                    
                </div>
            )}

        </>
    );
}
