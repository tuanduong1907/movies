import React from "react";

const AppButton = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-primary btn-rounded w-full mt-auto ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default AppButton;
