import React from "react";
import { Link } from "react-router-dom";
import wedding_couple from "../assets/icons/wedding_couple.svg";
import google from "../assets/google.svg";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center mt-8  mx-auto mb-4">
      <div className="w-full h-auto md:w-[600px] md:h-[500px]">
        <img className="w-full" src={wedding_couple} alt="wedding_couple" />
      </div>

      <div className="flex items-center flex-col gap-4 px-4 md:px-0">
        <p className="text-[38px] md:text-4xl tracking-widest font-bold py-2">
          Let us plan for you
        </p>
        <p
          className="text-darkGrey1 tracking-wider text-2xl md:text-3xl text-center py-2 
        font-semibold opacity-90"
        >
          Keep calm and be fast with us
        </p>
        <p className="text-darkGrey2 tracking-wider text-2xl font-semibold opacity-90 py-4 mb-4">
          Already have an account ?{" "}
          <Link
            className="text-darkRed1 text-md font-extrabold underline cursor-pointer"
            to="/login"
          >
            Log in?
          </Link>
        </p>

        <Link
          className="w-full md:w-[500px] bg-darkRed1 text-whiteClr text-center tracking-wide 
          rounded-md px-20 py-4 md:py-6 text-xl md:text-2xl cursor-pointer font-extrabold
           hover:bg-darkRed2 transition-all duration-75 ease-linear"
          to="/signup"
        >
          Sign up with email
        </Link>
        <Link
          className="w-full md:w-[500px] flex items-center gap-2 md:gap-4
           bg-whiteClr text-darkRed1 text-center tracking-wide
            rounded-md px-20 py-2 md:py-4 text-xl md:text-2xl cursor-pointer 
            font-extrabold border-2 border-darkRed1 hover:border-darkRed2 
            transition-all duration-75 ease-linear mb-4 md:mb-0"
          to="/signup"
        >
          <img src={google} alt="google" />
          Sign up with Google
        </Link>
      </div>
    </div>
  );
};

export default Home;
