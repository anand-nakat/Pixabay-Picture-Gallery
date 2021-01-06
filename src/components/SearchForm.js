import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center p-4 mt-6">
      <form onSubmit={handleSubmit} className="max-w-sm w-4/5">
        <p className="dark:text-gray-50 font-light mt-5 text-gray-900 text-lg">
          Search Your Favorite Pictures
        </p>
        <div className="relative">
          <input
            type="text"
            className=" inline-block input"
            placeholder="Trees,Space,Art,etc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-1 top-3">
            <AiOutlineSearch className="fill-current text-3xl text-indigo-700 dark:text-yellow-400" />{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
