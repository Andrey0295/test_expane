import React from 'react';

const AddButton: React.FC = () => {
  return (
    <div>
      <button
        className="w-28 h-8 rounded bg-indigo-700 text-white hover:bg-blue-500 focus:bg-blue-500"
        type="button"
      >
        Add Client
      </button>
    </div>
  );
};

export default AddButton;
