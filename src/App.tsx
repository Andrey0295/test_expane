import React, { useState } from 'react';
import ClientsTable from './components/ClientsTable/ClientsTable';
import AddClientsModal from './components/AddClientsModal';
import AddClientsForm from './components/AddClientsForm';

import gql from 'graphql-tag';

import { useQuery, useMutation, QueryClient } from 'react-query';
import { request } from 'graphql-request';

const GET_CLIENTS = gql`
  query {
    getClients {
      id
      firstName
      lastName
      phone
      avatarUrl
    }
  }
`;

const ADD_CLIENT = gql`
  mutation($firstName: String, $lastName: String) {
    addClient(firstName: $firstname, lastName: $lastName) {
      firstName
      lastName
      phone
      avatarUrl
    }
  }
`;

interface Data {
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatarUrl?: string;
}
const endpoint = 'https://test-task.expane.pro/api/graphql';
const fetchData = async () => await request(endpoint, GET_CLIENTS);
// const add = async () => await request(endpoint, ADD_CLIENT);

const App: React.FC = () => {
  const clientsData = useQuery('clients', fetchData);
  // const mutation = useMutation(add);

  if (!clientsData.isLoading) {
    console.log(clientsData.data);
  }

  const [showModal, setShowModal] = useState<boolean>(false);
  const [clients, setClients] = useState<any>([]);

  const handleClientsData = (data: Data) => {
    const client: any = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      avatarUrl: data.avatarUrl,
    };

    setClients([...clients, client]);
  };

  const toggleMOdal = () => {
    setShowModal(!showModal);
  };
  if (clientsData.isLoading) return <div>Loading</div>;
  if (clientsData.error) return <div>Error</div>;

  return (
    <div>
      {!clientsData.isLoading && (
        <ClientsTable allClients={clientsData.data.getClients} />
      )}
      <button
        className="w-28 h-8 rounded bg-indigo-700 text-white hover:bg-blue-500 focus:bg-blue-500"
        type="button"
        onClick={toggleMOdal}
      >
        AddClient
      </button>
      {showModal ? (
        <AddClientsModal onClose={toggleMOdal}>
          <AddClientsForm onSubmit={handleClientsData} />
        </AddClientsModal>
      ) : null}
    </div>
  );
};

export default App;
