import React from "react"
import presets from "../utils/presets"
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  background: #fff;
  border-radius: ${presets.radiusLg};
  box-shadow: 0 5px 20px rgba(25, 17, 34, 0.1);
  transform: translateZ(0);
`

// const Cards = ({ children }) => (
//   <div
//     css={{
//       display: `flex`,
//       flex: `0 1 auto`,
//       flexWrap: `wrap`,
//       background: `#fff`,
//       borderRadius: presets.radiusLg,
//       boxShadow: `0 5px 20px rgba(25, 17, 34, 0.1)`,
//       transform: `translateZ(0)`,
//     }}
//   >
//     {children}
//   </div>
// )

const Cards = ({ children }) => {
  return (
    <CardsContainer>
      {children}
    </CardsContainer>
  )
}

export default Cards
