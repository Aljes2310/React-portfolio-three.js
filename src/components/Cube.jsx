
import {  PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";


function Cube() {
  return (
    <mesh>
                <boxGeometry  args={[2,2,2]}></boxGeometry> {/* args para elegir el tamaño */}
                <meshStandardMaterial>
                    <RenderTexture attach="map">
                        <PerspectiveCamera makeDefault position={[0,0,2]}/>
                        <color attach="background" args={["pink"]}></color>
                        <Text fontsize={7} color="black">hello</Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </mesh>
  )
}

export default Cube