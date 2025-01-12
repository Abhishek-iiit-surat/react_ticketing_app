import React from 'react'
import Header from '../common/Header'
import TaskItems from '../common/TaskItems'
import TaskList from '../Tasklist/TaskList'
function EmployeeDashboard() {
    return (
        <div className='p-10 bg-[#1c1c1c]  h-screen w-screen'>
            <Header></Header>
            <TaskItems></TaskItems>
            <TaskList></TaskList>
        </div>
    )
}

export default EmployeeDashboard