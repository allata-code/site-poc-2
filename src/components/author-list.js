import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Name = styled.span`
  // margin: 0 1rem 1rem 1rem;
  // line-height: 1.6;
`

const AuthorList = ({ authors, ...props }) => {
  return authors.map(node => {
    return <Name key={node.id}>{node.name}</Name>
  })
}

export default AuthorList
