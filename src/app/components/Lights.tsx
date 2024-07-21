import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, -10, 1]}
            scale={10}
            color="#adb5bd"
          />
          <Lightformer
            form="rect"
            intensity={2}
            position={[-1, 0, -10]}
            scale={10}
            color="#adb5bd"
          />
          <Lightformer
            form="rect"
            intensity={2}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
            color="#ced4da"
          />
          <Lightformer
            form="rect"
            intensity={2}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
            color="#dee2e6"
          />
        </group>
      </Environment>
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1}
        decay={20}
        intensity={Math.PI * 2}
        color="#f8f9fa"
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={20}
        intensity={Math.PI * 2}
        color="#e9ecef"
      />
      <spotLight
        position={[0, 15, 5]}
        angle={1}
        penumbra={1}
        decay={0.5}
        intensity={Math.PI * 2}
        color="#f1f3f5"
      />

      <ambientLight intensity={0.9} color="#f8f9fa" />
    </group>
  );
};

export default Lights;
