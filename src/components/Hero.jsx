import styled from "styled-components"
import Navbar from "./Navbar";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import Laptopcp from "./Laptopcp";

const Section = styled.section`
  display:flex;
  flex-direction: column;
  height: 100vh;
  scroll-snap-align: center; /* posicion del scroll en cada slide  en este caso el centro */
  align-items: center;
  justify-content: space-between;
@media only screen and (max-width:760px){
  justify-content:center;
}
`

const Container= styled.div`
    height:100%;
    width: 1500px;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width:760px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`

const Left= styled.div`
   display:flex;
   flex:1;
   flex-direction: column;
   gap: 5px;
   align-items: center;
   justify-content: center; /* center en el main axis, en este caso el vertical porque es flex column */
   @media only screen and (max-width:760px){
  width:100%;
  margin-top:40px;
}


`

const Right= styled.div`
  flex:1;
  /* position: relative; */
  margin-bottom: 50px;
  @media only screen and (max-width:760px){
    width: 100%;
    margin-bottom: 50px;
}
`


const Title= styled.p`
  font-family: bold;
  font-size: 70px;
  font-weight: 700;
  @media only screen and (max-width:760px){
    font-size: 40px;
}
`

const Subtitle= styled.p`
  font-family: monospace;
  font-size: 50px;
  font-weight: 400;
  color:white;
  @media only screen and (max-width:760px){
    font-size: 30px;
}

`

const Description= styled.p`
  margin-top: 30px;

`


/* const Imagen= styled.img`
  border-radius: 50%;
  width: 600px;
  height: 200px;
  object-fit: contain; que mande una escala que se vea bien 
  position: absolute; como el elemento es colocado 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 3s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateX(40px);
    }
  }
`;

 */

function Hero() {
  return (
    <Section id="hero">
        <Navbar></Navbar>
        <Container>
          <Left>
            <Title>Alfredo Alvarado</Title>
            <Subtitle>Back End Developer</Subtitle>
            <Description></Description>
          </Left>

          <Right>
            <Canvas camera={{fov:115, position:[5,5,5]}}>
              <Stage environment="city" intensity={0.6}> {/* city es la iluminacion */}
                <Laptopcp ></Laptopcp>
              </Stage>
              <OrbitControls enableZoom={false}></OrbitControls>
            </Canvas>



          {/* sphere
          <Canvas camera={{fov:20,  position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate></OrbitControls>
            <ambientLight intensity={1}></ambientLight>
            <directionalLight position={[1,2,3]}></directionalLight> 
            <MeshDistortMaterial color="purple" attach="material" distort={0.5} speed={3}/>
            </Sphere>
            </Canvas>
            <Imagen src="/programador.jpg" width={450} height={400}></Imagen>

         */}
          </Right>
        
        </Container>
      </Section>
  )
}

export default Hero