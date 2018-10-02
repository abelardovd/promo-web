import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'


import promo1 from '../images/promo1.png'

const Title = styled.h1`
  font-size: 4.5em;
  text-align: center;
  color:  #404040;
  position: absolute;
  left: 380px;
    top: 0px;
`
const Par1 = styled.h1`
padding: 100px 15px;

  font-size: 0.9em;
  text-align: center;
  color: gray;
  position: absolute;
    left: 230px;
    top: 150px;
    border-width: 5px;
    border-style: solid;
    border-color: black;
    width: 30%;
    height: 50%;
    z-index: -1;
`

const Image = styled.img`
    background-color: #dcdcd4;
    margin-left: auto;
    margin-right: auto;
    width: 36%;
    position: absolute;
    left: 500px;
    top: 200px;
`
const Button = styled.a`

display: inline-block;
    position: absolute;
    left: 300px;
    top: 300px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    padding: 100px 30px;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
    border-image: initial;
    width: 15%;
    height: 18%;
    :hover {
      background-color: #555555;
      color: white;
    }
    
    
`


const IndexPage = () => (
  <Layout>
    <Image src={promo1} alt='something here'/>
    <Title>CURRENT DEALS</Title>
    <Par1>PROMO NAME HERE</Par1>
    <Button href="https://codepen.io/lhorainemarinas/full/qmyvoQ/">BUY NOW</Button> 
    
    
    
    
  </Layout>
)

export default IndexPage
