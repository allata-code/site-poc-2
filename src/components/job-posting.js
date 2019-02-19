import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Box, Tag } from 'bloomer'

const Container = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
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
  margin: 0rem 0rem 0.5rem 0rem;
`

const List = styled.div`
  >* {
    margin-right: 5px;
  }
`

const LinkedIn = styled.a`
  margin: 1rem 1rem 0.5rem 1rem;
`

const Bio = styled.p`
  margin: 1rem 1rem 0.5rem 1rem;
`

const JobPosting = ({ jobPosting, ...props }) => {
  return (
    <Box>
      <Link to={`/${jobPosting.slug}/`}>
        <Name>{jobPosting.jobTitle}</Name>
        <List>
          {jobPosting.locations.map(city => {
            return <Tag key={city.id} isColor="primary">{city.name}</Tag>
          })}
        </List>
      </Link>
    </Box>
  )
}

export default JobPosting
