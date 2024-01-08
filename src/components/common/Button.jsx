import React from "react";

const Button = ({ btnText, style, icon, onclick }) => {
  return (
    <>
      {icon ? (
        <div
          onClick={onclick}
          className={`${style} cursor-pointer   border-black rounded-md  active:text-white active:bg-black flex gap-4 items-center`}
        >
          <i className={`fa-solid ${icon}`}></i>
          {btnText}
        </div>
      ) : (
        <div
          onClick={onclick}
          className={`${style} cursor-pointer text-xl font-bold  px-3 py-2  inline-block`}
        >
          {btnText}
        </div>
      )}
    </>
  );
};

export default Button;
