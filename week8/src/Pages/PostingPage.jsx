import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageForm from '../components/ImageForm';
import ConfirmModal from '../Components/ConfirmModal';
import { v4 as uuidv4 } from 'uuid'; // 고유 ID 생성용

const PostingPage = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null); // 폼 데이터
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부
  const [submittedPost, setSubmittedPost] = useState(null); // DetailPage로 넘길 포스트

  // ImageForm에서 제출 시
  const handleFormSubmit = (data) => {
    setPostData({ ...data, id: uuidv4() }); // 고유 ID 부여
    setShowModal(true); // 팝업 띄움
  };

  // 팝업에서 CONFIRM 누르면
  const handleConfirm = () => {
    setShowModal(false);
    setSubmittedPost(postData);
    navigate(`/detail/${postData.id}`); // DetailPage로 이동
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create New Post</h2>

      <ImageForm onSubmit={handleFormSubmit} />

      {showModal && (
        <ConfirmModal
          message="Post published! Do you want to see it?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default PostingPage;