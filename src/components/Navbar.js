import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiSun, HiMoon } from "react-icons/hi";
import Switch from "react-switch";

const Navbar = () => {
  let mode = true;
  if (sessionStorage.getItem("Mode")) {
    mode = sessionStorage.getItem("Mode") === `Dark` ? false : true;
  }

  let html = document.querySelector("html");
  if (mode === false) {
    html.classList.add("dark");
  }
  const [checked, setChecked] = useState(mode);
  const toggleDarkMode = () => {
    if (checked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setChecked(!checked);
    sessionStorage.setItem("Mode", checked ? `Dark` : `Light`);
  };

  return (
    <nav className="navbar">
      <div className="sm:text-2xl text-indigo-50 text-xl">
        <Link to="/" className="hover:text-yellow-400">
          Pixabay Photo Gallery
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row space-y-1 space-x-2 sm:space-x-4 items-center">
        <div className="flex items-center space-x-0.5">
          <div
            className="flex flex-col items-center cursor-pointer "
            onClick={() => {
              setChecked(false);
              toggleDarkMode();
            }}
          >
            <HiMoon className="toggle-mode-icons" />
            <p className="text-gray-50 font-medium text-xs space-y-1">Dark</p>
          </div>
          <Switch
            checked={checked}
            onChange={toggleDarkMode}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            onColor={`#d97706`}
            offColor={`#d97706`}
            handleDiameter={22}
          />
          <div
            className="flex flex-col items-center  cursor-pointer "
            onClick={() => {
              setChecked(true);
              toggleDarkMode();
            }}
          >
            <HiSun className="toggle-mode-icons" />
            <p className="text-gray-50 font-medium text-xs space-y-1">Light</p>
          </div>
        </div>

        <Link to="/about" className="about-btn">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
