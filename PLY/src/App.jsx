import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { PLYLoader } from "three-stdlib";
import * as THREE from "three";



function Beard() {
  const ply = useLoader(PLYLoader, "example.ply");
  const mesh = useRef();

  useEffect(() => {
    ply.computeVertexNormals();
  }, [ply]);

  return (
    <points ref={mesh} geometry ={ply}>
      <pointsMaterial attach="material" size={0.1} color="white" />
    </points>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white" }}>{progress.toFixed(0)}% Loaded</div>
    </Html>
  );
}

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Canvas >
        <ambientLight intensity={0.5} />
        <axesHelper args={[30]} />
        <Suspense fallback={<Loader />}>
          <Beard />
        </Suspense>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default App;
