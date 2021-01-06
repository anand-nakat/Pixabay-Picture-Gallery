import React from "react";

import { Link } from "react-router-dom";

import { FcGallery } from "react-icons/fc";

const Navbar = () => {
  let mode = true;
  if (sessionStorage.getItem("Mode")) {
    mode = sessionStorage.getItem("Mode") === `Dark` ? false : true;
  }

  let html = document.querySelector("html");
  if (mode === false) {
    html.classList.add("dark");
  }
  return (
    <nav className="navbar">
      <div className="sm:text-2xl text-indigo-50 text-xl">
        <Link
          to="/"
          className="flex flex-row-reverse hover:text-yellow-400 items-center"
        >
          Pixabay Photo Gallery
          <FcGallery className="mr-1.5 text-4xl" />
        </Link>
      </div>

      <Link to="/about" className="about-btn">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
