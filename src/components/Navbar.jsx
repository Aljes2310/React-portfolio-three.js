import styled from "styled-components"
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

const Section = styled.div`
  display: flex;
  justify-content: center; 
  @media only screen and (max-width:760px){
    width:100%;
  }
`

const Container = styled.div`
   width: 1000px;
    display: flex;
    justify-content: space-between; /* separa los elementos a los extremos */
    align-items: center; /* vertical */
    @media only screen and (max-width:760px){
    width:100%;
    flex-direction:column;
  }

`

const Links = styled.div`
display: flex;
  justify-content: center; 
  
`
const List = styled.ul`
display: flex;
  justify-content: center; 
  gap: 40px;
  list-style: none;
  padding: 20px;
  @media only screen and (max-width:760px){
    gap: 15px;
    margin-top:20px;
  }
    
`
const ListItem = styled.li`
font-size: 35px;
color: black;
font-family: monospace;
font-weight: 700;
@media only screen and (max-width:760px){
  font-size: 20px;
  }
    
`

const Icons= styled.div`
    display:flex;
    gap:30px;
    padding: 20px;
    margin-left: 100px;
    @media only screen and (max-width:760px){
    height: 20px;
    justify-content:center;
    align-items:center;
    margin-left:0px;
    margin-top:25px
  }

`
const Icon= styled.a`

`



/* 
const Logos = styled.div`
` */

function Navbar() {
  return (
    <BrowserRouter> 
    <Section>
        <Container>
            <Links>
                <List>
                    <ListItem><Link to='#hero' smooth>Home</Link></ListItem>
                    <ListItem><Link to="#stack" smooth>Stack</Link></ListItem>
                    <ListItem><Link to="#projects" smooth>Projects</Link></ListItem>
                    <ListItem><Link to="#contact" smooth>Contact</Link></ListItem>
                </List>
            </Links>

            <Icons>
            <Icon href="https://www.linkedin.com/in/alfredo-alvarado-espinoza-31058422a/" target="_blank"><AiFillLinkedin size={70}/></Icon>
            <Icon href="https://github.com/Aljes2310?tab=repositories" target="_blank"><BsGithub  size={70}/> </Icon>
            <Icon href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aljes2310@gmail.com" target="_blank"><AiOutlineMail  size={70}/></Icon>
            </Icons>
        </Container>
    </Section>
    </BrowserRouter>
  )
}

export default Navbar