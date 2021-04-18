import React, { useState } from 'react';

interface IClient {
  name: string;
  lastName: string;
}

type FormProps = {
  onSubmit: (client: IClient) => any;
};

const AddClientsForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(e.currentTarget.name);
  };

  const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    console.log(e.currentTarget.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const client = {
      name: name,
      lastName: lastName,
    };

    onSubmit(client);

    setName('');
    setLastName('');
  };
  return (
    <form className="flex flex-col p-16" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="123"></label>
        <input
          className="border-b border-black "
          id="123"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={updateName}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="124"></label>
        <input
          className="border-b border-black "
          id="124"
          type="text"
          name="last name"
          value={lastName}
          placeholder="Last Name"
          onChange={updateLastName}
        />
      </div>
      <button
        className="w-28 h-8 rounded bg-indigo-700 text-white hover:bg-blue-500 focus:bg-blue-500"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddClientsForm;
