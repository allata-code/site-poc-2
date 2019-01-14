import React from 'react'
import styled from 'styled-components'
import presets, { colors } from '../utils/presets'
import { rhythm } from '../utils/typography'
import { vP, vPHd, vPVHd } from './gutters'

const OfferingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  transform: translateZ(0);
  margin-bottom: 24px;

  ${presets.Tablet} {
    flex: 0 0 auto;
    max-width: 100%;
    box-shadow: 0 1px 0 0 ${colors.ui.light};
  }

  ${presets.Hd} {
    flex: 0 0 auto;
    max-width: 100%;
  }
`

const Inner = styled.div`
  padding-bottom: 0;
  transform: translateZ(0);

`

const Offering = ({ children }) => {
  return (
    <OfferingContainer>
      <Inner>{children}</Inner>
    </OfferingContainer>
  )
}

export default Offering
