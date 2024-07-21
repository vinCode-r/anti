"use client";
import React, { useEffect, useState } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Design() {
  useEffect(() => {
    AOS.init({
      duration: 250,
      once: true,
    });
  }, []);

  return (
    <section id="design" className="w-full min-h-[80vh] z-[100]">
      <h1
        className="text-center text-white/85 md:text-5xl text-4xl font-bold"
        data-aos="fade-up"
      >
        ANTI <span className="text-primary">Design</span>
      </h1>
      <div className="lg:h-[140] md:h-[100vh] h-[160vh] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl sm:text-3xl text-2xl text-primary">
        Designed Perfectly
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal md:text-lg sm:text-md text-sm my-2 max-w-lg text-neutral-200">
        ANTI is perfectly designed to have a cute and unique appearance for
        interacting with humans
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl sm:text-3xl text-2xl text-primary">
        Flexible Arms
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal md:text-lg sm:text-md text-sm my-2 max-w-lg text-neutral-200">
        The arms on ANTI is designed to be able to pick up various types of
        waste
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl sm:text-3xl text-2xl text-primary">
        Cute and Adorable Design
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal md:text-lg sm:text-md text-sm my-2 max-w-lg text-neutral-200">
        The unique body combined with the cute head increases human interest in
        interacting with ANTI
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl sm:text-3xl text-2xl text-primary">
        Strong Frame
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal md:text-lg sm:text-md text-sm my-2 max-w-lg text-neutral-200">
        The frame of the ANTI robot is designed to withstand the entire load
        placed on it
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/fullbody.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/lengan.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/body.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/rangka.webp",
  },
];
