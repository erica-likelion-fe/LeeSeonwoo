import React, { useState } from 'react';

const ImageForm = ({ onSubmit, initialData = {} }) => {
  const [image, setImage] = useState(initialData.image || '');
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && image) {
      onSubmit({ image, title, description });
    }
  };

  const isFilled = image && title && description;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`p-2 border ${!title ? 'border-red-400' : 'border-gray-300'} rounded`}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`p-2 border ${!description ? 'border-red-400' : 'border-gray-300'} rounded`}
      />

      <button
        type="submit"
        disabled={!isFilled}
        className={`p-2 rounded text-white transition ${
          isFilled ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Submit Post
      </button>
    </form>
  );
};

export default ImageForm;
