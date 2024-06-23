import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { PLYLoader } from "three-stdlib";
import * as THREE from "three";

function Beard() {
  const ply = useLoader(PLYLoader, "points.ply");
  const mesh = useRef();

  useEffect(() => {
    ply.computeVertexNormals();
  }, [ply]);

  return (
    <points ref={mesh} geometry={ply}>
      <pointsMaterial attach="material" size={0.1} color="black" />
    </points>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-black">{progress.toFixed(0)}% Loaded</div>
    </Html>
  );
}

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <axesHelper args={[30]} />
        <Suspense fallback={<Loader />}>
          <Beard />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
