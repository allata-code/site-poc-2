import React from 'react'
import styled from 'styled-components'
import presets from '../utils/presets'

const Wrapper = styled.footer`
  padding-top: 48px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const FooterHeader = styled.h1`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 24px;
`

const Address = styled.address`
  margin-bottom: 24px;
  margin-right: 24px;
  font-size: 14px;
  line-height: 1.5em;
`

const AddressList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  // border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const CopyrightBlock = styled.div`
  width: 100%;
  margin: 24px;
  text-align: center;
`

const CauseBlock = styled.div`
  width: 100%;
  margin-bottom: 16px;

  ${presets.Mobile} {
    width: 100%;
  }
  ${presets.Tablet} {
    width: 100%;
  }
  ${presets.Desktop} {
    width: 35%;
  }
`

const Cause = styled.p`
  font-size: 14px;
  line-height: 1.5em;
`

const AddressBlock = styled.div`
  width: 100%;
  margin-bottom: 16px;
  line-height: 1.5em;

  ${presets.Mobile} {
    width: 100%;
  }
  ${presets.Tablet} {
    width: 100%;
  }
  ${presets.Desktop} {
    width: 60%;
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <AddressBlock>
        <FooterHeader>Our offices</FooterHeader>
        <AddressList>
          <Address>
            Boise
            <br />
            776 E. Riverside Dr, #100
            <br />
            Eagle, ID 83616
            <br />
          </Address>
          <Address>
            Dallas
            <br />
            10260 N Central Expwy, #217
            <br />
            Dallas, TX 75231
            <br />
          </Address>
          <Address>
            Phoenix
            <br />1 N. 1st St, #691
            <br />
            Phoenix, AZ 85004
            <br />
          </Address>
        </AddressList>
      </AddressBlock>
      <CauseBlock>
        <FooterHeader>Working for a cause</FooterHeader>
        <Cause>
          Just as strongly as we care about our clients, we feel that it's
          important to give back to the community. Each year, we donate 1% of
          our net income to a different charitable cause or non-profit that
          we're passionate about.
        </Cause>
      </CauseBlock>
      <CopyrightBlock>© 2019 Allata, LLC. All rights reserved.</CopyrightBlock>
    </List>
  </Wrapper>
)

export default Footer
