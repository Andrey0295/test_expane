import React, { useState } from 'react';
import ClientsTable from './components/ClientsTable/ClientsTable';
import ClientsEditorModal from './components/ClientsEditorModal';
import AddButton from './components/AddButton';

const App: React.FC = () => {
  let [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal((showModal = true));
  };
  return (
    <div>
      <ClientsTable />
      <AddButton onClick={openModal} />
      {showModal ? <ClientsEditorModal /> : null}
    </div>
  );
};

export default App;
