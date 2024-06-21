import React from 'react'

function Points() {
    const positions = new Float32Array(
        [-10,0,0, 
          10,0,0]);
    const colors = new Float32Array(
        [1,0.5,0.5,
          1,0.5,0.5]);
  
    return (
      <points>
          <bufferGeometry attach="geometry">
  
  
            <bufferAttribute
                attach="attributes-position"
                count={positions.length / 3}
                array={positions}
                itemSize={3}
                
              />
              <bufferAttribute
                attach="attributes-color"
                count={colors.length / 3}
                array={colors}
                itemSize={3}
                
              />
          </bufferGeometry>
          <pointsMaterial attach="material" vertexColors size={10} sizeAttenuation={false} />
      </points>
    );
  
  }
  

export default Points