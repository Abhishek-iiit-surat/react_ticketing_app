import React from 'react'

function Header({data}) {
    console.log("Data Coming to header is:", data)
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello  <br />  <span className='text-3xl font-semibold'> {data.name} 👋</span></h1>
            <button className='bg-red-600 rounded-md px-5 py-3 font-medium text-lg font-white'>Log Out</button>
        </div>
    )
}

export default Header
