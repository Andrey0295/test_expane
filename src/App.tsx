import React, { useState } from 'react';
import ClientsTable from './components/ClientsTable/ClientsTable';
import AddClientsModal from './components/AddClientsModal';
import AddClientsForm from './components/AddClientsForm';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleMOdal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <ClientsTable />

      <button
        className="w-28 h-8 rounded bg-indigo-700 text-white hover:bg-blue-500 focus:bg-blue-500"
        type="button"
        onClick={toggleMOdal}
      >
        AddClient
      </button>
      {showModal ? (
        <AddClientsModal onClose={toggleMOdal}>
          <AddClientsForm />
        </AddClientsModal>
      ) : null}
    </div>
  );
};

export default App;
