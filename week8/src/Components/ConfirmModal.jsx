import React from 'react';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-80 p-6 relative text-center">
        
        {/* 닫기 (X) 버튼 */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* 메시지 */}
        <p className="mb-6 text-lg font-medium">
          {message}
        </p>

        {/* 버튼 영역 */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
          >
            VIEW POST !
          </button>
          <button
            onClick={onCancel}
            className="text-black text-sm hover:underline"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;