import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.logouthandle}
      className="w-full bg-darkRed1 text-whiteClr 
    rounded-xl hover:bg-darkRed2 transition-all 
    duration-75 ease-linear px-20 py-4 mt-6 md:mt-4  
    text-center text-2xl tracking-wider  cursor-pointer font-extrabold"
    >
      {props.children}
    </button>
  );
};

export default Button;
