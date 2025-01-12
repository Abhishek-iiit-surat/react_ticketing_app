import React from 'react'
import Header from '../common/Header'
import CreateTask from '../common/CreateTask'
import AllTask from '../common/AllTask'
function AdminDashboard() {
    return (
        <div className='p-7 h-screen w-full'>
            <Header></Header>
            <CreateTask></CreateTask>
            <AllTask></AllTask>
        </div>
    )
}

export default AdminDashboard
