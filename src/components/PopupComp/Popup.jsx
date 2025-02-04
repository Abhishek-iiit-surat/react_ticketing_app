import React from 'react';
import Dropdown from '../common/Dropdown';
import PopupHeader from './PopupHeader';
import PopupLeft from './PopupLeft';
import PopupRight from './Popupright';

export default function Popup({ taskPopupflag, setTaskPopupflag, selectedTask, setSelectedTask, popupSubComp, setPopupSubComp }) {
    // const toggleCard = () => setTaskPopupflag(false);

    return (
        <>

            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
                <div id='popup-main' className="w-[80%] h-[80%] bg-white rounded-lg shadow-lg p-6 flex flex-col overflow-y-auto">
                    <PopupHeader taskPopupflag={taskPopupflag} setTaskPopupflag={setTaskPopupflag} selectedTask={selectedTask}></PopupHeader>
                    <Dropdown></Dropdown>
                    <div className='w-[100%] h-[100%] flex flex-row'>
                        <PopupLeft selectedTask={selectedTask}></PopupLeft>
                        <PopupRight></PopupRight>
                    </div>
                </div>
            </div>
        </>
    );
}
