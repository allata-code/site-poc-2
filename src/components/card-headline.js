import React from "react"
import styled from 'styled-components'
import presets from "../utils/presets"
import { scale } from "../utils/typography"

const Headline = styled.h2`
  line-height: 1.2;
  font-weight: 700;
  color: ${props => props.theme.colors.base};
  margin-top: 0;
  ...scale(2 / 5);

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

const CardHeadline = ({ children }) => (
  <Headline>
    {children}
  </Headline>
)

export default CardHeadline
