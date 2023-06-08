import React from 'react'
import styled from 'styled-components'

const Borde=styled.div`
        max-width:300px;
        height: 500px;
		margin:15px;
		background:#fff;
		border:1px solid #CB6074;
		text-align:center;
		cursor:pointer;
        box-shadow: 0px 6px 11px 6px rgba(0, 0, 0, 0.8); /* h-offest, v-offset, blurr, radius of shadow */
`

const Imagen=styled.img`
opacity:0.8;
height:180px;
width:100%;
border-bottom:4px solid #CB6074;
`

const Title=styled.h1`
    font-size:32px;
	margin-top:5px;
	font-family: 'Oswald', sans-serif;	
	text-align:center;
`

const Texto = styled.p`
  padding: 20px;
`
const Toolscol = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
gap:15px;
`

const Toolsrow = styled.div`
display: flex;
flex-direction: row;
gap:20px;
justify-content: center;
align-items: center;

`


const Tool = styled.span`
background-color: pink;
padding:10px;
border-radius: 5px;
font-family: monospace;
`

function Card({titulo, descripcion, tools, imagen, link_img}) {
  return (
    <Borde>
        <Imagen src={imagen} href={link_img}/>
        <Title> {titulo} </Title>
        <Texto> {descripcion}</Texto>
        <Toolscol> 
          <Toolsrow>
            <Tool>{tools[0]}</Tool>
            <Tool>{tools[1]}</Tool>
          </Toolsrow>
          <Toolsrow>
            <Tool>{tools[2]}</Tool>
            <Tool>{tools[3]}</Tool>
          </Toolsrow>
        </Toolscol>
    </Borde>
  )
}

export default Card