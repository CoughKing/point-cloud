import {Canvas,useFrame} from '@react-three/fiber'
import {useRef, useState} from 'react'




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


const Sphere = ({position, size, color}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef()
  useFrame((state, delta) => {
      const speed = isHovered ? 2 : delta
      ref.current.rotation.x += speed
      ref.current.rotation.y += speed
      
  })

  
  return(
    <mesh 
      position={position} 
      ref={ref} 
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={()=> setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 0.5 : 1}
      >
      <sphereGeometry args={size}/>
      <meshStandardMaterial color={isHovered ? "indigo": "white"} wireframe/>
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
          <Sphere color={"indigo"}  args={[1, 64, 64]} />

        </Canvas>
      </div>
    </>
  )
}

export default App
