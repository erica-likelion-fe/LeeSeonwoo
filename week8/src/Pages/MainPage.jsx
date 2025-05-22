import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCard from '../Components/ImageCard';

// 초기 데이터
const initialPosts = [
  {
    id: '1',
    image: 'https://via.placeholder.com/300x300.png?text=Lemon',
    title: 'Lemon',
    description: 'A beautiful lemon slice.',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/300x300.png?text=Orange',
    title: 'Orange',
    description: 'A juicy orange fruit.',
  },
];

const MainPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/post');
  };

  // 게시물 삭제 처리 함수
  const handleDeletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>

      {/* 카드 목록 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {posts.map((post) => (
          <ImageCard key={post.id} post={post} />
        ))}
      </div>

      {/* + 버튼 */}
      <button
        onClick={handleCreatePost}
        className="fixed bottom-6 right-6 bg-pink-500 text-white text-3xl w-14 h-14 rounded-full shadow-md hover:bg-pink-600 transition"
      >
        +
      </button>
    </div>
  );
};

export default MainPage;