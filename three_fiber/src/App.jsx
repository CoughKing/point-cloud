import {Canvas} from '@react-three/fiber'


function App() {
  

  return (
    
      
      <>
      <div className="flex f">
        <Canvas >
          <ambientLight intensity={0.1}/>
          <directionalLight color = "red" postion={[0,0,5]}/>
          <mesh>
            <boxGeometry args={[4,4,4]}/>
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  )
}

export default App
