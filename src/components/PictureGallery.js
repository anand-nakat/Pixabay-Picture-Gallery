import React from "react";
import SinglePicture from "./SinglePicture";
import Loading from "./Loading";

const PictureGallery = ({
  pictures,
  totalHits,
  loading,
  searchTerm,
  setSearchTerm,
}) => {
  if (loading) {
    return <Loading />;
  }
  if (totalHits < 1) {
    return (
      <h3 className="text-2xl font-semibold w-full max-w-sm text-center text-gray-900 dark:text-gray-50 capitalize mt-5 ">
        No results found for the Search
      </h3>
    );
  }
  return (
    <>
      {searchTerm ? (
        ``
      ) : (
        <div className="dark:text-yellow-300 font-semibold my-4 px-5 text-indigo-700 text-2xl w-full">
          Search Results for{" "}
          <strong className="dark:text-gray-50 text-gray-800 capitalize">
            {searchTerm}
          </strong>
        </div>
      )}

      <div className=" grid lg:grid-cols-3 grid- sm:grid-cols-2 p-4 gap-10 items-start">
        {pictures.map((picture) => {
          return (
            <SinglePicture
              key={picture.id}
              {...picture}
              setSearchTerm={setSearchTerm}
            />
          );
        })}
      </div>
    </>
  );
};

export default PictureGallery;
