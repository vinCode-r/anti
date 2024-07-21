"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TEXT = [
  {
    Automatic_Trash_Collection:
      "ANTI robot to collect trash independently, operate without human assistance, and maintain efficiency in any environment.",
  },
  {
    Smart_Trash_Identification:
      "ANTI can differentiate between various types of waste. By using YOLO technology, ANTI robots can detect and identify various types of waste.",
  },
  {
    AutoOpen:
      "ANTI can open the trash can when there is rubbish detected nearby or when the system detects a human wanting to throw rubbish into it.",
  },
  {
    AutoBack:
      "ANTI can return to its original position if the battery level reaches 5% or less",
  },
  {
    Hello_ANTI:
      "A feature that facilitates communication between humans and the system, allowing users to interact with or give instructions to the ANTI robot.",
  },
  {
    Smart_Link:
      "A feature that enables users to track the robot's performance in real-time and view data collected by the ANTI robot.",
  },
] as const;

type FeatureKey = keyof (typeof TEXT)[number];
const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 250,
      once: true,
    });
  }, []);

  const [selected, setSelected] = useState<FeatureKey>(
    "Automatic_Trash_Collection" as FeatureKey
  );

  const handleClick = (title: FeatureKey) => {
    setSelected(title);
  };

  return (
    <div
      className="min-h-[60vh] w-full max-w-[88rem] py-16 pb-36 z-[100]"
      id="features"
      data-aos="fade-up"
    >
      <h1 className="text-primary md:text-5xl text-4xl font-bold text-center mb-12 ">
        Features
      </h1>

      <div className="lg:hidden flex justify-center items-center w-full mx-auto my-2">
        <button
          className={`border-b md:text-md sm:text-sm text-xs leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all ${
            selected === "Automatic_Trash_Collection"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() =>
            handleClick("Automatic_Trash_Collection" as FeatureKey)
          }
        >
          Automatic Trash Collection
        </button>
        <button
          className={`border-b md:text-md sm:text-sm text-xs leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all ${
            selected === "Smart_Trash_Identification"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() =>
            handleClick("Smart_Trash_Identification" as FeatureKey)
          }
        >
          Smart Trash Identification
        </button>
      </div>

      <div className="w-full mx-auto flex items-center justify-center lg:my-6 my-2">
        <button
          className={`border-b xl:text-[1rem] md:text-md text-sm leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all lg:block hidden ${
            selected === "Automatic_Trash_Collection"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() =>
            handleClick("Automatic_Trash_Collection" as FeatureKey)
          }
        >
          Automatic Trash Collection
        </button>

        <button
          className={`border-b xl:text-[1rem] md:text-md text-sm leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all ${
            selected === "AutoOpen"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() => handleClick("AutoOpen" as FeatureKey)}
        >
          Auto-Open
        </button>
        <button
          className={`border-b xl:text-[1rem] md:text-md text-sm leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all ${
            selected === "AutoBack"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() => handleClick("AutoBack" as FeatureKey)}
        >
          Auto-Back
        </button>
        <button
          className={`border-b xl:text-[1rem] md:text-md text-sm leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all ${
            selected === "Hello_ANTI"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() => handleClick("Hello_ANTI" as FeatureKey)}
        >
          Hello-ANTI
        </button>
        <button
          className={`border-b xl:text-[1rem] md:text-md text-sm leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all ${
            selected === "Smart_Link"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() => handleClick("Smart_Link" as FeatureKey)}
        >
          Smart-Link
        </button>
        <button
          className={`border-b xl:text-[1rem] md:text-md text-sm leading-[20px] sm:leading-[28px] sm:px-3 px-2 transition-all lg:block hidden ${
            selected === "Smart_Trash_Identification"
              ? "text-white border-white"
              : "text-white/25 border-white/25"
          }`}
          onClick={() =>
            handleClick("Smart_Trash_Identification" as FeatureKey)
          }
        >
          Smart Trash Identification
        </button>
      </div>

      <p className="text-white/65 md:text-2xl sm:text-lg text-md text-center max-w-[780px] mx-auto md:mt-20 mt-12 px-12">
        {TEXT.find((item) => Object.keys(item)[0] === selected)?.[selected] ||
          ""}
      </p>
    </div>
  );
};

export default Features;
