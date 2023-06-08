import styled from "styled-components"
import Card from "./Card";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';



const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center; /* posicion del scroll en cada slide  en este caso el centro */
`
const Container = styled.div`
width: 100%;
height:100hv;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Title= styled.h1`
  font-size: 60px;
  margin-top: 40px;
  color:white;
  font-family: bold;
  font-weight: 700;
  `


const Cards= styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
margin-top: 40px;
gap: 30px;

`


function Projects() {
  return (
    <Section id="projects">
      <Container>
          <Title> Projects </Title>

          <Cards>
         
            <Card imagen={"headphone.JPG"} titulo={"Playlist API Rest"} descripcion="API REST TypeScript + Express. Models created by Prisma as ORM . Using this API REST you can save your music and create Playlist through json requests. Click on the screen you will get to the repository in github." 
            tools={["Node.js", "Typescript", "Express", "Bcrypt-Jwt"]} link_img= 'https://github.com/RenatoCespedes/playlist-project' ></Card>
            <Card imagen={"paymentapi.jpg"} titulo={"Payments API Rest"} descripcion="API REST Django. Using this API REST you can create and modify your services, make payments for services, show payments. Click on the screen you will get to the repository in github." 
            tools={["Django", "rest-framework", "Sqlite", "jsonwebtoken"]} link_img='https://github.com/Aljes2310/API-Pagos-Servicios'></Card>
            <Card imagen={"streamlit-portfolio.JPG"} titulo={"Streamlit Dashboard"} descripcion="Little and simple dashboard using Python and deployed in Streamlit Cloud. Deployed for purpose of research Click on the screen you will get to the dashboard." 
            tools={["Python", "Plotly", "Streamlit", "Folium"]} link_img={'https://aljes2310-streamlit-cpue-calamar-gigante-dashboard-app-eal9da.streamlit.app/'}></Card>
            <Card imagen={"health.JPG"} titulo={"Health Tracker"} descripcion="App web that help you to remember your medication or pills easily. Just fill out the form with the start and final date, hours interval , text and you will recieve a recordatory message at the exact time that you need to take you medicine." 
            tools={["Twilio", "Express.js", "Typescript", "React"]} link_img='https://health-tracker-frontend-peach.vercel.app/' ></Card>

          </Cards>
      </Container>
    </Section>
  )
}

export default Projects