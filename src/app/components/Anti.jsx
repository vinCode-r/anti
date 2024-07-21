import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model(props) {
  const { nodes, materials } = useGLTF("/scene.glb");

  const brightBlueMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x00bfff),
    emissive: new THREE.Color(0x0080ff),
    metalness: 0.5,
    roughness: 0.2,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={brightBlueMaterial}
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
