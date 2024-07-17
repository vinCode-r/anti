"use client";
import Button from "../components/ui/Button";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-full max-w-[88rem] flex flex-col justify-center items-center py-12">
      {/* <h1 className="text-5xl text-white font-bold bg-gradient-to-r bg-clip-text from-primary to-green-300 text-transparent my-2">
        ANTI
      </h1> */}
      <h1 className="text-white/90 text-center text-4xl font-bold my-3 leading-[44px]">
        Automated <br />
        Navigation & Trash Identification
      </h1>
      <p className="text-white/85 text-xl font-semibold my-2">
        For Habits, Cleaner Environment
      </p>
      <div className="flex justify-center items-center space-x-8 my-7">
        <Button title="Design" color="primary" onClick={() => {}} />
        <Button title="System" color="primary" onClick={() => {}} />
      </div>
      <div className="w-full px-12">
        <div className="bg-gradient-to-r from-primary to-green-200 rounded-xl w-full h-[56vh] p-2 mt-8">
          <div className="w-full h-full bg-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
