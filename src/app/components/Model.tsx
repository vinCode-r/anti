"use client";

import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  return (
    <section className="w-full max-w-[88rem] min-h-[90vh] px-8">
      <h1 className="text-white md:text-5xl text-4xl font-bold text-center mb-8">
        Take a{" "}
        <span className="text-transparent bg-gradient-to-r from-primary to-green-200 bg-clip-text">
          Deeper
        </span>{" "}
        Look
      </h1>

      <div className="md:w-2/3 w-full mx-auto md:h-[90vh] h-[61vh] border-2 bg-zinc-800 border-zinc-800 rounded-2xl p-1">
        <div className="w-full h-full overflow-hidden relative bg-black/80">
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

          <div className="absolute w-1/2 h-1/2 gradient top-0 left-0" />
        </div>
      </div>
    </section>
  );
};

export default Model;
