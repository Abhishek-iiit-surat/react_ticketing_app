import React from 'react'

function PopupHeader({taskPopupflag, setTaskPopupflag,selectedTask}) {
    return (
        <div>
            <div className="flex justify-between items-center w-full pb-4 border-b">
                <p className="text-blue-600 text-lg font-semibold">User Story: {selectedTask.id}</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => setTaskPopupflag(!taskPopupflag)}
                >
                    Save & Close
                </button>
            </div>

            {/* Content */}
            <div className="flex items-center justify-center space-x-4 mt-2">
                <h2 className="text-xl text-black font-medium">{selectedTask.title}</h2>
            </div>
        </div>
    )
}

export default PopupHeader
