import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import styled from 'styled-components';

export function Box({x_positivo, x_negativo, y_positivo, y_negativo, z_positivo, z_negativo}) {
  const map = useTexture([
    x_positivo, // pos-x
    x_negativo, // neg-x
    y_positivo, // pos-y
    y_negativo,// neg-y
    z_positivo, // pos-z
    z_negativo                   // neg-z
  ]);
  const meshRef = useRef();
  useFrame((state, delta) => {
    // adjust object position
    if (meshRef.current) {
      meshRef.current.rotation.x = delta/2;
      meshRef.current.rotation.y = 0 /* rotation 0 en el y */
    }
  });
  
  return (
    <mesh ref={meshRef} rotation-y={0}>
      <boxBufferGeometry args={[3, 3, 3]} />
      {map.map((texture, idx) => (
        <meshBasicMaterial
          key={texture.id}
          attach={`material-${idx}`} /* identifica cada cara con la iamgen */
          map={texture}
          side={THREE.FrontSide}
          speed={10}
        />

      ))}
    </mesh>
  );
}


const Container= styled.div`
    scroll-snap-align: center;
`



export default function Boxready({x_positivo, x_negativo, y_positivo, y_negativo, z_positivo, z_negativo}) {

  return (
    <Container>
        <Canvas camera={{fov:75, position:[5,5,5]}} frameloop='demand'> {/* fov change size */}
            <OrbitControls enableZoom={false} autoRotate></OrbitControls>
            <ambientLight intensity={1}></ambientLight>
            <directionalLight position={[1,2,3]}></directionalLight> {/* diferentes posiciones para diferenciar los lados */}
        
           <Box x_positivo={x_positivo}
        x_negativo={x_negativo}
        y_positivo={y_positivo}
        y_negativo={y_negativo}
        z_positivo={z_positivo}
        z_negativo={z_negativo}>

<MeshDistortMaterial
                
                  speed={100}
                />

        </Box>
          
   
      </Canvas>
      </Container>
  );
}


/* When React calls our useFrame hook, it gives us a state object of the Three.js scene, 
and a clock delta indicating how many milliseconds since the last time the delta was set. 
The delta time shows the milliseconds between renders and can be used to change an object over 
time at a consistent speed independent of the clients frame rate. */