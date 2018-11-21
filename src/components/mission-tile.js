import React from "react"
import styled from 'styled-components'
import presets from "../utils/presets"
import { scale } from "../utils/typography"

const Tile = styled.div`
  box-sizing: border-box;
  min-height: 280px;
  background-color: white;
  padding: 40px;
  background-color: red;
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

const MissionTile = ({ mission, ...props }) => (
  <Tile>
    <Description>{mission.description} {mission.client.brandingHexColor}</Description>
    <h2>{mission.client.name}</h2>
  </Tile>
)

export default MissionTile
