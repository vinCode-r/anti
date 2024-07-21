import React from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/scene.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={materials.PaletteMaterial003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_2.geometry}
        material={materials.PaletteMaterial001}
      />
    </group>
  );
}

export default Model;

useGLTF.preload("/scene.glb");
