import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center mt-8  mx-auto">
      <div className="w-[300px] h-[300px] bg-gray-300 flex items-center justify-center rounded-full">
        <p className="text-gray-600 font-semibold text-2xl">Motion animation</p>
      </div>

      <div className="flex items-center flex-col gap-4">
        <Link
          className="w-full md:w-[350px] bg-gray-300 text-center rounded-md px-20 py-4 text-md cursor-pointer font-bold hover:bg-gray-400 transition-all duration-75 ease-linear"
          to="/signup"
        >
          Sign up
        </Link>
        <Link
          className="w-full md:w-[350px] bg-gray-300 text-center rounded-md px-20 py-4 text-md cursor-pointer font-bold hover:bg-gray-400 transition-all duration-75 ease-linear"
          to="/signup"
        >
          Google
        </Link>
        <Link
          className="w-full md:w-[350px] bg-gray-300 text-center rounded-md px-20 py-4 text-md cursor-pointer font-bold hover:bg-gray-400 transition-all duration-75 ease-linear"
          to="/signup"
        >
          Apple
        </Link>
        <Link className="text-end text-sm font-medium" to="/login">
          Have an account login here?
        </Link>
      </div>
    </div>
  );
};

export default Home;
