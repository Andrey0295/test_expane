import React from 'react';

const AppBar: React.FC = () => {
  return (
    <header className="flex justify-center items-center mb-8 h-12 bg-blue-500 ">
      <div>
        <h1 className="text-4xl text-white">Clients list</h1>
      </div>
    </header>
  );
};

export default AppBar;
