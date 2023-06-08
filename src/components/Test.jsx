import styled from "styled-components";
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text} from "@react-three/drei";
import Cube from "./Cube";
import {Box} from "./Box";



const Container= styled.div`
    height: 100vh;
    width:100%;
    scroll-snap-align: center;
`


function Test() {
   
  return (
    <Container>
        <Canvas camera={{fov:50, position:[5,5,5]}}> {/* fov change size */}
            <OrbitControls enableZoom={false} autoRotate></OrbitControls>
            <ambientLight intensity={1}></ambientLight>
            <directionalLight position={[1,2,3]}></directionalLight> {/* diferentes posiciones para diferenciar los lados */}
        
           <Box x_positivo={"/bg.jpg"}
        x_negativo={"/prog2.jpg"}
        y_positivo={"/prog2.jpg"}
        y_negativo={"/bg.jpg"}
        z_positivo={"/prog2.jpg"}/>
        </Canvas>
    </Container>
  )
}

export default Test