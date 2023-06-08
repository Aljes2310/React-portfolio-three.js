import styled from "styled-components"
import Hero from "./components/hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Test from "./components/Test";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory; /* donde se controla el scroll */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./bg.jpg");
  &::-webkit-scrollbar{
    display: none            /* desaprece el scrollbar */
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
