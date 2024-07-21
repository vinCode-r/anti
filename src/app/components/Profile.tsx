import React from "react";
import { FaInstagram } from "react-icons/fa";

const Profile = ({
  image,
  name,
  role,
  link,
}: {
  image: string;
  name: string;
  role: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-44 h-44 rounded-full gradient-border p-1">
        <img
          className="absolute inset-[5px] bg-black rounded-full z-[1] w-[10.5rem] h-[10.5rem] grayscale object-cover select-none pointer-events-none"
          src={image}
          alt="pic"
        />
      </div>
      <h1 className="text-white text-[1.09rem] font-medium mt-4">{name}</h1>
      <p className="text-white/60 mt-2 text-md">{role}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaInstagram className="text-white/70  w-6 h-6 mt-2" />
      </a>
    </div>
  );
};

export default Profile;
