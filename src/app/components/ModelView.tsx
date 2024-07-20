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

  const animate = () => {
    if (modelRef.current && !isPaused) {
      modelRef.current.rotation.y += 0.005;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused]);

  const handleUserInteraction = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 600);
  };

  return (
    <View className="w-full h-full absolute z-[10]">
      <ambientLight intensity={0.3} />
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
      <group position={[0, -0.8, 0]} ref={modelRef}>
        <Suspense fallback={<Loader />}>
          <Anti scale={[0.7, 0.7, 0.7]} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
