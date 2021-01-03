import React from "react";
import {
  AiOutlineDownload,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
const SinglePicture = ({
  comments,
  downloads,
  favorites,
  tags,
  user,
  pageURL,
  webformatURL: img,
}) => {
  const tagsArray = tags.split(",");

  return (
    <article className="bg-gray-50 cursor-pointer dark:bg-gray-900 hover:scale-105 rounded-b-lg shadow-lg text-white transform transition-transform">
      <div>
        <img
          src={img}
          className="border-b-4 border-yellow-600 w-full min-h-full"
          alt={user}
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-around mb-2 px-2 space-x-0.5">
          <div className="flex items-center space-x-1 font-bold dark:text-white text-indigo-700">
            <AiOutlineDownload className="fill-current text-xl  " />
            <span>{downloads}</span>
          </div>
          <div className="flex items-center  dark:text-white text-indigo-700 space-x-1 font-bold">
            <AiOutlineHeart className="fill-current text-xl" />
            <span> {favorites}</span>
          </div>
          <div className="flex items-center  dark:text-white text-indigo-700 space-x-1 font-bold">
            <AiOutlineComment className="fill-current text-xl" />
            <span> {comments}</span>
          </div>
          <a
            href={pageURL}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600  dark:bg-yellow-600 dark:hover:bg-yellow-500 
             dark:text-yellow-50 flex font-semibold hover:bg-indigo-700
             hover:text-white items-center px-1 rounded text-indigo-50 text-sm transition-colors"
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
            return (
              <span
                key={index}
                className="bg-indigo-500 cursor-pointer dark:bg-yellow-600 dark:hover:bg-yellow-500
                 dark:text-yellow-50 hover:bg-indigo-400 px-2 py-1 rounded-full text-xs transition-colors"
              >
                {`${tag.trim()}`}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default SinglePicture;
