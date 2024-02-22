import React from 'react'

{/* <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    className="w-full mt-1 bg-gray-300 text-gray-600 tracking-wider text-md  font-medium px-6 py-3 rounded-md outline-none border-0 "
/> */}

const InputText = ({type,name,inputvalue,onInputChange,labelFor,title}) => {
  return (
   <>
       <label
    htmlFor={labelFor}
    className="text-md text-gray-800 font-semibold"
  >
    {title}:
  
    <input
    type={type}
    name={name}
    value={inputvalue}
    onChange={onInputChange}
    className="w-full mt-1 bg-gray-300 text-gray-600 tracking-wider text-md  font-medium px-6 py-3 rounded-md outline-none border-0 "
    />
    </label>
   </>
  )
}

export default InputText