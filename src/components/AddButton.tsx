import React from 'react';

type ButtonProps = {
  onClick: () => void;
};

const AddButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="w-28 h-8 rounded bg-indigo-700 text-white hover:bg-blue-500 focus:bg-blue-500"
        type="button"
        onClick={onClick}
      >
        Add Client
      </button>
    </div>
  );
};

export default AddButton;
