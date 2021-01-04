import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
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
          className="input"
          placeholder="Trees,Space,Art,etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
