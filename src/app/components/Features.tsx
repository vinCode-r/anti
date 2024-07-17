"use client";
import React, { useState } from "react";

const Features = () => {
  const [selected, setSelected] = useState("Automatic_Trash_Collection");

  const handleClick = (title: string) => {
    setSelected(title);
  };

  return (
    <div className="min-h-[80vh] w-full max-w-[88rem] py-8">
      <h1 className="text-white/80 md:text-5xl text-4xl font-bold text-center mb-4">
        Features
      </h1>

      <div className="lg:hidden flex justify-center items-center w-full mx-auto my-2">
        <button
          className={`border-b md:text-md sm:text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all ${
            selected === "Automatic_Trash_Collection"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("Automatic_Trash_Collection")}
        >
          Automatic Trash Collection
        </button>
        <button
          className={`border-b md:text-md sm:text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all ${
            selected === "Smart_Trash_Identification"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("Smart_Trash_Identification")}
        >
          Smart Trash Identification
        </button>
      </div>

      <div className="w-full mx-auto flex items-center justify-center lg:my-6 my-2">
        <button
          className={`border-b xl:text-[1rem] md:text-md sm:text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all lg:block hidden ${
            selected === "Automatic_Trash_Collection"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("Automatic_Trash_Collection")}
        >
          Automatic Trash Collection
        </button>

        <button
          className={`border-b xl:text-[1rem] text-ms text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all ${
            selected === "AutoOpen"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("AutoOpen")}
        >
          Auto-Open
        </button>
        <button
          className={`border-b xl:text-[1rem] text-ms text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all ${
            selected === "AutoBack"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("AutoBack")}
        >
          Auto-Back
        </button>
        <button
          className={`border-b xl:text-[1rem] text-ms text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all ${
            selected === "Hello-ANTI"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("Hello-ANTI")}
        >
          Hello-ANTI
        </button>
        <button
          className={`border-b xl:text-[1rem] text-ms text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all ${
            selected === "Smart_Link"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("Smart_Link")}
        >
          Smart-Link
        </button>
        <button
          className={`border-b xl:text-[1rem] text-ms text-sm text-xs leading-[20px] sm:leading-[28px] px-3 transition-all lg:block hidden ${
            selected === "Smart_Trash_Identification"
              ? "text-white border-white"
              : "text-white/50 border-white/50"
          }`}
          onClick={() => handleClick("Smart_Trash_Identification")}
        >
          Smart Trash Identification
        </button>
      </div>
    </div>
  );
};

export default Features;
