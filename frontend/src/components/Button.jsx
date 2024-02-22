import React from 'react'

const Button = (props) => {
  return (
    <button 
    onClick={props.logouthandle}
    className="w-full bg-gray-300 text-gray-800 rounded-md px-20 py-3  text-center text-lg cursor-pointer font-extrabold"
    >
      {props.children}
    </button>
  )
}

export default Button