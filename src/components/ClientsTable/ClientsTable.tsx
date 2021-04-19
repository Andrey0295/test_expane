import React from 'react';

interface IClients {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatarUrl: string;
}

type ClientsTableProps = {
  allClients: [];
};

const ClientsTable: React.FC<ClientsTableProps> = ({ allClients }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <table className="border-collapse border-4 border-gray-900 w-2/4 mb-8 ">
        <thead className="border-collapse border-4 border-gray-900 ">
          <tr>
            <th className="border-2 border-gray-900">First Name</th>
            <th className="border-2  border-gray-900">Last Name</th>
            <th className="border-2  border-gray-900">Phone</th>
            <th className="border-2  border-gray-900">Avatar </th>
          </tr>
        </thead>
        <tbody>
          {allClients.map((client: IClients) => (
            <tr key={client.id}>
              <td className="border-2 border-gray-900">{client.firstName}</td>
              <td className="border-2 border-gray-900">{client.lastName}</td>
              <td className="border-2 border-gray-900">{client.phone}</td>
              <td className="border-2 border-gray-900">
                {client.avatarUrl ? (
                  <img src={client.avatarUrl} alt="avatar" width="100" />
                ) : (
                  <span>don't have avatar</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
