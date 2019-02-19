import React from 'react'
import styled from 'styled-components'
import presets, { colors } from '../utils/presets'
import { rhythm } from '../utils/typography'
import { vP, vPHd, vPVHd } from './gutters'
import { scale } from '../utils/typography'
import { node } from 'prop-types';
import { Button } from 'bloomer'


const OfferingContainer = styled.div`
  box-sizing: border-box;
  min-height: 280px;
  flex-flow: column;
  display: flex;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 20px;

  ${presets.Mobile} {
    width: 100%;
  }
  ${presets.Tablet} {
    width: 50%;
    padding-right: 40px;
  }
  ${presets.Desktop} {
    width: 25%;
    padding-right: 40px;
  }
  ${presets.VHd} {
    width: 50%;
    padding-right: 40px;
  }
  ${presets.VVHd} {
    font-size: ${scale(8 / 10).fontSize};
  }
`

const OfferingIcon = styled.img`
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
`

const Headline = styled.h2`
  line-height: 1.2;
  font-weight: 700;
  color: ${props => props.theme.colors.base};
  margin-top: 0;
  ...scale(2 / 5);

  ${presets.Tablet} {
    font-size: ${scale(2 / 10).fontSize};
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
const IconContainer = styled.div`
  align-items: center;
  width: 100%;
  text-align: center;
`

const TextContainer = styled.div`
  padding-bottom: 0;
  transform: translateZ(0);
  display: flex;
  flex-direction: column;
  flex: 2;
`

const LearnMore = styled.button`
  margin-top: 16px;
  border: 1px grey solid;
  font-size: 0.8em;
  padding: 8px;
`

const Offering = ({ offering, children, ...props }) => {
  return (
    <OfferingContainer key={node.id}>
      <IconContainer>
        <OfferingIcon src={offering.icon.file.url} />
      </IconContainer>
      <TextContainer>
        <Headline>{offering.name}</Headline>
        <div className="text">
          {offering.description.description.substring(0, 240)}
          ...
        </div>
      </TextContainer>
      <Button isColor='primary'>learn more</Button>
    </OfferingContainer>
  )
}

export default Offering
