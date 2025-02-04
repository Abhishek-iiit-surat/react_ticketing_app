import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-100 to-blue-300">
            <div className="bg-white shadow-2xl p-10 rounded-2xl w-[350px]">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
                <form onSubmit={submitHandler} className="flex flex-col">
                    <input 
                        required 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="outline-none bg-transparent border border-gray-300 text-gray-700 text-lg py-3 px-5 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition" 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email} 
                    />
                    
                    <div className="relative mt-4">
                        <input 
                            required 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="outline-none bg-transparent border border-gray-300 text-gray-700 text-lg py-3 px-5 rounded-lg w-full placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition" 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Enter Password" 
                            value={password} 
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute right-4 top-3 text-gray-500 hover:text-blue-500 transition"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <button className="mt-6 text-white text-lg py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition shadow-md">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
