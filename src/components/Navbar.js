import React from "react";
import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import Switch from "react-switch";

const Navbar = () => {
  const [checked, setChecked] = useState(true);
  const modeSwitchBtn = React.useRef(null);
  const toggleDarkMode = () => {
    let html = document.querySelector("html");

    if (checked) {
      html.classList.add("dark");

      //  modeSwitchBtn.current.innerText = "Switch Dark Mode";
    } else {
      html.classList.remove("dark");
      // modeSwitchBtn.current.innerText = "Switch Light Mode";
    }
    setChecked(!checked);
  };

  return (
    <nav className="navbar">
      <div className="sm:text-2xl text-indigo-50 text-xl">
        <a href="/" className="hover:text-yellow-400">
          Pixabay Photo Gallery
        </a>
      </div>
      <div className="flex flex-col sm:flex-row space-y-1 space-x-2 sm:space-x-4 items-center">
        <div className="flex items-center space-x-0.5">
          <div className="flex flex-col items-center">
            <HiMoon className="toggle-mode-icons" />
            <p className="text-gray-50 font-medium text-xs space-y-1">Dark</p>
          </div>
          <Switch
            checked={checked}
            onChange={toggleDarkMode}
            onClick={toggleDarkMode}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            onColor={`#d97706`}
            offColor={`#d97706`}
            handleDiameter={3}
          />
          <div className="flex flex-col items-center">
            <HiSun className="toggle-mode-icons" />
            <p className="text-gray-50 font-medium text-xs space-y-1">Light</p>
          </div>
        </div>

        <a href="/about" className="about-btn">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
