import React from 'react'
import styled from 'styled-components'
import presets, { colors } from '../utils/presets'
import { rhythm } from '../utils/typography'
import { vP, vPHd, vPVHd } from '../components/gutters'

// const Cardeee = ({ children }) => (
//   <div
//     css={{
//       boxSizing: `border-box`,
//       display: `flex`,
//       transform: `translateZ(0)`,
//       [presets.Tablet]: {
//         flex: `0 0 auto`,
//         maxWidth: `50%`,
//         boxShadow: `0 1px 0 0 ${colors.ui.light}`,
//         '&:nth-child(5),&:nth-child(6)': {
//           boxShadow: `none`,
//         },
//         '&:nth-child(2n)': {
//           borderLeft: `1px solid ${colors.ui.light}`,
//         },
//       },
//       [presets.Hd]: {
//         flex: `0 0 auto`,
//         maxWidth: `33.33333333%`,
//         borderLeft: `1px solid ${colors.ui.light}`,
//         '&:nth-child(4)': {
//           boxShadow: `none`,
//         },
//         '&:nth-child(3n+1)': {
//           borderLeft: 0,
//         },
//       },
//     }}
//   >
//     <div
//       css={{
//         padding: rhythm(presets.gutters.default / 2),
//         paddingBottom: 0,
//         transform: `translateZ(0)`,
//         [presets.Mobile]: {
//           padding: vP,
//           paddingBottom: 0,
//         },
//         [presets.Phablet]: {
//           padding: vP,
//         },
//         [presets.VHd]: {
//           padding: vPHd,
//         },
//         [presets.VVHd]: {
//           padding: vPVHd,
//         },
//       }}
//     >
//       {children}
//     </div>
//   </div>
// )

const Outer = styled.div`

box-sizing: border-box;
display: flex;
transform: translateZ(0);

${presets.Tablet} {
  flex: 0 0 auto;
  max-width: 50%;
  box-shadow: 0 1px 0 0 ${colors.ui.light};
  &:nth-child(5),&:nth-child(6): {
    box-shadow: none;
  }
  &:nth-child(2n): {
    border-left: 1px solid ${colors.ui.light};
  }
}

${presets.Hd} {
  flex: 0 0 auto;
  max-width: 33.33333333%;
  border-left: 1px solid ${colors.ui.light};
  &:nth-child(4): {
    box-shadow: none;
  }
  &:nth-child(3n+1): {
    border-left: 0;
  }
}
`

const Inner = styled.div`
  padding: ${rhythm(presets.gutters.default / 2)};
  padding-bottom: 0;
  transform: translateZ(0);
  ${presets.Mobile} {
    padding: ${vP};
    padding-bottom: 0;
  }
  ${presets.Phablet} {
    padding: ${vP};
  }
  ${presets.VHd} {
    padding: ${vPHd};
  }
  ${presets.VVHd} {
    padding: ${vPVHd};
  }
`

const Cardeee = ({ children }) => {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  )
}

export default Cardeee
