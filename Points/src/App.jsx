import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';





function App() {
  return (
    <div className='App'>
      <Canvas
        camera={{
          fov: 75,
          aspect: 2,
          near: 0.1,
          far: 1000,
          position: [0,0,20],
          rotation: [0,0,0]
        }}
      >               
        <Points/> 
               
        <OrbitControls/>
      </Canvas>
    </div>
  )

}


export default App