import React from "react"
import styled from 'styled-components'
import presets from "../utils/presets"
import { scale } from "../utils/typography"

const MissionFlexContainer = styled.div`
  box-sizing: border-box;
  min-height: 280px;
  padding: 10px;
  width: 100%;

  ${presets.Mobile} {
    width: 100%;
  }
  ${presets.Tablet} {
    width: 50%;
  }
  ${presets.Desktop} {
    width: 33.33%;
  }
  ${presets.VHd} {
    width: 33.33%;
  }
  ${presets.VVHd} {
    font-size: ${scale(8 / 10).fontSize};
  }
`

const MissionFlex = ({ children }) => (
  <MissionFlexContainer>
    {children}
  </MissionFlexContainer>
)

export default MissionFlex
