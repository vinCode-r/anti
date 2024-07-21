"use client";

import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";
import GradientText from "./ui/GradientText";

const Model = () => {
  useEffect(() => {
    AOS.init({
      duration: 250,
      once: true,
    });
  }, []);

  return (
    <section className="w-full max-w-[88rem] min-h-[75vh] px-10">
      <h1
        className="text-white md:text-5xl text-4xl font-bold text-center mb-8 z-[100]"
        data-aos="fade-up"
      >
        Take a <GradientText title="Deeper" /> Look
      </h1>

      <div className="md:w-5/6 w-full mx-auto md:h-[80vh] h-[61vh] rounded-2xl">
        <div className="w-full h-full rounded-2xl hero z-[1] p-1">
          <div className="bg-zinc-950 w-full h-full rounded-2xl relative">
            <ModelView />

            <Canvas
              className="w-full h-full px-16 "
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
            >
              <View.Port />
            </Canvas>
            <div className="w-full h-16 absolute left-0 right-0 top-[-4rem] z-[1000]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
