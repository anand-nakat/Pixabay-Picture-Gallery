import React, { useState } from "react";
import Switch from "react-switch";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeSwitch = () => {
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
    <div className="absolute dark:text-gray-50 flex items-center right-2 space-x-0.5 text-gray-900 text-lg top-20">
      <div
        className="flex flex-col items-center cursor-pointer "
        onClick={() => {
          setChecked(false);
          toggleDarkMode();
        }}
      >
        <HiMoon />
        <p className=" font-medium text-xs ">Dark</p>
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
        <HiSun />
        <p className="font-medium text-xs space-y-1">Light</p>
      </div>
    </div>
  );
};

export default ThemeSwitch;
