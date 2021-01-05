import React from "react";

import {
  AiOutlineDownload,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { useGlobalContext } from "../context";
const SinglePicture = ({
  comments,
  downloads,
  favorites,
  tags,
  user,
  largeImageURL: download,
  webformatURL: img,
}) => {
  const { setSearchTerm, setImageURL } = useGlobalContext();
  const tagsArray = tags.split(",");
  const handleClick = (imageURL) => {
    setImageURL(imageURL);
  };

  return (
    <>
      <article className="photo-card">
        <div>
          <img
            src={img}
            className="border-b-4 border-yellow-600 w-full min-h-full"
            alt={user}
            onClick={() => handleClick(download)}
          />
        </div>
        <div className="p-2">
          <div className="flex items-center justify-around mb-2 px-2 space-x-0.5">
            <div className="stats-icon">
              <AiOutlineDownload className="fill-current text-xl  " />
              <span>{downloads}</span>
            </div>
            <div className="stats-icon">
              <AiOutlineHeart className="fill-current text-xl" />
              <span> {favorites}</span>
            </div>
            <div className="stats-icon">
              <AiOutlineComment className="fill-current text-xl" />
              <span> {comments}</span>
            </div>
            <a
              href={download}
              target="_blank"
              rel="noreferrer"
              className="download-btn"
            >
              Download <HiDownload className="fill-current" />
            </a>
          </div>

          <h2 className=" dark:text-yellow-300 font-semibold text-lg text-yellow-600">
            Photo by {user}
          </h2>
          <div className="mt-3 flex items-center space-x-0.5 ">
            <div className="dark:text-white text-gray-900 font-semibold">
              Tags:{" "}
            </div>
            {tagsArray.map((tag, index) => {
              tag = tag.trim();
              return (
                <span
                  key={index}
                  className="tag text-center"
                  onClick={(e) => setSearchTerm(tag)}
                  title={`Click to see Images related to ${tag}`}
                >
                  {`${tag}`}
                </span>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
};

export default SinglePicture;
