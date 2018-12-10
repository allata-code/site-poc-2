import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PersonList from '../components/person-list'
import Person from '../components/person'
import CoreValue from '../components/core-value'
import City from '../components/city'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const ValueList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  justify-content: center;
  margin: 0 auto;
`

const About = ({ data }) => {
  const persons = data.allContentfulPerson.edges
  const cities = data.allContentfulCity.edges
  const values = data.allContentfulCoreValue.edges
  const postNode = {
    title: `About - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`About - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="about" customTitle />

      <Container>
        <h1 className="shrink align-right">
          We are the music makers, and we are the dreamers of dreams.
        </h1>
        <div className="text">
          We're go-getters and ever-learners, always willing to take on a new
          challenge. We are committed to excellence in delivery, accountability,
          and understanding, and feel strongly that you should never doubt what nobody is sure about.
        </div>
      </Container>
      <Container>
        <PageTitle>Locations</PageTitle>
        <PersonList>
          {cities.map(({ node }) => {
            return <City key={node.id} city={node} />
          })}
        </PersonList>
      </Container>
      <Container>
        <PageTitle>Core Values</PageTitle>
        <ValueList>
          {values.map(({ node }) => {
            return <CoreValue key={node.id} coreValue={node} />
          })}
        </ValueList>
      </Container>
      <Container>
        <PageTitle>Leadership</PageTitle>
        <PersonList>
          {persons.map(({ node }) => {
            return <Person key={node.id} person={node} />
          })}
        </PersonList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPerson(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          title
          linkedIn
          shortBio {
            shortBio
            id
          }
          headshot {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    allContentfulCity(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          cityscape {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    allContentfulCoreValue(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`

export default About
