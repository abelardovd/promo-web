import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'


import promo1 from '../images/promo1.png'
import promo2 from '../images/promo2.png'



const Title = styled.h1`
  font-size: 4.5em;
  text-align: center;
  color:  #404040;
  
`
const Par1 = styled.h1`
padding: 100px 15px;

  font-size: 0.9em;
  text-align: center;
  color: black;
  position: absolute;
    left: 50px;
    top: 180px;
    border-width: 5px;
    border-style: solid;
    border-color: black;
    width: 30%;
    height: 40%;
    z-index: -1;
`

const Par2 = styled.h1`
padding: 100px 15px;

  font-size: 0.9em;
  text-align: center;
  color: black;
  position: absolute;
    left: 490px;
    top: 540px;
    border-width: 5px;
    border-style: solid;
    border-color: black;
    width: 40%;
    height: 40%;
    z-index: -1;
`

const Image = styled.img`
    background-color: #dcdcd4;
    margin-left: auto;
    margin-right: auto;
    width: 36%;
    position: absolute;
    left: 250px;
    top: 250px;
`

const Image2 = styled.img`
    background-color: #dcdcd4;
    margin-left: auto;
    margin-right: auto;
    width: 36%;
    position: absolute;
    left: 270px;
    top: 600px;
`
const Button = styled.a`

display: inline-block;
    position: absolute;
    left: 80px;
    top: 340px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    padding: 50px 30px;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
    border-image: initial;
    width: 15%;
    height: 10%;
    :hover {
      background-color: #555555;
      color: white;
    }
    
    
`

const Button2 = styled.a`

display: inline-block;
    position: absolute;
    left: 580px;
    top: 700px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    padding: 50px 30px;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
    border-image: initial;
    width: 15%;
    height: 10%;
    :hover {
      background-color: #555555;
      color: white;
    }
    
    
`


const IndexPage = () => (
  
  <Layout>
    <Title>CURRENT DEALS</Title>
    <Image src={promo1} alt='something here'/>
    <Par1>PROMO NAME HERE</Par1>
    <Image2 src={promo2} alt='something here'/>
    <Par2>PROMO 2 NAME HERE</Par2>
    <Button href="https://codepen.io/lhorainemarinas/full/qmyvoQ/">BUY NOW</Button> 
    <Button2 href="https://codepen.io/lhorainemarinas/full/qmyvoQ/">BUY NOW</Button2>
    
    
    
    
  </Layout>
)

export default IndexPage
