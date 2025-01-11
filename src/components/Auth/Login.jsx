import React, { useState } from 'react'

function login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20  rounded-xl'>
                <form onSubmit={(e)=>{submitHandler(e)}}className='flex flex-col items-center justify-center'>
                    <input required onChange={(e)=>{setEmail(e.target.value)}} className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'type="email" placeholder='Enter email' value={email}/>
                    <input required onChange={(e)=>{setPassword(e.target.value)}} className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter Password' value={password}/>
                    <button className='text-white outline-none  border-2 bg-emerald-600 text-xl py-3 px-5 mt-5 rounded-full placeholder:text-white'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default login
