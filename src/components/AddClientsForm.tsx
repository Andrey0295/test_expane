import React, { useState } from 'react';

interface IClient {
  firstName: string;
  lastName: string;
  phone: string;
  avatarUrl: string;
}

type FormProps = {
  onSubmit: (client: IClient) => any;
};

const AddClientsForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [firstName, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(e.currentTarget.name);
  };

  const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    console.log(e.currentTarget.name);
  };
  const updatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const updateAvatarUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const client = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      avatarUrl: avatarUrl,
    };

    onSubmit(client);

    setName('');
    setLastName('');
    setPhone('');
    setAvatarUrl('');
  };
  return (
    <form className="flex flex-col p-16" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="123"></label>
        <input
          className="border-b border-black "
          id="123"
          type="text"
          name="firstName"
          value={firstName}
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
      <div className="mb-4">
        <label htmlFor="125"></label>
        <input
          className="border-b border-black "
          id="125"
          type="number"
          name="phone"
          value={phone}
          placeholder="Phone"
          onChange={updatePhone}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="126"></label>
        <input
          className="border-b border-black "
          id="126"
          type="text"
          name="avatarUrl"
          value={avatarUrl}
          placeholder="AvatarUrl"
          onChange={updateAvatarUrl}
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
