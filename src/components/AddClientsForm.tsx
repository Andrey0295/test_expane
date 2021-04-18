import React from 'react';

const AddClientsForm: React.FC = () => {
  return (
    <form className="flex flex-col p-16">
      <div className="mb-4">
        <label htmlFor="123"></label>
        <input
          className="border-b border-black "
          id="123"
          type="text"
          name="name"
          value=""
          placeholder="Name"
          // onChange={this.onInputChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="124"></label>
        <input
          className="border-b border-black "
          id="124"
          type="text"
          name="last name"
          value=""
          placeholder="Last Name"
          // onChange={this.onInputChange}
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
