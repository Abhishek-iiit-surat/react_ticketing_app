import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function login({ handleLogin }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword,setShowPassword]=useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20  rounded-xl'>
                <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col items-center justify-center'>
                    <input required onChange={(e) => { setEmail(e.target.value) }} className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter email' value={email} />
                    <div className="relative mt-3 w-full flex items-center">
                        <input required onChange={(e) => { setPassword(e.target.value) }} className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' type={showPassword ? 'text' : 'password'} placeholder='Enter Password' value={password} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 text-emerald-600 text-xl mt-3">
                            {showPassword ? <FaEye /> :  <FaEyeSlash /> }
                        </button>
                    </div>
                    <button className='text-white outline-none  border-2 bg-emerald-600 text-xl py-3 px-5 mt-5 rounded-full placeholder:text-white'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default login
