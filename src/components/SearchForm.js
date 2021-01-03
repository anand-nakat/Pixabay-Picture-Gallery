import React from "react";

const SearchForm = ({ setSearchTerm, searchTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="max-w-sm w-4/5">
        <p className="dark:text-gray-50 font-semibold mt-5 text-gray-900 text-xl">
          Search Your Favorite Pictures:
        </p>
        <input
          type="text"
          className="bg-white dark:bg-gray-400 dark:placeholder-gray-200 dark:text-gray-50 
          focus:border-4 focus:border-black focus:outline-none font-medium mt-2 overflow-hidden placeholder-gray-400 px-3 py-1 rounded-lg shadow-lg 
           text-gray-700 text-xl tracking-wide w-full capitalize"
          placeholder="Trees,Space,Art,etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
