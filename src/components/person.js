import React from 'react'
import styled from 'styled-components'
import presets from '../utils/presets'
import { scale } from '../utils/typography'
import Img from 'gatsby-image'

const Container = styled.div`
  box-sizing: border-box;
  min-height: 280px;
  padding: 40px;
  display: flex;
  flex-flow: column;

  ${presets.Tablet} {
    font-size: ${scale(1 / 10).fontSize};
  }
  ${presets.Desktop} {
    font-size: ${scale(3 / 10).fontSize};
  }
  ${presets.VHd} {
    font-size: ${scale(5 / 10).fontSize};
  }
  ${presets.VVHd} {
    font-size: ${scale(7 / 10).fontSize};
  }
`
const Description = styled.h1`
  display: flex;
  flex: 1;
`

const Person = ({ person, ...props }) => (
  <Container>
    <Description>
      {person.name}
    </Description>
  </Container>
)

export default Person
