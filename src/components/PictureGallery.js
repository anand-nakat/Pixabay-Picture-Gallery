import React from "react";
import SinglePicture from "./SinglePicture";
import FullscreenImage from "./FullscreenImage";
import Loading from "./Loading";
import Modal from "./Modal";
import { useGlobalContext } from "../context";

const PictureGallery = () => {
  const {
    pictures,
    totalResults,
    loading,
    searchTerm,
    IsModalOpen,
    imageURL,
  } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (totalResults < 1) {
    return (
      <div className="capitalize dark:text-gray-50 font-light mt-5 text-gray-900 text-lg">
        <div className="mx-auto sm:w-max text-center w-full">
          {" "}
          No results found for the term you searched
        </div>
      </div>
    );
  } else {
    return (
      <>
        {imageURL ? <FullscreenImage image={imageURL} /> : null}
        {IsModalOpen && <Modal />}
        {searchTerm.length < 1 ? (
          ``
        ) : (
          <>
            <div className="dark:text-yellow-300 font-semibold my-4 px-5 text-indigo-700 text-2xl w-full">
              Search Results for{" "}
              <strong className="dark:text-gray-50 text-gray-800 capitalize">
                {searchTerm}
              </strong>
            </div>
          </>
        )}

        <div className=" grid lg:grid-cols-3 grid- sm:grid-cols-2 p-4 gap-10 items-start pb-36">
          {pictures.map((picture) => {
            return <SinglePicture key={picture.id} {...picture} />;
          })}
        </div>
      </>
    );
  }
};

export default PictureGallery;
