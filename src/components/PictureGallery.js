import React from "react";
import SinglePicture from "./SinglePicture";

const PictureGallery = ({ pictures, totalHits }) => {
  if (totalHits < 1) {
    return (
      <h3 className="text-2xl font-semibold w-full max-w-sm text-center text-gray-900 dark:text-gray-50 capitalize mt-5 ">
        No results found for the Search
      </h3>
    );
  }
  return (
    <div className=" grid lg:grid-cols-3 grid- sm:grid-cols-2 p-4 gap-10">
      {pictures.map((picture) => {
        return <SinglePicture key={picture.id} {...picture} />;
      })}
    </div>
  );
};

export default PictureGallery;
