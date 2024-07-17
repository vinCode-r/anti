"use client";
import React from "react";

const Button = ({ title, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-primary px-7 py-2 rounded-md text-white/90 font-medium hover:bg-primary hover:text-black duration-150 text-md`}
    >
      {title}
    </button>
  );
};

export default Button;
