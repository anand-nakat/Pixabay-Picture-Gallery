import React from "react";

const Loading = () => {
  return (
    <main className="h-96 min-w-full flex justify-center items-center ">
      <div
        className=" animate-bounce bg-blue-300 dark:bg-yellow-300 
       dark:text-yellow-700 font-semibold h-34 p-4 rounded-full text-3xl text-blue-700 text-center tracking-wider w-34"
      >
        Loading...
      </div>
    </main>
  );
};

export default Loading;
