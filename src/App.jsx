import styled from "styled-components"
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

const Container = styled.div`
  height: 100vh; /* no cambiar a 100% que deja de funcionar los efectos que siguen */
  scroll-snap-type: y mandatory; /* donde se controla el scroll */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./bg.jpg");
  &::-webkit-scrollbar{
    display: none            /* desaprece el scrollbar */
  }
  @media only screen and (max-width:760px){
}

`

function App() {

  return (
    <Container>
      <Hero ></Hero>
      <Stack ></Stack>
      <Projects ></Projects>
      <Contact ></Contact>
    </Container>

  )
}

export default App
