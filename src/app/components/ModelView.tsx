import React, { useRef, useEffect, useState } from "react";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import Anti from "./Anti";
import { Suspense } from "react";

const ModelView: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);
  const requestRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(false);
  const [scale, setScale] = useState([0.6, 0.6, 0.6]);

  useEffect(() => {
    const animate = () => {
      if (modelRef.current && !isPaused) {
        modelRef.current.rotation.y += 0.005;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScale([0.5, 0.5, 0.5]);
      } else {
        setScale([0.6, 0.6, 0.6]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUserInteraction = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 600);
  };

  return (
    <View className="w-full h-full absolute z-[1000]">
      <PerspectiveCamera makeDefault position={[6, 2, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onStart={handleUserInteraction}
        onEnd={handleUserInteraction}
      />
      <group position={[0, -0.6, 0]} ref={modelRef}>
        <Suspense fallback={<Loader />}>
          <Anti scale={scale} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
