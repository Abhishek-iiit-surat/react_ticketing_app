import React from 'react'

function FailedTask({ tasks, setSelectedTask }) {
    const clickhandler = (task) => {
        setTaskPopupflag(true);
        setSelectedTask(task);
    };
    return (
        tasks.filter(task => task.failed).length > 0 ? (
            tasks.map((task, index) => (
                <div
                    className="flex-shrink-0 h-full w-[300px] bg-white shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1 rounded-xl border border-gray-300 p-6"
                    key={index}
                    onClick={() => clickhandler(task)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="bg-red-600 text-white text-xs px-3 py-1 rounded-md font-semibold">
                            {task.priority}
                        </h3>
                        <h4 className="text-gray-500 text-sm">{task.date}</h4>
                    </div>

                    <h2 className="mt-4 text-lg font-semibold text-gray-800">{task.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{task.description}</p>
                </div>
            ))
        ) : (
            <div className="h-[30%] w-full flex items-center justify-center text-black font-semibold text-3xl mt-5">
                <h1>Great! No tasks failed yet 🎉</h1>
            </div>
        )

    )
}

export default FailedTask
