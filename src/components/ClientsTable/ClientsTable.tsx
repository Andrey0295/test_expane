import React from 'react';
import AddButton from '../AddButton';

const ClientsTable: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <table className="border-collapse border-4 border-gray-900 w-2/4 mb-8 ">
        <thead className="border-collapse border-4 border-gray-900 ">
          <tr>
            <th className="border-2 border-gray-900">First Name</th>
            <th className="border-2  border-gray-900">Last Name</th>
            <th className="border-2  border-gray-900">Number</th>
            <th className="border-2  border-gray-900">Animals </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-900">Vasya</td>
            <td className="border-2 border-gray-900">Popov</td>
            <td className="border-2 border-gray-900">09455566654</td>
            <td className="border-2 border-gray-900">Dog</td>
          </tr>
          <tr>
            <td className="border-2 border-gray-900">Vasya</td>
            <td className="border-2 border-gray-900">Popov</td>
            <td className="border-2 border-gray-900">09455566654</td>
            <td className="border-2 border-gray-900">Dog</td>
          </tr>
          <tr>
            <td className="border-2 border-gray-900">Vasya</td>
            <td className="border-2 border-gray-900">Popov</td>
            <td className="border-2 border-gray-900">09455566654</td>
            <td className="border-2 border-gray-900">Dog</td>
          </tr>
        </tbody>
      </table>
      <AddButton />
    </div>
  );
};

export default ClientsTable;
