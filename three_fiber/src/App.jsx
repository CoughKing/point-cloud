import {Canvas,useFrame} from '@react-three/fiber'
import {useRef} from 'react'

const Cube = ({position, size, color}) => {

  const ref = useRef()
  
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y -= delta
    ref.current.position.z = Math.cos(state.clock.elapsedTime)*2
    console.log(state.clock.elapsedTime)
    
  })
  return (
    <mesh position={position} ref={ref}>
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
           <ambientLight intensity={0.5}/> 
          <directionalLight  position={[0,0,2]}/>
          <group position={[0,-1,0]}>
          <Cube position={[1,0,0]} color="red"/>
          <Cube position={[-1,0,0]}  size={[1,1,1]}color="blue"/>
          <Cube position={[1,2,0]} color="yellow"/>
          <Cube position={[-1,2,0]} color="green"/>
          </group>

        </Canvas>
      </div>
    </>
  )
}

export default App
