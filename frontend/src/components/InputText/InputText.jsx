import React from "react";

const InputText = ({
  type,
  name,
  inputvalue,
  placeHolder,
  onInputChange,
  labelFor,
  title,
}) => {
  return (
    <>
      <label
        htmlFor={labelFor}
        className="text-2xl text-darkGrey2 tracking-wider font-medium"
      >
        {title}:
        <input
          type={type}
          name={name}
          value={inputvalue}
          onChange={onInputChange}
          placeholder={placeHolder}
          className="w-full mt-1 bg-lightRed2 text-darkGrey1 tracking-wider 
    text-2xl  font-bold px-4 py-4 
    rounded-2xl outline-none border-0 placeholder:text-darkGrey2 placeholder:text-2xl placeholder:opacity-60 "
        />
      </label>
    </>
  );
};

export default InputText;
