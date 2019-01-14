import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  width: 180px;
  padding-right: 20px;
  padding-left: 20px;
`

const ClientLogo = styled.div`
  align-items: center;
  display; flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  height: 35px;
  justify-content: center;
  margin-bottom: 50px;
  max-height: 60px;
`

const LogoImage = styled.img`
  border: 0;
  max-width: 100%;
  max-height: 35px;
  width: auto;
  vertical-align: middle;
  display: inline-block;
`

const Client = ({ client, ...props }) => {
  return (
    <LogoContainer>
      <ClientLogo>
        <LogoImage src={client.logo.file.url} />
      </ClientLogo>
    </LogoContainer>
  )
}

export default Client
