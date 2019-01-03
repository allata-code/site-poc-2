import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  object-fit: cover !important;
  object-position: 50% 50% !important;
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`

const Hero = props => (
  <Wrapper>
    <HeroImage src={props.image} />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
