import React from 'react';

function CommonCheckModalComponent({ isOpen, OKButtonFn, msg, closeButtonFn }) {

    if (!isOpen) return null;

    const handleOK = () => {
        OKButtonFn().then(() => {
            console.log('ok');
            closeButtonFn();
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-xs w-full p-6 space-y-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">정말 {msg} 하시겠습니까?</h2>
                <div className="flex justify-center space-x-4">
                    <button
                        className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600 transition duration-150 ease-in-out"
                        onClick={handleOK}
                    >
                        확인
                    </button>
                    <button
                        className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition duration-150 ease-in-out"
                        onClick={closeButtonFn}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommonCheckModalComponent;
