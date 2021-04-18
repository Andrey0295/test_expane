/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

type ModalProps = {
  onClose(e: EventListener): any;
  children: {};
};

const AddClientsModal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    console.log('Модалка зарендерилась');
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: any) => {
    if (e.code === 'Escape') {
      onClose(e);
    }
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25"
      onClick={handleBackdropClick}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 w-2/4 h-80 bg-white shadow-2xl rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default AddClientsModal;
