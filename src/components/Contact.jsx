import styled from "styled-components";
import MapChart from "./Mapchart";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center; /* posicion del scroll en cada slide  en este caso el centro */
  @media only screen and (max-width:760px){ 
    margin-top:40px;
  }
`

const Container= styled.div`
    height:100%;
    width: 100%;
    display: flex;
    justify-content: space-between; /* separate left from right */
    @media only screen and (max-width:760px){ 
    flex-direction:column;
    gap:40px;
    margin-top:40px;

  }
`

const Left= styled.div`
   flex:1;
   display:flex;
   flex-direction: column;
   justify-content: center; /* center en el main axis, en este caso el vertical porque es flex column */
   align-items: center;
   @media only screen and (max-width:760px){ 
    flex-direction:column;
  }
`

const Right= styled.div`
    flex:1;
`

const Form = styled.form`
    width: 500px;
    display:flex;
    flex-direction: column;
    gap:30px;
    @media only screen and (max-width:760px){ 
        width:300px;
        gap:20px;
  }
 
`

const Title = styled.h1`
    font-size: 50px;
    color: white;
    font-family: bold;

`
const Input = styled.input`
    padding: 10px;
    border-radius: 6px;
`;

const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 6px;
`;

const Button = styled.button`
    padding: 12px;
    border-radius: 6px;
    background-color: purple;
    font-family: bold;
    cursor: pointer;
    font-size:20px;
`;




function Contact() {


    const formulario = useRef();

    const handleSubmit = e => {
        e.preventDefault() /* evita que la pagina se refresque al enviar el mensaje */
        emailjs.sendForm('service_t5bi11m', 'template_5x2l7ht', formulario.current, 'EiHQ4Jazd2vrNaLns')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    


  return (
    <Section id="contact">
        <Container>
            <Left>
                <Form onSubmit={handleSubmit} ref={formulario}>
                    <Title>Contact me</Title>
                    <Input placeholder="Name" type="text" name="user_name"></Input>
                    <Input placeholder="Email" type="email" name="user_email"></Input>
                    <TextArea placeholder="Write your message" rows={8} name="message"></TextArea>
                    <Button type="submit">Send</Button>
                </Form>

            </Left>


            <Right>
                <MapChart></MapChart>
            </Right>
        </Container>
    </Section>
  )
}

export default Contact