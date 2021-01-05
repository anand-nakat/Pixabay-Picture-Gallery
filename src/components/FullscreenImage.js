import React from "react";
import { useGlobalContext } from "../context";
import { FaWindowClose } from "react-icons/fa";
const FullscreenImage = ({ image }) => {
  const { closeFullscreenImage } = useGlobalContext();
  const handleClick = (e) => {
    if (!e.target.classList.contains("image")) {
      closeFullscreenImage();
    }
  };

  return (
    <main
      className="fixed flex-centered min-h-screen min-w-full z-10 top-0 left-0"
      style={{ background: `#000000d1` }}
      onClick={(e) => handleClick(e)}
    >
      <FaWindowClose
        onClick={() => closeFullscreenImage()}
        className="fixed right-2 cursor-pointer sm:text-3xl sm:top-0 text-2xl text-blue-200 hover:text-blue-300 top-2 "
      />
      <div className="image-wrapper max-w-screen-lg p-2 w-full sm:w-5/6 ">
        <img src={image} alt="Full Screen Pic" className="image" />
      </div>
    </main>
  );
};

export default FullscreenImage;
