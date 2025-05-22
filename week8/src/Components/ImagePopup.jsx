import React from 'react';

const ImagePopup = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded p-6 w-96 text-center relative">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded" />
        <h2 className="text-xl font-bold mt-4">{post.title}</h2>
        <p className="mt-2">{post.description}</p>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-black">
          ✕
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;