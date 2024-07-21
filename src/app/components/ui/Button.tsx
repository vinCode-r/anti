"use client";
import React from "react";

const Button = ({
  title,
  classname,
  onClick,
  link,
}: {
  title: String;
  classname?: String;
  onClick: () => void;
  link: string;
}) => {
  return (
    <a
      href={`#${link}`}
      onClick={onClick}
      className={`border-2 border-teal-300 md:px-7 px-5 py-2 rounded-md text-white font-medium hover:bg-teal-300 hover:text-black duration-150 text-md ${classname}`}
    >
      {title}
    </a>
  );
};

export default Button;
