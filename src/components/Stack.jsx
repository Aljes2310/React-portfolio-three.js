import styled from "styled-components"
import Boxready from "./Box";
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text} from "@react-three/drei";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center; /*  */
`

const Container=styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction: column;
align-items: center;
`


const Texto= styled.div`
display:flex;
flex-direction: column;
align-items: center;
gap:30px;
width: 1000px;
`

const Title= styled.h1`
  font-size: 60px;
  margin-top: 40px;
  color:white;
  font-family: bold;
  font-weight: 700;
  `

const Description=styled.p`
  font-size: 30px;
  color:black;
  font-family: 'monospace';
  font-weight: 500;
`

const Boxes=styled.div`
display:flex;
flex-direction: row;
justify-content: center;
  width: 100%;
  height: 100%;


`


const stack = () => {
  return (
    <Section id="stack">
      <Container>
        <Texto>
         <Title> Stack </Title>
          <Description> My core is Back End Development in Python, Node.js Java, SQL 
            . I have Front End Skills in HTML, CSS, Tailwindcss and Sveltee. Besides I have knowledge
            in tools and techonologies as Docker, Supabase, Git, Jest. </Description>
        </Texto>
        
      
    <Boxes>
    <Boxready x_positivo={"/django.svg"} x_negativo={"/flask.png"}  y_positivo={"/python.jpg"} 
    y_negativo={"/rest.png"} z_positivo={"/rest.png"} z_negativo={"/rest.png"}/>

    <Boxready x_positivo={"/ts.png"} x_negativo={"/node.png"} y_positivo={"/js.png"} 
    y_negativo={"/expressjs-ar21.png"} z_positivo={"/expressjs-ar21.png"} z_negativo={"/react.png"}/>

<Boxready x_positivo={"/sveltee.png"} x_negativo={"/html.jpg"} y_positivo={"/tailwind.png"} 
    y_negativo={"/html.jpg"}  z_positivo={"/css.avif"} z_negativo={"/css.avif"}/>

     <Boxready x_positivo={"/git.png"} x_negativo={"/GitHub.png"} y_positivo={"/docker.webp"} 
      y_negativo={"/mysql.png"} z_positivo={"/mysql.png"} z_negativo={"/mongo.png"}/>
      
    </Boxes>
     
    



      </Container>
    </Section>
  )
}

export default stack