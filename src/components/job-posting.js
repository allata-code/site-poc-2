import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Name = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const LinkedIn = styled.a`
  margin: 1rem 1rem 0.5rem 1rem;
`

const Bio = styled.p`
  margin: 1rem 1rem 0.5rem 1rem;
`

const JobPosting = ({ jobPosting, ...props }) => {
  return (
    <Container>
      <Link to={`/${jobPosting.slug}/`}>
        <Name>{jobPosting.jobTitle}</Name>
        {/* <Bio>{person.shortBio.shortBio}</Bio> */}
      </Link>
    </Container>
  )
}

export default JobPosting
