import React from "react";

const Navbar = () => {
  const modeSwitchBtn = React.useRef(null);
  const toggleDarkMode = () => {
    let html = document.querySelector("html");
    console.log(modeSwitchBtn.current.innerText);
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      modeSwitchBtn.current.innerText = "Switch Dark Mode";
    } else {
      html.classList.add("dark");
      modeSwitchBtn.current.innerText = "Switch Light Mode";
    }
  };

  return (
    <nav
      className="w-full p-4 md:px-5 dark:bg-gray-900  tracking-wide font-semibold border-b-2 
    border-yellow-400 shadow-lg flex justify-between items-center rounded-b bg-indigo-800"
    >
      <div className="sm:text-2xl text-indigo-50 text-xl">
        <a href="/" className="hover:text-yellow-400">
          Pixabay Photo Gallery
        </a>
      </div>
      <div className="flex space-x-2 sm:space-x-4 items-center">
        <button
          ref={modeSwitchBtn}
          onClick={toggleDarkMode}
          className="bg-yellow-400 focus:outline-none 
          font-medium hover:bg-yellow-500 px-1 py-1.5  rounded sm:p-2 text-black text-xs uppercase"
        >
          Switch Dark Mode
        </button>
        <a
          href="/about"
          className="border-2 border-yellow-400 dark:border-yellow-500 font-semibold hover:bg-yellow-400
           hover:border-0 hover:text-black p-2 rounded text-xs text-yellow-100 uppercase "
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
