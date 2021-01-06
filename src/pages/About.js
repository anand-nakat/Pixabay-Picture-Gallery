import React from "react";
import { SiTailwindcss, SiReact } from "react-icons/si";
import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <>
      <div className="heading">
        <span className="mr-1.5">
          {" "}
          <FcAbout />
        </span>
        About Page{" "}
      </div>
      <main className="flex-centered h-72 pt-20 sm:pt-0">
        <div className="-mt-20 dark:text-gray-50 font-light font-raleway px-3 text-xl ">
          This website makes use of the{" "}
          <a
            className="font-medium text-indigo-700 dark:text-yellow-500"
            target="_blank"
            rel="noreferrer"
            href="https://pixabay.com/api/docs/"
            title="API Doc"
          >
            Pixabay API
          </a>{" "}
          to display trending pictures from{" "}
          <a
            className="font-medium text-indigo-700 dark:text-yellow-500"
            target="_blank"
            rel="noreferrer"
            href="https://pixabay.com"
            title="Pixabay"
          >
            Pixabay Website.
          </a>{" "}
          <br />
          It hosts over 1.9 million+ high quality stock images, videos and
          music.
          <div className="mt-5">
            Technical Stack required to build this website:
            <ul className="pl-4">
              <li className="pt-3">
                <SiReact className="icons  " />
                <strong>React JS</strong>
              </li>
              <li className="pt-3">
                <SiTailwindcss className="icons  " />
                <strong>Tailwind CSS</strong>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
