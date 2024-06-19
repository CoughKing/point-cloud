import {Canvas} from '@react-three/fiber'

const Cube = ({position, size, color}) => {
  return (
    <mesh position={position}>
            <boxGeometry args={size}/>
            <meshStandardMaterial color={color}  />
          </mesh>
  )
}



function App() {
  

  return (
    
      
      <>
      <div className="h-screen flex items-center justify-center">
        <Canvas >
          {/* <ambientLight intensity={8}/> */}
          <directionalLight  position={[0,0,2]}/>
          <Cube position={[1,0,0]} color="red"/>
          <Cube position={[-1,0,0]}  size={[1,1,1]}color="blue"/>
          <Cube position={[1,2,0]} color="yellow"/>
          <Cube position={[-1,2,0]} color="green"/>

        </Canvas>
      </div>
    </>
  )
}

export default App
