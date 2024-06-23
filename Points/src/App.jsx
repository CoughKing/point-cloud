import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Pcloud from "./components/Pcloud";

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Canvas>
        <Pcloud
          rotation={[Math.PI, 0, 0]}
          material-size={0.001}
          material-color="red"
        />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
