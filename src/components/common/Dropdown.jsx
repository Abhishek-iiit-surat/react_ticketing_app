import React, { useState } from 'react'

function Dropdown() {
    const states = ["active", "testing", "resolved", "bug"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedState, setSelectedState] = useState("active");
    return (
        <div className="flex justify-between items-center w-full pb-4 relative flex justify-between items-center w-full">
            <p className="text-black text-lg">State</p>
            <div className='relative'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-200 text-black px-4 py-2 rounded flex items-center space-x-2"
                >
                    <span>{selectedState}</span>
                    <svg
                        className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg text-black">
                        {states.map((state, index) => (
                            <button
                                key={index}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => {
                                    setSelectedState(state);
                                    setIsOpen(false);
                                }}
                            >
                                {state}
                            </button>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Dropdown
