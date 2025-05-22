import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ConfirmModal from '../Components/ConfirmModal';

// 더미 포스트 데이터
const dummyPosts = [
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

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = dummyPosts.find((p) => p.id === id); // id는 문자열

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!post) {
    return <div className="p-8 text-center text-gray-500">Post not found.</div>;
  }

  const handleEdit = () => {
    navigate(`/edit/${post.id}`);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log('Deleted post:', post.id);
    setShowDeleteModal(false);
    navigate('/'); // 메인으로 이동
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-6">{post.description}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleEdit}
          className="border px-4 py-2 rounded hover:border-gray-500"
        >
          Edit Post
        </button>
        <button
          onClick={handleDelete}
          className="text-red-600 border border-red-300 px-4 py-2 rounded hover:bg-red-50"
        >
          Delete Post
        </button>
      </div>

      {/* 삭제 확인 모달 */}
      {showDeleteModal && (
        <ConfirmModal
          message="Are you sure you want to delete this post?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default DetailPage;