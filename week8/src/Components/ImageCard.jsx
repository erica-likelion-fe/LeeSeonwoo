import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ post }) => {
  return (
    <div className="border rounded p-2">
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-sm">{post.description.slice(0, 40)}...</p>
      <Link to={`/detail/${post.id}`} className="text-blue-500 mt-2 inline-block">
        View More
      </Link>
    </div>
  );
};

export default ImageCard;