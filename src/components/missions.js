import React from "react"
import presets from "../utils/presets"
import styled from 'styled-components'

const MissionsContainer = styled.div`
  display: flex;
  flex: row;
  flex-wrap: wrap;
  transform: translateZ(0);
  margin: 0 -10px;
`

const Missions = ({ children }) => {
  return (
    <MissionsContainer>
      {children}
    </MissionsContainer>
  )
}

export default Missions
