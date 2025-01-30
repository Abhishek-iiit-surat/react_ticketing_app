import React, { useState } from 'react';

export default function PopupCard() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCard = () => setIsOpen(!isOpen);

    return (
        <div className="relative h-screen bg-gray-100 flex items-center justify-center">

            <div className="text-center text-black">
                <h2 className="text-2xl font-bold cursor-pointer hover:underline" onClick={toggleCard}>
                    Click me to open the card
                </h2>
            </div>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm z-5"
                        onClick={toggleCard} // Close when the background is clicked
                    ></div>

                    {/* Popup Card */}
                    <div className="fixed inset-0 flex items-center justify-center z-20">
                        <div className="w-[75vw] h-[70vh]  bg-white p-6 rounded-2xl shadow-lg transition-all duration-1500 ease-out"style={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}>
                            <p className="mt-2 text-gray-600">
                                This is the content of the popup card. Click outside or the close button to close it.
                            </p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
                                onClick={toggleCard}
                            >
                                Save and Close
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
