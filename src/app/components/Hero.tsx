"use client";
import Button from "../components/ui/Button";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="w-full h-full max-w-[88rem] flex flex-col justify-center items-center py-12 z-[100] min-h-screen">
      <h1
        className="text-white/95 text-center md:text-4xl text-[2rem] font-bold my-3 md:leading-[44px] leading-[42px] title"
        data-aos="zoom-in"
      >
        Automated <br />
        Navigation & Trash Identification
      </h1>
      <p className="text-xl font-semibold my-2 subtitle">
        For Habits, Cleaner Environment
      </p>
      <div className="flex justify-center items-center md:space-x-8 space-x-4 my-7">
        <Button
          title="Design"
          classname="scale-95"
          onClick={() => {}}
          link={"design"}
        />
        <Button
          title="Features"
          classname="scale-105"
          onClick={() => {}}
          link="features"
        />
        <Button
          title="Team"
          classname="scale-95"
          onClick={() => {}}
          link="team"
        />
      </div>
      <div className="md:w-5/6 w-full md:px-12 px-8">
        <div className="hero w-full h-[56vh] rounded-xl p-2">
          <div className="w-full h-full bg-zinc-950 rounded-xl flex justify-center items-center">
            <h1 className="text-zinc-800  md:text-5xl text-3xl text-stroke text-center ">
              COMING SOON..
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
