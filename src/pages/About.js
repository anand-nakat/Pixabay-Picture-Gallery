import React from "react";
import { SiTailwindcss, SiReact } from "react-icons/si";

const About = () => {
  return (
    <>
      <div
        className="border-yellow-500 dark:text-gray-50  m-auto mt-6 px-2 py-1 
      rounded text-3xl text-center text-gray-800 tracking-wide w-max mb-10"
      >
        About Page
      </div>
      <main className="flex-centered h-72">
        <div className="dark:text-gray-50 font-light text-xl -mt-14 px-3 ">
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
                <SiReact className="inline-block mr-3 dark:text-yellow-500 fill-current text-4xl text-indigo-700  " />
                <strong>React JS</strong>
              </li>
              <li className="pt-3">
                <SiTailwindcss className="inline-block mr-3 dark:text-yellow-500 fill-current text-4xl text-indigo-700  " />
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
