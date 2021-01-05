import React from "react";
import { socialIcons } from "../social-links";

const Footer = () => {
  return (
    <div
      className="absolute bottom-0 bg-gray-50 border-t border-gray-400 text-gray-700
    dark:bg-gray-900 font-thin py-4 dark:text-gray-200 text-sm w-full"
    >
      <p className="border-b text-lg border-gray-500 dark:border-gray-200 mx-auto px-1 w-max">
        {" "}
        Developed by Anand Nakat
      </p>
      <div
        className="flex-centered justify-center mt-4 space-x-16 
      text-2xl w-full"
      >
        {socialIcons.map((item) => {
          const { id, link, icon } = item;
          return (
            <div
              key={id}
              className="dark:hover:text-yellow-300 hover:text-gray-900"
            >
              <a href={link} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
