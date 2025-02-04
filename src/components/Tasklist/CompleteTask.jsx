import React from 'react'

function CompleteTask({ tasks, setSelectedTask, setTaskPopupflag }) {
    const clickhandler = (task) => {
        setTaskPopupflag(true);
        setSelectedTask(task);
    };

    return (
        tasks.filter(task => task.completed).length > 0 ? (
            tasks.filter(task => task.completed).map((task, index) => (
                <div key={index}
                    className="flex-shrink-0 h-full w-[300px] bg-white shadow-md hover:shadow-lg transition duration-500 border border-gray-300 hover:border-blue-400 border-2 outline-none rounded-xl p-6"
                    onClick={() => clickhandler(task)}>
                    <div className="flex justify-between items-center">
                        <h3 className="bg-red-600 text-white text-xs px-3 py-1 rounded-md font-semibold">{task.priority}</h3>
                        <h4 className="text-gray-500 text-sm">{task.date}</h4>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-gray-600">{task.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{task.description}</p>
                </div>
            ))
        ) : (
            <div className="h-[30%] w-full flex items-center justify-center text-black text-3xl mt-5">Oops, no tasks completed yet!</div>
        )
    );
}

export default CompleteTask;
