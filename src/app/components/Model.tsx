"use client";

import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";

const Model = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="w-full max-w-[88rem] min-h-[75vh] px-8">
      <h1
        className="text-white md:text-5xl text-4xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        Take a{" "}
        <span className="text-transparent bg-gradient-to-r from-primary to-green-200 bg-clip-text bg-transparent">
          Deeper
        </span>{" "}
        Look
      </h1>

      <div className="md:w-5/6 w-full mx-auto md:h-[80vh] h-[61vh] rounded-2xl z-[11]">
        <div className="w-full h-full relative rounded-2xl hero z-[10] p-1">
          <div className="bg-zinc-950 w-full h-full rounded-2xl">
            <ModelView />

            <Canvas
              className="w-full h-full"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
