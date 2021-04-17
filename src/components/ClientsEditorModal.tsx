import React from 'react';

const ClientsEditorModal: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 w-2/4 h-80 bg-white shadow-2xl rounded-lg">
        <form></form> {/*Здесь будет отдельный компонент формы*/}
      </div>
    </div>
  );
};

export default ClientsEditorModal;
