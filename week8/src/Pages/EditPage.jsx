import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageForm from '../components/ImageForm';
import ConfirmModal from '../Components/ConfirmModal';

// 예시용 더미 포스트 데이터
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

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const originalPost = dummyPosts.find((p) => p.id === id);

  const [updatedData, setUpdatedData] = useState(originalPost);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!originalPost) {
    return <div className="p-8 text-center text-gray-500">Post not found.</div>;
  }

  const handleFormSubmit = (data) => {
    setUpdatedData({ ...data, id: originalPost.id });
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    console.log('Updated post:', updatedData);
    setShowConfirm(false);
    navigate(`/detail/${originalPost.id}`);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Post</h2>

      <ImageForm initialData={originalPost} onSubmit={handleFormSubmit} />

      {showConfirm && (
        <ConfirmModal
          message="Post successfully edited! View updated post?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default EditPage;